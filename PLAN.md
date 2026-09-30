# Plan — calculadora orientativa de precio/hora

## Propuesta de valor
Herramienta gratuita, sin registro, que muestra una base por hora y una tarifa orientativa a partir de cinco datos: gastos fijos mensuales, gastos variables mensuales, remuneración propia mensual deseada, horas facturables mensuales y recargo sobre costes. El resultado no promete un sueldo neto ni sustituye asesoramiento fiscal.

## Público
Autónomos y freelancers en España que quieren poner números a una tarifa inicial sin crear una cuenta. Ejemplo de uso: probar diferentes estimaciones de horas facturables y ver el efecto en la tarifa.

## Estructura
- Una sola página con formulario semántico, estado vacío, dos cifras de resultado y desglose de cinco pasos.
- Fórmula: base mensual = gastos fijos + variables + remuneración propia; base/hora = base mensual / horas facturables; tarifa orientativa/hora = base/hora × (1 + recargo/100).
- El recargo es sobre costes, NO margen sobre ventas; el salario neto después de impuestos no se calcula.
- Campos obligatorios: gastos y recargo ≥ 0; remuneración y horas > 0. Ocultar resultados obsoletos al modificar los valores. Ejemplo: 400 + 150 + 1800 = 2350; /100 = 23,50; × 1,2 = 28,20 €/h.
- Ayudas junto al campo de horas: ventas, gestión, vacaciones y bajas restan horas facturables. Aviso fiscal y de límites al lado del resultado.
- Responsable identificado: PMR Industries (marca asociada al propietario y al repositorio público del proyecto). Analítica enlazada pero la activación en Vercel es opcional y depende del propietario.

## Referencias consideradas en la revisión
- https://www.infoautonomos.com/utilidades/plantillas/plantilla-de-calculo-del-precio-hora-cobrar-por-tu-trabajo/
- https://es.calcuworld.com/calculadoras-empresariales/tarifas-para-autonomos-y-freelancers/

## Calidad y salida
HTML semántico; CSS responsive; title, description, OG, canonical, robots, sitemap, favicon; labels, errores inline, aria-live; cálculo local sin dependencias; test en Node y site_check ≥85 sin fallos críticos. Tras revisión independiente, media ≥7.5/10 y ninguna nota bajo 6. Cambios en producción solo previa aprobación del propietario.
