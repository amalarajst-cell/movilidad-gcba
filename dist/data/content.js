// Content Database for Manual de Seguridad Vial
// Actualizado según propuesta: 2 encuentros presenciales
const COURSE_DATA = {
    intro: {
        id: 'intro',
        title: 'Seguridad Vial para la Movilidad Laboral',
        subtitle: 'Formación Profesional - Terminalidad Secundaria',
        content: `
            <div class="alert alert-primary" style="background: linear-gradient(135deg, #1D3557 0%, #457B9D 100%); color: white; border: none;">
                <h4 style="color: white; margin-top: 0;">Propuesta de Formación:</h4>
                <h3 style="color: #FFB703; margin-bottom: 0.5rem;">Seguridad Vial para la Movilidad Laboral</h3>
                <p style="margin-bottom: 0;"><strong>Dirigido a:</strong> Equipo de Educación Profesional Secundaria</p>
                <p style="margin-bottom: 0; font-size: 0.9rem;"><strong>Institución Responsable:</strong><br>
                Centro de Formación Profesional de Educación y Convivencia Vial<br>
                Dirección General de Seguridad Vial (GCBA)</p>
            </div>
            
            <h3>Fundamentación</h3>
            <p>En el contexto de la <strong>terminalidad secundaria</strong>, el uso de motovehículos y bicicletas se presenta no sólo como un medio de transporte personal, sino como una <strong>herramienta de trabajo fundamental</strong> (servicios de mensajería, delivery, traslados).</p>
            
            <p>La seguridad vial, por tanto, deja de ser solo una norma de convivencia para transformarse en una <strong>competencia profesional y de autocuidado</strong>.</p>
            
            <p>Este programa busca dotar a los jóvenes de <strong>herramientas técnicas y cognitivas</strong> que les permitan gestionar el riesgo en la vía pública, entendiendo la física del movimiento y la vulnerabilidad del cuerpo humano frente a los siniestros viales.</p>
            
            <h3>Objetivo General</h3>
            <p>Capacitar a los estudiantes en la <strong>conducción segura y responsable</strong> de motos y bicicletas, integrando conceptos de:</p>
            <ul>
                <li>Física vial</li>
                <li>Percepción del riesgo</li>
                <li>Adaptabilidad climática</li>
            </ul>
            <p>Para su inserción en el <strong>mundo laboral y ciudadano</strong>.</p>
            
            <h3>Modalidad y Cronograma</h3>
            <ul>
                <li><strong>Formato:</strong> Presencial con soporte digital</li>
                <li><strong>Duración:</strong> 2 encuentros de 3 horas cada uno</li>
                <li><strong>Frecuencia:</strong> Una vez por semana (día a coordinar con la institución)</li>
                <li><strong>Integración Digital:</strong> Material para plataformas LMS (Moodle, Google Classroom) y herramientas tecnológicas interactivas</li>
            </ul>
            
            <h3>Programa de Contenidos</h3>
            <table class="table" style="width: 100%; border-collapse: collapse; margin: 1.5rem 0;">
                <thead style="background-color: #1D3557; color: white;">
                    <tr>
                        <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Encuentro</th>
                        <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Ejes Temáticos</th>
                        <th style="padding: 12px; text-align: left; border: 1px solid #ddd;">Contenidos Específicos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #ddd;"><strong>01</strong><br>La Física del Riesgo</td>
                        <td style="padding: 12px; border: 1px solid #ddd;">Dinámica y Vulnerabilidad</td>
                        <td style="padding: 12px; border: 1px solid #ddd;">
                            • Fuerza de impacto: La vulnerabilidad del cuerpo<br>
                            • Inercia y fricción en dos ruedas<br>
                            • Percepción de velocidad y distancia de frenado
                        </td>
                    </tr>
                    <tr style="background-color: #f8f9fa;">
                        <td style="padding: 12px; border: 1px solid #ddd;"><strong>02</strong><br>Gestión del Entorno</td>
                        <td style="padding: 12px; border: 1px solid #ddd;">Visión y Clima</td>
                        <td style="padding: 12px; border: 1px solid #ddd;">
                            • Gestión de la mirada y zonas ciegas<br>
                            • Conducción en condiciones meteorológicas adversas<br>
                            • Maniobrabilidad en superficies complejas
                        </td>
                    </tr>
                </tbody>
            </table>
            
            <h3>Desarrollo Pedagógico</h3>
            
            <h4>La Vulnerabilidad y la Fuerza de Impacto</h4>
            <p>Se analizará mediante la fórmula de energía cinética <strong>E<sub>k</sub> = ½ m v²</strong>, cómo el aumento de la velocidad incrementa exponencialmente el daño físico en caso de colisión. Se hará especial énfasis en el equipamiento de protección como "seguridad pasiva".</p>
            
            <h4>Dinámica de Frenado y Fricción</h4>
            <ul>
                <li><strong>Distancia de detención:</strong> Suma de la distancia de reacción + distancia de frenado</li>
                <li><strong>Fricción:</strong> Importancia del estado de los neumáticos y la calzada (asfalto seco vs. mojado)</li>
            </ul>
            
            <h4>Gestión de la Visión (Zonas Ciegas)</h4>
            <p>Entrenamiento en la "visión periférica" y la importancia de hacerse ver frente a vehículos de gran porte, identificando los ángulos donde los conductores pierden de vista a los ciclistas y motociclistas.</p>
            
            <h3>Integración Tecnológica - Kit Digital Educativo</h3>
            <div class="alert alert-info">
                <strong>El Centro de Formación Profesional entrega un Kit Digital que incluye:</strong>
                <ul style="margin-top: 0.5rem; margin-bottom: 0;">
                    <li>Cuestionarios interactivos para evaluación diagnóstica</li>
                    <li>Videos de simulaciones de maniobras</li>
                    <li>Documentación técnica en formato PDF</li>
                    <li>Manual interactivo optimizado para dispositivos móviles</li>
                </ul>
            </div>
            
            <div class="alert alert-success" style="margin-top: 2rem;">
                <p class="text-center" style="margin: 0;">
                    <strong>¡Comencemos tu formación profesional en seguridad vial!</strong>
                </p>
            </div>
        `,
        hasQuiz: false,
        hasForm: false
    },

    encuentro1: {
        id: 'encuentro1',
        title: 'Capítulo 1: Percepción de la Velocidad y Distancias de Frenado',
        subtitle: 'La Velocidad como Factor Crítico en la Conducción de Motocicletas',
        content: `
            <h3><strong>Introducción: La velocidad como factor crítico en la conducción de motocicletas</strong></h3>
            
            <p>La velocidad en la conducción de motovehículos no debe entenderse únicamente como la relación física entre distancia y tiempo. Se trata de un elemento decisivo en la seguridad vial, capaz de reducir de manera exponencial el tiempo de reacción del conductor y de incrementar significativamente la gravedad de las lesiones en caso de colisión.</p>
            
            <p>Más allá de su definición técnica, la velocidad influye directamente en la conducción: la capacidad de respuesta ante imprevistos, la distancia de frenado y la estabilidad de la moto. Estos factores, combinados, determinan el nivel de riesgo al que se expone un motociclista en cada desplazamiento.</p>
            
            <p>Por sus características, el aumento de la velocidad limita el margen de maniobra y obliga al conductor a tomar decisiones más rápidas, muchas veces apresuradas, lo que eleva la probabilidad de incidentes viales. Comprender esta relación permite adoptar una conducción más seguras y mitigar los factores de riesgos asociados.</p>
            
            <h3>Definición técnica</h3>
            <p>La velocidad es una relación distancia/tiempo: es el espacio que se recorre en un determinado tiempo y suele expresarse en kilómetros por hora (km/h).</p>
            
            <p>La velocidad se mide dividiendo la distancia recorrida por el tiempo que se tarda en hacerlo. Un vehículo a 40 km/h recorre aproximadamente 11.11 metros en 1 segundo.</p>
            
            <div class="alert alert-info">
                <strong>Ejemplo:</strong> Un motovehículo a diferentes velocidades recorre:
                <ul>
                    <li>A 30 km/h → 8.3 metros por segundo</li>
                    <li>A 60 km/h → 16.7 metros por segundo</li>
                    <li>A 100 km/h → 27.8 metros por segundo</li>
                </ul>
            </div>
            
            <p>Tener noción de la distancia que se recorre en un determinado tiempo, permite conocer el margen de maniobra con que se cuenta en caso de que surgiese un imprevisto. El exceso de velocidad es un factor esencial en la producción de incidentes de tránsito y uno de los que determinan la existencia de víctimas fatales o lesiones graves.</p>
            
            <h3><strong>El Impacto Crítico de la Velocidad en el Motociclista</strong></h3>
            
            <div class="alert alert-danger">
                <strong>Dato Crítico:</strong> El cuerpo humano sin protección NO resiste impactos superiores a <strong>15 km/h</strong> sin sufrir lesiones graves o fatales.
            </div>
            
            <p>A mayor velocidad, la probabilidad de muerte o de lesiones graves aumenta exponencialmente dado que el cuerpo humano es vulnerable al recibir una fracción de la energía que se libera luego de una colisión. Los motociclistas, están especialmente expuestos a estas fuerzas cinéticas, lo que aumenta significativamente el riesgo de lesiones graves o fatales.</p>
            
            <h4>Energía Cinética: La Física del Impacto</h4>
            <div class="alert alert-info" style="text-align: center; font-size: 1.25rem;">
                <strong>E<sub>k</sub> = ½ × m × v²</strong>
            </div>
            
            <p>Como la velocidad está elevada al cuadrado, si duplicás la velocidad, cuadruplicás la energía de impacto.</p>
            
            <p><strong>Comparación con Caídas de Altura:</strong></p>
            <ul>
                <li>Choque a <strong>40 km/h</strong> = Caer desde un <strong>3er piso</strong></li>
                <li>Choque a <strong>60 km/h</strong> = Caer desde un <strong>5to piso</strong></li>
                <li>Choque a <strong>80 km/h</strong> = Caer desde un <strong>8vo piso</strong></li>
            </ul>
            
            <div class="widget-container">
                <div id="impactSlider" class="widget"></div>
            </div>
            
            <h3><strong>Percepción de la Velocidad en Motociclistas</strong></h3>
            
            <p>La percepción de la velocidad no es un proceso objetivo y directo, sino un constructor neurocognitivo influenciado por una gran variedad de factores sensoriales, cognitivos y emocionales. Comprender la naturaleza subjetiva de esta percepción es de importancia estratégica para los profesionales de la seguridad vial y los instructores de conducción.</p>
            
            <h4>El Rol Dominante de la Visión</h4>
            <p>La visión es el sentido principal y más influyente en la percepción de la velocidad. El cerebro utiliza la información visual del entorno para construir una estimación de la rapidez del desplazamiento.</p>
            
            <p>El movimiento relativo de objetos fijos en el paisaje, como árboles, postes o edificios, sirve como una ayuda visual fundamental. El ritmo al que estos elementos pasan por el campo visual del conductor le proporciona una referencia constante para calibrar su velocidad.</p>
            
            <h4>Efecto túnel</h4>
            <p>Se llama efecto túnel a la pérdida de campo de visión lateral. Esta puede ocurrir por el aumento de velocidad:</p>
            <ul>
                <li>A 35 km/h: campo de visión de <strong>104 grados</strong></li>
                <li>A 65 km/h: campo de visión reducido a <strong>70 grados</strong></li>
                <li>A 100 km/h: campo de visión de apenas <strong>42 grados</strong></li>
                <li>A partir de 130 km/h: campo de visión de <strong>30 grados</strong> (efecto túnel completo)</li>
            </ul>
            
            <div class="alert alert-warning">
                <strong>Peligro:</strong> El efecto túnel reduce la capacidad de percibir lo que sucede a los lados del camino, limitando la reacción ante posibles obstáculos o situaciones imprevistas.
            </div>
            
            <h4>La Influencia del Entorno Auditivo</h4>
            <p>Aunque la visión es dominante, los estímulos auditivos actúan como un factor secundario pero muy influyente:</p>
            <ul>
                <li><strong>Ruido del viento:</strong> Su intensidad aumenta proporcionalmente a la velocidad</li>
                <li><strong>Sonido del motor:</strong> Un motor a altas revoluciones se asocia con mayor velocidad</li>
                <li><strong>Sonidos ambientales:</strong> Contribuyen a la percepción global de rapidez</li>
            </ul>
            
            <h4>Factores Cognitivos y Contextuales</h4>
            <p><strong>La Experiencia del Conductor:</strong> Un conductor experimentado puede percibir la velocidad de manera más precisa. Un conductor novel carece de este marco de referencia consolidado, lo que puede llevar a una sobreestimación o subestimación de la velocidad.</p>
            
            <p><strong>Interacción con Otros Actores Viales:</strong> Al circular en paralelo a un vehículo que se desplaza a una velocidad similar, la sensación de velocidad propia puede disminuir peligrosamente.</p>
            
            <h4>Factores Psicofísico y Emocionales</h4>
            <ul>
                <li><strong>Estrés:</strong> Puede provocar que el conductor sienta que se desplaza más rápido de la velocidad real</li>
                <li><strong>Fatiga:</strong> Un conductor fatigado puede subestimar la velocidad en tramos monótonos</li>
                <li><strong>Adrenalina:</strong> Intensifica la sensación de velocidad o la distorsiona</li>
            </ul>
            
            <h3>Tiempo de reacción</h3>
            
            <p>El tiempo de reacción se define como el intervalo de tiempo que transcurre entre la presentación de un estímulo y la respuesta dada por la persona a dicho estímulo. Este concepto es crucial en la conducción, ya que refleja la capacidad que tienen las personas para detectar, procesar y responder a eventos en su entorno.</p>
            
            <p>El tiempo de reacción de un conductor se puede dividir en tres fases principales:</p>
            
            <ol>
                <li><strong>Percepción:</strong> Es la fase inicial donde los estímulos visuales forman una imagen en el ojo. Esta información debe viajar al cerebro para ser procesada.</li>
                <li><strong>Juicio:</strong> Una vez que la información alcanza el cerebro, este reconoce el estímulo y realiza un juzgamiento sobre la acción a seguir.</li>
                <li><strong>Operación:</strong> El cerebro envía instrucciones a las extremidades para ejecutar una acción física, como aplicar los frenos o cambiar la trayectoria.</li>
            </ol>
            
            <div class="alert alert-info">
                <strong>Tiempo promedio de reacción:</strong>
                <ul>
                    <li>Estímulo simple (una acción): <strong>0.4 segundos</strong></li>
                    <li>Estímulos múltiples (decidir entre opciones): <strong>0.8 segundos</strong></li>
                </ul>
            </div>
            
            <h3><strong>Impacto de la Velocidad en las Distancias de Reacción y Frenado</strong></h3>
            
            <h4><strong>Distancia de reacción</strong></h4>
            <p>La distancia de reacción es la distancia que recorre un vehículo desde el momento en que el conductor percibe un obstáculo hasta que reacciona.</p>
            
            <p><strong>Factores que Influyen:</strong></p>
            <ul>
                <li><strong>Tiempo de Reacción del Conductor:</strong> Afectado por fatiga, alcohol, drogas, y distracción</li>
                <li><strong>Velocidad del Vehículo:</strong> A 50 km/h, un vehículo recorre aproximadamente 14 metros por segundo</li>
                <li><strong>Condiciones del Camino:</strong> Lluvia, niebla, etc. pueden afectar la distancia</li>
            </ul>
            
            <div class="alert alert-info">
                <strong>Ejemplos de Distancia de Reacción:</strong>
                <ul>
                    <li>A 30 km/h con 1 seg de reacción → <strong>8 metros</strong></li>
                    <li>A 60 km/h con 1 seg de reacción → <strong>17 metros</strong></li>
                    <li>A 100 km/h con 1 seg de reacción → <strong>28 metros</strong></li>
                </ul>
            </div>
            
            <h4><strong>Distancia de frenado</strong></h4>
            <p>Es la distancia que recorre un vehículo desde el momento en que el conductor acciona el freno, hasta que el vehículo se detiene por completo.</p>
            
            <p><strong>Factores que Influyen:</strong></p>
            <ul>
                <li><strong>Velocidad a la que se Circula:</strong> A mayor velocidad, mayor distancia de frenado</li>
                <li><strong>Estado de los Neumáticos, Suspensión y Frenos:</strong> Elementos en buen estado reducen la distancia</li>
                <li><strong>Carga Transportada:</strong> Más peso = más inercia = más distancia de frenado</li>
                <li><strong>Estado del Pavimento:</strong> Seco > mojado > aceite > hielo</li>
                <li><strong>Condiciones Meteorológicas:</strong> Lluvia, viento, frío aumentan la distancia</li>
            </ul>
            
            <div class="widget-container">
                <div id="brakeComparison" class="widget"></div>
            </div>
            
            <h4><strong>Distancia de detención</strong></h4>
            <p>La distancia de detención es la suma del espacio que recorre un vehículo desde que el conductor detecta un obstáculo y decide frenar (distancia de reacción) y el espacio que recorre mientras los frenos están actuando (distancia de frenado).</p>
            
            <div class="alert alert-info" style="text-align: center; font-size: 1.1rem;">
                <strong>Distancia Total = Distancia de Reacción + Distancia de Frenado</strong>
            </div>
            
            <h4><strong>Distancia de Seguridad</strong></h4>
            <p>Es la distancia prudencial mínima que se debe dejar con el vehículo que circula adelante, lo que permite que la persona que conduce el vehículo de atrás, tenga mayor margen de reacción y pueda anticipar una situación de riesgo.</p>
            
            <div class="alert alert-warning">
                <strong>Regla Legal:</strong> La ley indica que la distancia mínima de seguridad entre vehículos debe ser de <strong>dos segundos</strong>. Siempre tener en cuenta las condiciones climáticas, el momento del día, la condición de la calzada o del tránsito.
            </div>
            
            <h3><strong>Velocidad precautoria</strong></h3>
            
            <p>Es la velocidad adecuada a las circunstancias, que permite mantener el total dominio del vehículo, sin entorpecer la circulación ni ponerse en peligro a sí mismo ni a otras personas. Es decir, se debe circular siempre a una velocidad tal que tenga en cuenta:</p>
            
            <ul>
                <li>La salud de quien conduce</li>
                <li>El estado del vehículo y su carga</li>
                <li>La visibilidad</li>
                <li>Las condiciones de la arteria</li>
                <li>El estado de la calzada</li>
                <li>El clima y la densidad del tránsito</li>
            </ul>
            
            <div class="alert alert-danger">
                <strong>Importante:</strong> Aunque se cree que sólo las altas velocidades producen incidentes, lo que realmente lleva a un siniestro es circular a velocidades inadecuadas. En circunstancias de niebla o lluvia, el límite máximo establecido puede dejar de ser el adecuado por haberse modificado las condiciones normales del camino.
            </div>
            
            <p><strong>Ejemplos de Velocidad Precautoria:</strong></p>
            <ul>
                <li>Zona escolar con niños: <strong>20 km/h</strong> (aunque el límite sea 40)</li>
                <li>Lluvia intensa: <strong>40 km/h</strong> (aunque el límite sea 60)</li>
                <li>Calle residencial de noche: <strong>Velocidad reducida con alta alerta</strong></li>
            </ul>
            
            <div class="widget-container">
                <div id="brakingCalculator" class="widget"></div>
            </div>
            
            <div class="alert alert-success" style="margin-top: 2rem;">
                <strong>Regla de Oro:</strong> Conduce siempre a una velocidad que te permita detenerte dentro del espacio visible y libre de obstáculos.
            </div>
            
            <hr style="margin: 2rem 0; border-color: #457B9D;">
            
            <div class="alert alert-info" style="background: linear-gradient(135deg, #457B9D 0%, #1D3557 100%); color: white; border: none; text-align: center;">
           <h4 style="color: #FFB703; margin-top: 0;">Contenido Interactivo H5P Original</h4>
                <p style="margin-bottom: 1rem;">Accede al material interactivo completo con videos, cuestionarios embebidos y actividades adicionales.</p>
                <div id="h5p-container-cap1" style="text-align: center; margin-top: 2rem;">
                    <button class="btn btn-primary" style="background-color: #FFB703; color: #1D3557; border: none; padding: 12px 28px; border-radius: 5px; font-weight: bold; cursor: pointer;" onclick="window.open('https://app.lumi.education/run/ufYWM2', '_blank');">
                        📚 Ver Contenido H5P Interactivo
                    </button>
                    <p style="font-size: 0.85rem; margin-top: 0.5rem; color: #E9ECEF;">
                        Haz clic para abrir el contenido interactivo en una nueva pestaña (recomendado para celular).
                    </p>
                </div>
            </div>
        `,
        widget: 'multiple',
        hasQuiz: true,
        quiz: [
            {
                question: '¿Cuál es la distancia de reacción de un vehículo que circula a 30 Km/h con un tiempo de reacción de 1 segundo?',
                options: [
                    '8 metros',
                    '11 metros',
                    '14 metros',
                    '17 metros'
                ],
                correct: 0,
                explanation: 'Un vehículo recorre aproximadamente 8 metros por segundo circulando a 30 Km/h. Con 1 segundo de tiempo de reacción, recorre 8 metros antes de comenzar a frenar.'
            },
            {
                question: '¿Cuál debería ser el límite de velocidad en zonas urbanas para minimizar lesiones graves?',
                options: [
                    '30 km/h',
                    '40 km/h',
                    '50 km/h',
                    '60 km/h'
                ],
                correct: 0,
                explanation: 'A 30 km/h o menos, las probabilidades de lesiones mortales se reducen significativamente, ya que el cuerpo humano es vulnerable a impactos mayores a 15 km/h.'
            },
            {
                question: 'Define velocidad precautoria: Es la velocidad adecuada a las circunstancias, que permite mantener el total _____ del vehículo, sin entorpecer la circulación ni ponerse en _____ a sí mismo ni a otras personas.',
                options: [
                    'control - peligro',
                    'dominio - peligro',
                    'manejo - riesgo',
                    'control - riesgo'
                ],
                correct: 1,
                explanation: 'La velocidad precautoria permite mantener el dominio del vehículo sin poner en peligro a nadie.'
            }
        ],
        hasForm: true,
        formUrl: 'https://forms.gle/placeholder-encuentro1'
    },

    encuentro2: {
        id: 'encuentro2',
        title: 'Encuentro 02: Gestión del Entorno',
        subtitle: 'Visión, Clima y Superficies Complejas',
        content: `
            <h3>Contenidos del Encuentro</h3>
            <ul>
                <li>Gestión de la mirada y zonas ciegas (puntos ciegos)</li>
                <li>Conducción en condiciones meteorológicas adversas</li>
                <li>Maniobrabilidad en superficies complejas</li>
            </ul>
            
            <h3>1. Gestión de la Mirada y Zonas Ciegas</h3>
            
            <h4>La Visión: Tu Sensor Principal</h4>
            <p>El <strong>90% de la información</strong> que usas para conducir ingresa por tus ojos.</p>
            
            <p><strong>Visión Binocular Central:</strong> Te permite ver detalles y juzgar distancias con precisión (60° de campo visual).</p>
            <p><strong>Visión Periférica:</strong> Detecta movimiento y cambios de luz en un campo más amplio (hasta 180°), pero sin nitidez.</p>
            
            <div class="alert alert-danger">
                <strong>⚠️ Efecto Túnel:</strong> A mayor velocidad, tu campo visual se reduce. A 100 km/h, pierdes hasta un 70% de tu visión periférica.
            </div>
            
            <h4>Zonas Ciegas (Puntos Ciegos)</h4>
            <p>Son áreas alrededor de tu vehículo que <strong>no puedes ver</strong> ni con espejos retrovisores. En motos, las zonas ciegas son críticas al circular cerca de camiones.</p>
            
            <h4>Las 4 Zonas No Visibles del Camión</h4>
            <p>Los camiones tienen puntos ciegos masivos. Si no ves al conductor en su espejo, <strong>él no te ve a vos</strong>.</p>
            <ul>
                <li>🔴 <strong>Zona Frontal:</strong> Hasta 6 metros adelante del camión</li>
                <li>🔴 <strong>Zona Lateral Derecha:</strong> El lateral completo (especialmente peligroso en giros)</li>
                <li>🔴 <strong>Zona Lateral Izquierda:</strong> Banda lateral del lado del conductor</li>
                <li>🔴 <strong>Zona Trasera:</strong> Hasta 30 metros detrás del camión</li>
            </ul>
            
            <h4>Off-Tracking (Barrido de Rueda Trasera)</h4>
            <p>En las curvas, las ruedas traseras del camión <strong>cortan camino</strong> respecto al recorrido de las delanteras. Si estás en la zona ciega lateral durante un giro, el camión puede "cerrarte" sin que el conductor te vea.</p>
            
            <div class="alert alert-warning">
                <strong>🛡️ Estrategia de Supervivencia:</strong> Nunca circules en las zonas ciegas de un camión. Si no ves al conductor en su espejo, RETROCEDE o ADELÁNTATE.
            </div>
            
            <div class="widget-container">
                <div id="blindSpots" class="widget"></div>
            </div>
            
            <h3>🌧️ 2. Conducción en Condiciones Meteorológicas Adversas</h3>
            
            <h4>Lluvia y Aquaplaning</h4>
            <p>Cuando llueve, la adherencia de los neumáticos a la calzada se reduce drásticamente.</p>
            
            <div class="alert alert-danger">
                <strong>⚠️ Aquaplaning:</strong> Pérdida total de contacto entre el neumático y el asfalto debido a una capa de agua. El vehículo "flota" y pierdes completamente el control.
            </div>
            
            <p><strong>Factores que lo provocan:</strong></p>
            <ul>
                <li>Neumáticos desgastados (sin dibujo profundo)</li>
                <li>Charcos de agua</li>
                <li>Velocidad excesiva</li>
            </ul>
            
            <p><strong>🛡️ Prevención:</strong></p>
            <ul>
                <li>Reducí la velocidad al menos un 20-30% en lluvia</li>
                <li>Aumentá la distancia de seguridad</li>
                <li>Evitá frenadas y giros bruscos</li>
                <li>Verificá el estado de tus neumáticos regularmente</li>
            </ul>
            
            <h4>Efecto Venturi (Succión por Camiones)</h4>
            <p>Cuando un camión a alta velocidad te sobrepasa (o vos lo sobrepasás), el desplazamiento de aire genera una <strong>fuerza de succión lateral</strong>.</p>
            
            <div class="alert alert-warning">
                <strong>💨 Efecto:</strong> Tu moto puede ser "atraída" hacia el camión o "expulsada" cuando termina de pasar. Sujetá firmemente el manubrio y anticipá la corrección.
            </div>
            
            <h4>Frío: Sistema de Capas ("Cebolla")</h4>
            <p>La hipotermia reduce tus reflejos y capacidad de concentración.</p>
            <ul>
                <li><strong>Capa 1 (Base):</strong> Ropa térmica que elimina la humedad</li>
                <li><strong>Capa 2 (Aislante):</strong> Polar o abrigo que retiene calor</li>
                <li><strong>Capa 3 (Protección):</strong> Campera impermeable y cortavientos</li>
            </ul>
            
            <h4>Conducción Nocturna</h4>
            <p>La visibilidad se reduce hasta un 90%. Estrategias:</p>
            <ul>
                <li>🔦 <strong>Luces bajas</strong> en ciudad, <strong>altas</strong> en ruta (excepto al cruzarte con otro vehículo)</li>
                <li>👀 <strong>Mirá hacia el borde derecho</strong> de la calzada si te encandila un vehículo</li>
                <li>⏱️ <strong>Reducí la velocidad</strong>: lo que ves es menos de lo que creés</li>
            </ul>
            
            <div class="widget-container">
                <div id="weatherCarousel" class="widget"></div>
            </div>
            
            <h3>🛣️ 3. Maniobrabilidad en Superficies Complejas</h3>
            
            <h4>Obstáculos en Calzada</h4>
            
            <p><strong>Baches:</strong> Pueden romper la rueda o provocar una caída. Si no podés evitarlos, levantá levemente del asiento para que la suspensión absorba el impacto.</p>
            
            <p><strong>Pintura blanca mojada:</strong> Resbaladiza como hielo. Evitá frenar o girar sobre ella.</p>
            
            <p><strong>Vías de tren:</strong> Cruzalas en ángulo recto (90°), nunca en paralelo (la llanta puede quedar atrapada).</p>
            
            <p><strong>Aceite en la calzada:</strong> Reduce la fricción a niveles peligrosos. Si ves manchas oscuras (especialmente en semáforos o estaciones de servicio), reducí la velocidad y evitá maniobras bruscas.</p>
            
            <p><strong>Arena/Ripio:</strong> Reduce drásticamente el agarre. En curvas, aumentá el radio y reducí la inclinación.</p>
            
            <h4>Técnicas de Manejo Defensivo</h4>
            <ul>
                <li>🔍 <strong>Escaneo visual constante:</strong> Mirá lejos (12-15 segundos adelante), medio (6-8 seg) y cerca (3-4 seg)</li>
                <li>🚗 <strong>Distancia de seguridad:</strong> Regla de los 3 segundos (en condiciones ideales)</li>
                <li>🔄 <strong>Ruta de escape mental:</strong> Siempre tené identificado un "plan B" si algo sale mal</li>
                <li>👁️ <strong>Hacéte visible:</strong> Ropa reflectante, luces encendidas, posicionamiento estratégico en el carril</li>
            </ul>
            
            <div class="alert alert-info">
                <strong>💡 Principio Fundamental:</strong> Anticipá lo peor y preparáte para reaccionar. La conducción defensiva no es paranoia, es profesionalismo.
            </div>
        `,
        widget: 'multiple', // Indica que tiene múltiples widgets embebidos
        hasQuiz: true,
        quiz: [
            {
                question: 'Si no ves al conductor de un camión en su espejo retrovisor, ¿qué significa?',
                options: [
                    'El conductor te está viendo por otro espejo',
                    'Estás en una zona ciega y el conductor NO te ve',
                    'El espejo está roto',
                    'El conductor te está ignorando'
                ],
                correct: 1,
                explanation: 'Si no puedes ver al conductor en su espejo, significa que estás en una zona ciega y él no te puede ver a ti.'
            },
            {
                question: '¿Qué es el aquaplaning?',
                options: [
                    'Una técnica de frenado en lluvia',
                    'Pérdida total de contacto entre el neumático y el asfalto por agua',
                    'Un sistema de control de tracción',
                    'Una maniobra para evitar obstáculos'
                ],
                correct: 1,
                explanation: 'El aquaplaning ocurre cuando una capa de agua hace que el neumático "flote" perdiendo contacto con el asfalto, lo que resulta en pérdida total de control.'
            },
            {
                question: '¿Cuánto se recomienda reducir la velocidad en lluvia?',
                options: [
                    '5-10%',
                    '10-15%',
                    '20-30%',
                    'No es necesario reducirla'
                ],
                correct: 2,
                explanation: 'En condiciones de lluvia se recomienda reducir la velocidad al menos un 20-30% para compensar la reducción de adherencia.'
            }
        ],
        hasForm: true,
        formUrl: 'https://forms.gle/placeholder-encuentro2'
    },

    encuentro3: {
        id: 'encuentro3',
        title: 'Capítulo 3: La Fragilidad del Cuerpo Humano',
        subtitle: 'Lesiones,ección y Equipamiento de Seguridad',
        content: `
            <h3>Introducción: Vulnerabilidad del Motociclista</h3>
            
            <p>El cuerpo humano es vulnerable a una variedad de lesiones cuando se conduce una moto. La exposición del conductor al entorno exterior y la falta de una estructura protectora conllevan riesgos significativos, lo que aumenta la probabilidad de sufrir lesiones graves en caso de un incidente vial.</p>
            
            <div class="alert alert-danger">
                <strong>Dato Crítico:</strong> Los motociclistas son usuarios vulnerables de la vía pública que están más expuestos a sufrir lesiones graves o fatales en caso de siniestros viales.
            </div>
            
            <h3>Usuarios Vulnerables de la Vía Pública</h3>
            
            <p>Dentro de los usuarios vulnerables se incluyen:</p>
            <ul>
                <li><strong>Peatones:</strong> Dependen de veredas, cruces peatonales y señalización adecuada</li>
                <li><strong>Ciclistas:</strong> Requieren espacios exclusivos como bicisendas y ciclovías protegidas</li>
                <li><strong>Motociclistas:</strong> Enfrentan alta siniestralidad debido a la falta de protecci ante impactos</li>
            </ul>
            
            <h3>Fuerza de Impacto</h3>
            
            <p>La fuerza de impacto es la fuerza que se genera cuando dos objetos colisionan. En el contexto de la conducción de moto, esta fuerza se produce cuando la moto choca con otro vehículo, un objeto fijo, o cae al suelo.</p>
            
            <h4>Factores que Influyen:</h4>
            <ul>
                <li><strong>Velocidad:</strong> A mayor velocidad, mayor será la energía cinética y la fuerza de impacto</li>
                <li><strong>Masa del Vehículo y Conductor:</strong> Afecta directamente la magnitud del impacto</li>
                <li><strong>Rigidez de los Objetos:</strong> Objetos más rígidos resultan en mayor fuerza de impacto</li>
            </ul>
            
            <h3>Lesiones Comunes en Motociclistas</h3>
            
            <p>Las áreas del cuerpo más susceptibles a lesiones en una caída incluyen prácticamente todo el cuerpo:</p>
            
            <ul>
                <li><strong>Cabeza:</strong> Lesiones más graves y potencialmente mortales - El casco es fundamental</li>
                <li><strong>Fracturas:</strong> Clavícula, hombro, codo, muñeca y cadera</li>
                <li><strong>Rodillas:</strong> Propensas a lesiones crónicas</li>
                <li><strong>Tobillos:</strong> Esguinces y fracturas</li>
                <li><strong>Piel:</strong> Abrasiones y quemaduras por deslizamiento</li>
                <li><strong>Órganos internos:</strong> Hígado, riñones, bazo y pulmones</li>
            </ul>
            
            <h3>La Importancia del Casco</h3>
            
            <div class="alert alert-warning">
                <strong>Estadística Salvavidas:</strong> El casco reduce un <strong>85% las probabilidades de lesiones graves</strong> (fractura de cráneo y daño cerebral) tanto para quien conduce como para quien acompaña.
            </div>
            
            <h4>Tipos de Cascos Homologados:</h4>
            
            <p><strong>Casco Integral:</strong> Cubre toda la cabeza, incluyendo mandíbula y cara. Considerado el más seguro.</p>
            
            <p><strong>Casco Modular:</strong> Mentonera rebatible, buena protección y práctico para uso urbano.</p>
            
            <p><strong>Casco Jet/Abierto:</strong> Cubre superior y laterales, más ligero pero menos protección.</p>
            
            <p><strong>Casco Off-Road/Deportivo:</strong> Diseñado para conducción fuera de vía pública.</p>
            
            <h3>Homologación y Certificación</h3>
            
            <div class="alert alert-info">
                <strong>Norma Argentina:</strong> IRAM AITA 3621
                <ul>
                    <li>Garantiza cumplimiento de estándares de seguridad</li>
                    <li>Vida útil: <strong>3 años</strong> desde la fecha de fabricación</li>
                    <li>Debe reemplazarse después de cualquier impacto</li>
                </ul>
            </div>
            
            <h4>Características de un Buen Casco:</h4>
            <ul>
                <li>Certificación de homologación vigente</li>
                <li>Producto confiable de marca reconocida</li>
                <li>Sin daños visibles o internos</li>
                <li>Talla adecuada (medir circunferencia de la cabeza)</li>
                <li>Ajuste cómodo sin puntos de presión excesivos</li>
                <li>Correa de barbilla bien sujeta</li>
            </ul>
            
            <h3>Energía Cinética y Velocidad</h3>
            
            <p>La energía cinética es la energía que posee un objeto debido a su movimiento. Cuando se conduce una moto, a medida que acelera, su energía cinética aumenta. En caso de un incidente, esta energía se convierte en energía de impacto.</p>
            
            <div class="alert alert-danger">
                <strong>Equivalencias de Impacto:</strong>
                <ul>
                    <li>Chocar a <strong>60 km/h</strong> = Caer desde una altura de <strong>14 metros</strong> (edificio de 5 pisos)</li>
                    <li>Si se duplica la velocidad, la fuerza del impacto se <strong>cuadruplica</strong></li>
                    <li>Reducir velocidad de 60 a 30 km/h reduce la energía cinética en <strong>75%</strong></li>
                </ul>
            </div>
            
            <h3>Equipamiento de Protección Personal</h3>
            
            <p>El uso de equipo de protección puede hacer la diferencia entre sufrir lesiones graves o salir ileso:</p>
            
           <ul>
                <li><strong>Campera/Chaqueta:</strong> Material resistente con protecciones en hombros, codos y espalda</li>
                <li><strong>Pantalón:</strong> Resistente a la abrasión con protecciones en rodillas y caderas</li>
                <li><strong>Guantes:</strong> Refuerzos en nudillos y palmas</li>
                <li><strong>Calzado:</strong> Botas que cubran tobillos con suela antideslizante</li>
            </ul>
            
            <hr style="margin: 2rem 0; border-color: #457B9D;">
            
            <div class="alert alert-info" style="background: linear-gradient(135deg, #457B9D 0%, #1D3557 100%); color: white; border: none; text-align: center;">
                <h4 style="color: #FFB703; margin-top: 0;">Contenido Interactivo H5P Original</h4>
                <p style="margin-bottom: 1rem;">Accede al material interactivo completo con videos, cuestionarios sobre fuerza de impacto, tipos de cascos y energía cinética.</p>
                <a href="capitulo3_h5p.html" target="_blank" class="btn btn-primary" style="background-color: #FFB703; color: #1D3557; border: none; padding: 12px 28px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block; margin: 0.5rem;">
                    Ver Contenido H5P Interactivo
                </a>
                <p style="font-size: 0.85rem; margin-top: 0.5rem; color: #E9ECEF;">
                    Este contenido se abre en una nueva pestaña y puede compartirse directamente por WhatsApp.
                </p>
            </div>
        `,
        hasQuiz: false,
        hasForm: true,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSem9R7VEGFj8J4vrO2wn9EgqyyR9a_NgWm0UxsXx_l4I6NEow/viewform'
    },

    encuentro4: {
        id: 'encuentro4',
        title: 'Capítulo 4: Fuerza de Inercia y Fuerza de Fricción',
        subtitle: 'Física Aplicada a la Conducción Segura',
        content: `
            <h3>Introducción</h3>
            
            <p>La fuerza de inercia y la fuerza de fricción son factores que influyen en la conducción. Comprender cómo estas fuerzas afectan la dinámica de la moto, permite aprender a manejarlas adecuadamente y desarrollar una conducción segura.</p>
            
            <p>El frenado es una de las habilidades más críticas en la conducción de motos. Saber cómo y cuándo frenar puede marcar la diferencia entre evitar un incidente vial y sufrir uno.</p>
            
            <h3>Postura Corporal y Ergonomía</h3>
            
            <h4>Importancia de la Postura</h4>
            <p>Una buena postura corporal no solo garantiza una mayor seguridad durante la conducción, sino que también contribuye a optimizar los tiempos de reacción, permitiendo un uso más eficiente y preciso de los comandos del vehículo.</p>
            
            <div class="alert alert-info">
                <strong>La Ergonomía en la Conducción:</strong> Es el estudio de cómo interactúan las personas con las máquinas para lograr una relación más eficiente, cómoda y segura.
            </div>
            
            <h4>Factores que Influyen en la Postura:</h4>
            <ul>
                <li><strong>Tipo de Motovehículo:</strong> Scooter (posición erguida), deportiva (inclinada), chopper (cómoda)</li>
                <li><strong>Altura y Posición del Asiento:</strong> Afecta la distribución del peso</li>
                <li><strong>Ubicación de Comandos:</strong> Influye en la facilidad de operación</li>
                <li><strong>Forma del Manillar:</strong> Determina la posición de brazos y espalda</li>
                <li><strong>Equipamiento:</strong> El uso de protección puede modificar la postura</li>
            </ul>
            
            <h3>Fuerza de Inercia</h3>
            
            <p>La fuerza de inercia es la resistencia de un objeto a cambiar su estado de movimiento. En la conducción, la inercia se manifiesta cuando la moto y el conductor tienden a continuar moviéndose en línea recta a una velocidad constante, incluso cuando se aplican los frenos.</p>
            
            <div class="alert alert-warning">
                <strong>Efecto en el Frenado:</strong> Cuando se accionan los frenos, la inercia hace que moto y conductor continúen moviéndose hacia adelante, ejerciendo gran carga en la rueda delantera.
            </div>
            
            <p><strong>Consecuencias de la Inercia:</strong></p>
            <ul>
                <li>Aumenta la fuerza de fricción en la rueda delantera</li>
                <li>Disminuye la carga en la rueda trasera</li>
                <li>Reduce la efectividad del freno trasero</li>
                <li>Requiere dosificar la presión en ambos frenos para evitar bloqueo</li>
            </ul>
            
            <h3>Fuerza de Fricción</h3>
            
            <p>La fuerza de fricción es la resistencia al movimiento que ocurre cuando dos superficies entran en contacto. En una moto, la fricción entre los neumáticos y la calzada es determinante para el control y la estabilidad.</p>
            
            <p><strong>Funciones de la Fricción:</strong></p>
            <ul>
                <li>Proporciona la tracción necesaria para acelerar, frenar y tomar curvas</li>
                <li>Permite que los frenos desaceleren la moto de manera efectiva</li>
                <li>Mantiene el control y estabilidad del vehículo</li>
            </ul>
            
            <div class="alert alert-danger">
                <strong>Factores que Reducen la Fricción:</strong>
                <ul>
                    <li>Lluvia o superficies mojadas</li>
                    <li>Aceite o combustible en el pavimento</li>
                    <li>Neumáticos en mal estado o desgastados</li>
                    <li>Superficies con arena, grava o hielo</li>
                </ul>
            </div>
            
            <h3>Sistemas de Frenos</h3>
            
            <h4>Freno Delantero</h4>
            
            <p><strong>Virtudes:</strong></p>
            <ul>
                <li>Proporciona la mayor parte de la potencia de frenado</li>
                <li>Permite detener la moto de manera rápida y eficiente</li>
                <li>Ofrece control preciso durante la desaceleración</li>
                <li>Efectivo en situaciones de emergencia</li>
            </ul>
            
            <p><strong>Falencias:</strong></p>
            <ul>
                <li>Debe usarse en línea recta, no al girar a baja velocidad</li>
                <li>Aplicación excesiva puede provocar bloqueo de rueda delantera</li>
                <li>Requiere práctica para dosificar correctamente la presión</li>
            </ul>
            
            <h4>Freno Trasero</h4>
            
            <p><strong>Virtudes:</strong></p>
            <ul>
                <li>Ayuda a mantener estabilidad a baja velocidad</li>
                <li>Útil en superficies resbaladizas</li>
                <li>Proporciona apoyo al freno delantero</li>
                <li>Permite ajustes precisos de velocidad</li>
            </ul>
            
            <p><strong>Falencias:</strong></p>
            <ul>
                <li>Menor potencia de frenado que el delantero</li>
                <li>Insuficiente en situaciones de emergencia por sí solo</li>
                <li>Presión excesiva puede causar bloqueo y derrapes</li>
            </ul>
            
            <h4>Freno Motor</h4>
            
            <p>El freno motor se activa cuando se libera el acelerador y las revoluciones del motor descienden, creando resistencia que se transmite a la rueda trasera. Esta resistencia reduce la velocidad sin usar los frenos.</p>
            
            <p><strong>Ventajas del Freno Motor:</strong></p>
            <ul>
                <li>Aumenta la adherencia del neumático trasero a la calzada</li>
                <li>Evita que la rueda trasera pierda tracción</li>
                <li>Útil para controlar velocidad en descensos</li>
                <li>Efectivo al aproximarse a curvas</li>
                <li>Complementa el frenado convencional</li>
            </ul>
            
            <h3>Sistemas Avanzados de Frenado</h3>
            
            <h4>Sistema Combinado de Frenos (CBS)</h4>
            
            <p>Distribuye automáticamente la fuerza de frenado entre freno delantero y trasero, independientemente de cuál se accione.</p>
            
            <p><strong>Virtudes:</strong></p>
            <ul>
                <li>Mejora la distribución de fuerza entre ruedas</li>
                <li>Reduce el riesgo de bloqueo</li>
                <li>Simplifica el frenado para conductores inexpertos</li>
                <li>Aumenta la seguridad en circulación urbana</li>
            </ul>
            
            <p><strong>Falencias:</strong></p>
            <ul>
                <li>Puede ser menos efectivo en emergencias que frenos independientes</li>
                <li>Los conductores pueden volverse dependientes del sistema</li>
            </ul>
            
            <h4>Sistema de Frenado Antibloqueo (ABS)</h4>
            
            <p>Tecnología avanzada diseñada para evitar el bloqueo de ruedas durante el frenado intenso.</p>
            
            <p><strong>Virtudes:</strong></p>
            <ul>
                <li>Evita el bloqueo de ruedas durante frenado intenso</li>
                <li>Mantiene tracción y control</li>
                <li>Mejora capacidad de frenado en emergencias</li>
                <li>Muy efectivo en superficies resbaladizas</li>
            </ul>
            
            <p><strong>Falencias:</strong></p>
            <ul>
                <li>Mayor costo debido a tecnología avanzada</li>
                <li>Requiere mantenimiento especializado</li>
                <li>Reparaciones más complejas</li>
            </ul>
            
            <h3>Técnicas de Frenado</h3>
            
            <div class="alert alert-success">
                <strong>Técnicas Recomendadas:</strong>
                <ul>
                    <li><strong>Frenado Progresivo:</strong> Aplicación gradual de presión</li>
                    <li><strong>Frenado de Emergencia:</strong> Máxima presión sin bloquear</li>
                    <li><strong>Uso Combinado:</strong> Frenos delantero y trasero simultáneamente</li>
                    <li><strong>Escuchar el Motor:</strong> Para aprovechar el freno motor efectivamente</li>
                </ul>
            </div>
            
            <hr style="margin: 2rem 0; border-color: #457B9D;">
            
            <div class="alert alert-info" style="background: linear-gradient(135deg, #457B9D 0%, #1D3557 100%); color: white; border: none; text-align: center;">
                <h4 style="color: #FFB703; margin-top: 0;">Contenido Interactivo H5P Original</h4>
                <p style="margin-bottom: 1rem;">Accede al material interactivo completo con videos explicativos, cuestionarios sobre inercia, fricción y técnicas de frenado.</p>
                <a href="capitulo4_h5p.html" target="_blank" class="btn btn-primary" style="background-color: #FFB703; color: #1D3557; border: none; padding: 12px 28px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block; margin: 0.5rem;">
                    Ver Contenido H5P Interactivo
                </a>
                <p style="font-size: 0.85rem; margin-top: 0.5rem; color: #E9ECEF;">
                    Este contenido se abre en una nueva pestaña y puede compartirse directamente por WhatsApp.
                </p>
            </div>
        `,
        hasQuiz: false,
        hasForm: true,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScry-NP4yEwkTSD2I20bJUV_dubzEXtly_xdBHB0MzS2msEVg/viewform'
    },

    encuentro5: {
        id: 'encuentro5',
        title: 'Capítulo 5: Condiciones Meteorológicas Adversas',
        subtitle: 'Conducción Segura en Situaciones Climáticas Difíciles',
        content: `
            <h3>Introducción</h3>
            
            <p>Las condiciones climáticas pueden cambiar y variar de un momento a otro, por ello se debe tener la preparación suficiente para enfrentar cualquier adversidad meteorológica que afecte la circulación. Conducir en estas condiciones requiere conocimientos y experiencia.</p>
            
            <p>El clima y las superficies son factores de riesgo que influyen directamente en la adherencia y estabilidad, afectando la seguridad durante la conducción. La lluvia, el viento, el frío, la niebla, el calor y las temperaturas extremas pueden influir en la visibilidad, la tracción y la seguridad del conductor.</p>
            
            <h3>Lluvia</h3>
            
            <p>Conducir una moto bajo la lluvia presenta desafíos que se deben contemplar para hacerlo de manera segura y responsable. Antes de salir a la vía pública en un día lluvioso, se debe relevar el estado de la moto, utilizar ropa impermeable o un equipo de lluvia para motociclista, guantes y botas que mantengan secas las extremidades.</p>
            
            <h4>Aquaplaning</h4>
            
            <p>El aquaplaning en moto es un fenómeno peligroso que ocurre cuando una capa de agua se acumula en la calzada, haciendo que los neumáticos pierdan contacto con el asfalto. Esto provoca la pérdida de adherencia a la superficie, lo que puede resultar en una caída.</p>
            
            <div class="alert alert-danger">
                <strong>Prevención del Aquaplaning:</strong>
                <ul>
                    <li>Reducir la velocidad para dar tiempo a los neumáticos de desalojar el agua</li>
                    <li>Mantener neumáticos en buen estado (presión y desgaste correctos)</li>
                    <li>Aumentar distancia de seguridad con vehículo adelante</li>
                    <li>Evitar charcos con acumulación de agua</li>
                    <li>Estar atento a las condiciones de la calzada</li>
                </ul>
            </div>
            
            <h4>Equipo de Lluvia</h4>
            
            <p>Los motociclistas tienen a su disposición una amplia gama de equipos y accesorios diseñados para mejorar la seguridad, la comodidad y la protección en condiciones de lluvia. Un casco con visor antiempañante ayuda a mantener una buena visibilidad.</p>
            
            <h3>Viento</h3>
            
            <p>El viento tiene un impacto notable en la conducción de una moto. A diferencia de otros vehículos, las motos son mucho más livianas y tienen una superficie lateral más expuesta, lo que las hace especialmente vulnerables a las ráfagas de viento.</p>
            
            <h4>Protección Ocular</h4>
            
            <p>La vista es el sentido más importante al conducir, ya que proporciona más del 90% de la información necesaria para tomar decisiones en la circulación. Por este motivo, la protección ocular es obligatoria para conducir una moto.</p>
            
            <p>El uso de anteojos debajo del casco permite levantar el visor para obtener aire fresco sin comprometer la seguridad ocular. Esto es especialmente útil en días calurosos o cuando se necesita más ventilación.</p>
            
            <div class="alert alert-info">
                <strong>Importancia de la Protección Ocular:</strong> Cada tipo de protección tiene sus propias ventajas. Es importante elegirla teniendo en cuenta las necesidades específicas, las condiciones climáticas y el contexto de circulación.
            </div>
            
            <h4>Efecto Venturi</h4>
            
            <p>Cuando un vehículo de gran porte como un camión circula por una ruta, desplaza una enorme masa de aire a su alrededor. Entre el lateral del camión y una moto que lo está sobrepasando se genera un espacio angosto donde el aire se ve forzado a pasar más rápidamente.</p>
            
            <p>Según el principio de Bernoulli, al aumentar la velocidad del flujo de aire, disminuye la presión en esa zona. Ese es el llamado efecto Venturi.</p>
            
            <p><strong>Consecuencias para el Motociclista:</strong></p>
            <ul>
                <li>La moto es succionada hacia el camión al entrar en el corredor de baja presión</li>
                <li>Al salir, la presión vuelve a subir bruscamente, empujando la moto hacia afuera</li>
                <li>Puede desestabilizar especialmente a alta velocidad o con viento lateral</li>
            </ul>
            
            <p><strong>Recomendaciones:</strong></p>
            <ul>
                <li>Mantener una línea firme al sobrepasar</li>
                <li>Aumentar atención al manillar</li>
                <li>Evitar cambios de dirección bruscos</li>
                <li>Estar preparado para variaciones de presión</li>
                <li>Mantener buena distancia lateral cuando sea posible</li>
            </ul>
            
            <h3>Niebla</h3>
            
            <p>La niebla está formada por microgotas de agua en el aire. Al conducir una moto en estas condiciones, es como circular dentro de una nube. Las microgotas se acumulan rápidamente en la ropa, empapando al conductor y acompañante.</p>
            
            <p><strong>Riesgos de la Niebla:</strong></p>
            <ul>
                <li>Visibilidad se dificulta, volviéndose borrosa hasta no ver nada</li>
                <li>Puede modificar el estado de la calzada, haciéndola resbaladiza</li>
                <li>Aumenta significativamente el peligro de circulación</li>
            </ul>
            
            <h3>Frío</h3>
            
            <p>Las bajas temperaturas se sienten aún más en la moto. La sensación térmica al conducir puede ser significativamente más baja que la temperatura real debido al efecto del viento.</p>
            
            <p><strong>Ejemplo:</strong> Si la temperatura ambiente es de 15°C, la sensación térmica en la moto puede ser de aproximadamente 10°C menor, dependiendo de la velocidad, el entorno y la situación climatológica. Este fenómeno se conoce como enfriamiento por viento.</p>
            
            <div class="alert alert-warning">
                <strong>Importante:</strong> Las bajas temperaturas pueden causar formación de escarcha o hielo en la calzada. El hielo reduce la tracción significativamente y aumenta exponencialmente el riesgo de caídas.
            </div>
            
            <h4>Vestirse en Capas</h4>
            
            <p> No todas las personas regulan la temperatura corporal de la misma manera. Cada persona puede sentir una temperatura diferente por su metabolismo, grasa corporal, condiciones médicas, edad o estilo de vida.</p>
            
            <p>Vestirse en capas es una estrategia efectiva. Cada capa de ropa cumple una función específica:</p>
            
            <p><strong>Primera Capa (Absorción de Humedad):</strong></p>
            <ul>
                <li>Material que absorba la humedad (remeras térmicas, poliéster)</li>
                <li>Mantiene la piel seca</li>
                <li>Evitar algodón (no absorbe humedad y tarda en secarse)</li>
            </ul>
            
            <p><strong>Segunda Capa (Aislamiento Térmico):</strong></p>
            <ul>
                <li>Retiene el calor corporal cerca del cuerpo</li>
                <li>Materiales: forro polar, lana, plumas o fibras sintéticas</li>
                <li>Características: capacidad de aislamiento y ligereza</li>
            </ul>
            
            <p><strong>Tercera Capa (Protección Externa):</strong></p>
            <ul>
                <li>Protege contra viento, frío y agua</li>
                <li>Debe ser impermeable y rompevientos</li>
                <li>También transpirable para permitir escape de humedad interna</li>
            </ul>
            
            <p>Las capas se deben combinar según las condiciones climáticas, añadiendo más capas o quitando alguna según sea necesario.</p>
            
            <h3>Calor</h3>
            
            <p>Cuando hay altas temperaturas, la conducción de una moto se ve afectada tanto para el motociclista como en el rendimiento de la moto. Es importante mantenerse hidratado, usar ropa ventilada y hacer pausas frecuentes.</p>
            
            <h3>Conducción Nocturna</h3>
            
            <p>La conducción nocturna en moto representa un escenario muy particular que exige al conductor una adaptación constante de sus habilidades y percepciones. A diferencia del entorno diurno, la noche transforma el entorno:</p>
            
            <ul>
                <li>Las referencias suelen modificar la percepción</li>
                <li>Disminuye la visibilidad</li>
                <li>Aumentan los contrastes lumínicos</li>
                <li>Cambia la percepción de velocidad y profundidad</li>
            </ul>
            
            <h4>Visibilidad</h4>
            
            <p>La visibilidad es lo más importante al conducir de noche. Se debe asegurar que todas las luces de la moto (delanteras y traseras) estén en perfecto estado, al igual que el ángulo de iluminación.</p>
            
            <p>Usar ropa reflectante y accesorios luminosos permite que otros conductores observen la moto con mayor facilidad.</p>
            
            <h4>Deslumbramiento y Encandilamiento</h4>
            
            <p>Aunque suelen confundirse, son fenómenos visuales distintos:</p>
            
            <p><strong>Encandilamiento:</strong> Ocurre cuando una fuente de luz intensa impacta directamente en los ojos, generando pérdida momentánea de visión (ceguera parcial). Es abrupto, dura segundos y es peligroso en situaciones críticas.</p>
            
            <p><strong>Deslumbramiento:</strong> Implica alteración generalizada de la visión causada por luz directa, reflejos o fuentes mal distribuidas. No genera ceguera momentánea, pero reduce agudeza visual, disminuye contraste y distorsiona percepción de profundidad.</p>
            
            <h4>Concentración y Atención</h4>
            
            <p>La conducción nocturna requiere un nivel de concentración sostenida y deliberada. La reducción de visibilidad, la fatiga acumulada del día y los estímulos luminosos artificiales aumentan la exigencia cognitiva del conductor.</p>
            
            <h3>Superficies</h3>
            
            <p>La superficie sobre la que se circula tiene relevancia fundamental en la estabilidad y el control del vehículo. Conocer las modificaciones que se producen en la calzada colabora a tomar decisiones adecuadas y evitar incidentes.</p>
            
            <h4>Superficies Mojadas o Húmedas</h4>
            
            <p><strong>Riesgos:</strong></p>
            <ul>
                <li>Reducción de tracción (el agua disminuye agarre de neumáticos)</li>
                <li>Distancia de frenado más larga</li>
                <li>Mayor posibilidad de derrapes y caídas</li>
            </ul>
            
            <p><strong>Precauciones:</strong></p>
            <ul>
                <li>Estar más atento de lo habitual</li>
                <li>Suavizar el uso de los frenos</li>
                <li>Mantener distancia de seguimiento mayor</li>
            </ul>
            
            <h4>Caminos Rurales o Alternativos</h4>
            
            <p>Conducir sobre ripio, tierra, arena o arcilla presenta desafíos diversos. Estas superficies sueltas requieren habilidades de manejo avanzadas y constante adaptación del estilo de conducción para evitar pérdidas de control.</p>
            
            <h4>Obstáculos en la Calzada</h4>
            
            <p>Diversos obstáculos pueden poner en riesgo la seguridad del motociclista:</p>
            <ul>
                <li>Baches y escombros</li>
                <li>Superficies resbaladizas</li>
                <li>Animales cruzando la calle</li>
                <li>Aceite o combustible derramado</li>
            </ul>
            
            <p>La capacidad de identificar y reaccionar adecuadamente a estos peligros permite evitar incidentes viales y mantener el control durante la conducción.</p>
            
            <h4>Vías de Ferrocarril</h4>
            
            <p>Cruzar una vía de ferrocarril exige especial atención. Los riesgos específicos incluyen:</p>
            <ul>
                <li>Desniveles en la superficie</li>
                <li>Falta de adherencia</li>
                <li>Ángulos de cruce que afectan la estabilidad</li>
            </ul>
            
            <p><strong>Recomendaciones:</strong> Observación anticipada, maniobras suaves y control de velocidad antes de enfrentar este tipo de cruces.</p>
            
            <hr style="margin: 2rem 0; border-color: #457B9D;">
            
            <div class="alert alert-info" style="background: linear-gradient(135deg, #457B9D 0%, #1D3557 100%); color: white; border: none; text-align: center;">
                <h4 style="color: #FFB703; margin-top: 0;">Contenido Interactivo H5P Original</h4>
                <p style="margin-bottom: 1rem;">Accede al material interactivo completo con imágenes ilustrativas, ejemplos visuales y evaluación sobre condiciones meteorológicas adversas.</p>
                <a href="capitulo5_h5p.html" target="_blank" class="btn btn-primary" style="background-color: #FFB703; color: #1D3557; border: none; padding: 12px 28px; border-radius: 5px; text-decoration: none; font-weight: bold; display: inline-block; margin: 0.5rem;">
                    Ver Contenido H5P Interactivo
                </a>
                <p style="font-size: 0.85rem; margin-top: 0.5rem; color: #E9ECEF;">
                    Este contenido se abre en una nueva pestaña y puede compartirse directamente por WhatsApp.
                </p>
            </div>
        `,
        hasQuiz: false,
        hasForm: true,
        formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc4pyNLTE8E5z2qlEE8RZ0XynVSO6iFWLJuXycpOzp1XmT2iA/viewform'
    }
};
