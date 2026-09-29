# PLAN — Calculadora de Precio/Hora para Autónomos

## Propuesta de valor
Prototipo web minimalista y gratuito, sin registro, que calcula en tiempo real el precio/hora que un autónomo debe cobrar a partir de 4 datos: costes fijos mensuales, costes variables mensuales, horas facturables al mes y margen de beneficio deseado (%). Resuelve el problema de "poner precio a ojo" mostrando el desglose completo (costes totales → coste/hora → precio/hora con margen) de forma transparente y educativa, en un único vistazo, sin necesidad de conocimientos financieros.

## Público
Freelancers y autónomos en España (y LatAm) que arrancan o revisan sus tarifas: diseñadores, programadores, consultores, fotógrafos, redactores, artesanos. Buscan una respuesta inmediata desde el móvil, sin registrarse ni dar el email. Nivel de exigencia: quieren un número fiable en segundos, no una hoja de cálculo compleja.

## Estructura (single-page)
1. **Header**: título + subtítulo claro de qué hace la calculadora.
2. **Formulario** (4 campos, recalcula on-input y con botón "Calcular" para accesibilidad):
   - Costes fijos mensuales (€) — alquiler, software, seguros, cuota autónomo, etc.
   - Costes variables mensuales (€) — materiales, comisiones, desplazamientos, etc.
   - Horas facturables al mes — horas reales que se pueden cobrar a clientes.
   - Margen de beneficio deseado (%) — por defecto 20%.
3. **Resultado inmediato**:
   - Costes totales = fijos + variables.
   - Coste/hora = costes totales / horas facturables.
   - **Precio/hora recomendado** = coste/hora × (1 + margen/100).
   - Desglose visual paso a paso (no es caja negra).
4. **Aviso**: nota breve de que es una estimación orientativa (no incluye impuestos ni asesoría fiscal), y que conviene revisar con un gestor.
5. **Footer**: mini nota de autoría, sin enlaces rotos, analítica Vercel (sin cookies invasivas).

## Referencias (URL)
- https://www.infoautonomos.com/calculadoras/calculadora-precio-hora-freelance/ — modelo de referencia: costes + horas → precio/hora, estándar del sector.
- https://www.sba.gov/business-guide/manage-your-business/calculate-freelance-rate — enfoque comparable (costes fijos+variables, horas facturables, margen) usado por guías de negocio para freelancers.
- https://www.freshbooks.com/hub/pricing/hourly-rate-calculator — ejemplo de calculadora hourly-rate simple con margen configurable, referencia de UX minimalista.

## Criterios de calidad
- Cálculo correcto y consistente (validado con casos de prueba a mano: costes=0, horas=0, valores típicos).
- Inputs validados: no negativos, no vacíos, horas>0 obligatorio, mensajes de error claros e inline.
- Responsive real con @media (móvil/tablet/desktop).
- SEO técnico: title, meta description, H1 único, lang="es", viewport, OG tags, robots.txt, sitemap.xml, favicon.
- Accesibilidad: labels asociadas a cada input, contraste AA, atributos aria donde aplique.
- Sin dependencias externas pesadas: vanilla HTML/CSS/JS, carga instantánea, sin frameworks.
- Copy completo, sin marcadores ni texto de relleno tipo "lorem ipsum".
- site_check ≥ 85/100 sin fallos críticos antes de publicar; revisión crítica media ≥ 7.5/10 sin ninguna nota bajo 6.
