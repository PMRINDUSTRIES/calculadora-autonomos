const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const html = fs.readFileSync(__dirname + '/index.html', 'utf8');
const js = html.match(/<script>\s*([\s\S]*?)<\/script>/)?.[1];
assert.ok(js, 'Debe existir JavaScript de cálculo');
const nodes = new Map();
for (const id of ['calc-form','resultado','estado-inicial','fijos','variables','sueldo','horas','margen',...['fijos','variables','sueldo','horas','margen'].map(x=>'error-'+x), 'coste-hora','precio-recomendado','d-fijos','d-variables','d-sueldo','d-total','d-horas','d-coste-hora','d-margen','d-precio-final']) {
  nodes.set(id, { value:'', textContent:'', hidden:id==='resultado', attrs:{}, addEventListener(type, fn){this[type]=fn;}, setAttribute(k,v){this.attrs[k]=v;}, removeAttribute(k){delete this.attrs[k];}, focus(){this.focused=true;} });
}
nodes.get('margen').value = '20';
vm.runInNewContext(js, { document: { getElementById: id => { assert.ok(nodes.has(id), id); return nodes.get(id); } } });
const get = id => nodes.get(id);
assert.equal(get('resultado').hidden, true);
assert.equal(get('estado-inicial').hidden, false);
Object.entries({ fijos:'400', variables:'150', sueldo:'1800', horas:'100' }).forEach(([id,v])=>get(id).value=v);
get('calc-form').submit({preventDefault(){}});
assert.equal(get('resultado').hidden, false);
assert.match(get('precio-recomendado').textContent, /28,20\s*€\s*\/h/);
assert.match(get('coste-hora').textContent, /23,50\s*€\s*\/h/);
get('horas').value = '0';
get('horas').input();
assert.equal(get('resultado').hidden, true, 'No conservar resultados tras modificar entradas');
get('calc-form').submit({preventDefault(){}});
assert.match(get('error-horas').textContent, /más de 0/);
get('horas').value = '100'; get('sueldo').value='';
get('calc-form').submit({preventDefault(){}});
assert.match(get('error-sueldo').textContent, /mayor que 0/);
console.log('OK: ejemplo 28,20 €/h, estado vacío y entradas inválidas');
