import type { Service, Promotion, ContactInfo, SiteConfig, SocialLinks, FAQItem } from '@/types';

export const SITE_CONFIG: SiteConfig = {
  name: "Clínica Hispana Cruz 2",
  shortName: "Clínica Hispana",
  tagline: "Atención médica profesional 100% en español",
  description: "Clínica médica hispana en Houston, TX. Atención profesional en español, sin cita previa, aceptamos pacientes sin seguro. Medicina familiar, urgencias menores, laboratorio y más.",
  baseUrl: "https://www.hispanac2.com",
  locale: "es-MX",
  logoUrl: "/images/logo.webp",
};

export const CONTACT_INFO: ContactInfo = {
  address: "13331 Kuykendahl Rd Ste 128",
  city: "Houston",
  state: "TX",
  zip: "77090",
  phone: "+12817890484",
  phoneFormatted: "+1 (281) 789-0484",
  // WhatsApp — número EXCLUSIVO para chat. Nunca usarlo en tel:, NAP ni schema.
  // El teléfono de llamadas sigue siendo `phone`; CallRail (swap.js) solo intercambia ese.
  whatsapp: "12817412157", // E.164 sin "+", listo para wa.me
  whatsappDisplay: "(281) 741-2157",
  email: "clinicahcruz2@gmail.com",
  hours: "Lunes a Domingo: 9:00 AM - 9:00 PM",
  hoursWeekday: "Lunes a Viernes: 9:00 AM - 9:00 PM",
  hoursWeekend: "Sábado y Domingo: 9:00 AM - 9:00 PM",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Clinica+Hispana+Cruz+2+13331+Kuykendahl+Rd+Ste+128+Houston+TX+77090&query_place_id=ChIJ6R145DnLQIYRWbvQKXhSJfE",
  // Embed "Compartir → Insertar mapa" de Google Maps: oficial, gratis y SIN API key
  // (apunta al listado exacto de Cruz 2 vía su CID 0x8640cb39e4781de9:0xf125527829d0bb59)
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.4!2d-95.4356331!3d29.9784272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640cb39e4781de9%3A0xf125527829d0bb59!2sClinica%20Hispana%20Cruz%202!5e0!3m2!1ses!2sus!4v1751500000000",
  googleReviewUrl: "https://search.google.com/local/writereview?placeid=ChIJ6R145DnLQIYRWbvQKXhSJfE",
  placeId: "ChIJ6R145DnLQIYRWbvQKXhSJfE",
  coordinates: {
    lat: 29.9784272,
    lng: -95.4356331,
  },
};

// Perfiles externos de Cruz 2 (confirmados con el Perfil de Negocio de Google,
// 2026-09-06). Alimentan el footer y el `sameAs` del schema MedicalClinic.
export const SOCIAL_LINKS: SocialLinks = {
  instagram: "https://www.instagram.com/clinicahispanacruz2/",
  facebook: "https://www.facebook.com/465045156687109",
  tiktok: "https://www.tiktok.com/@clinica.cruz.2",
  google: "https://www.google.com/maps/search/?api=1&query=Clinica+Hispana+Cruz+2+13331+Kuykendahl+Rd+Ste+128+Houston+TX+77090&query_place_id=ChIJ6R145DnLQIYRWbvQKXhSJfE",
  yelp: "https://www.yelp.com/biz/clinica-hispana-cruz-2-houston",
  appleMaps: "https://maps.apple.com/place?place-id=ICC4239276B3F44ED",
};

// Google Reviews data - fallback cuando la Places API no responde
// (valores reales de Places comprobados el 2026-10-04; en vivo se actualizan solos)
export const GOOGLE_REVIEWS_DATA = {
  totalReviews: 824,
  averageRating: 5.0,
  placeId: "ChIJ6R145DnLQIYRWbvQKXhSJfE",
};

// Dedicated CallRail tracking number for the Conquesting landing only.
// Used in /landing/comparacion-clinicas-houston via a route-specific layout.
// TODO(randy): PENDIENTE — número CallRail dedicado; mientras tanto usa el principal
export const CONQUESTING_PHONE = {
  phone: "+12817890484",
  phoneFormatted: "+1 (281) 789-0484",
} as const;

export const SERVICES: Service[] = [
  {
    "id": "condiciones-cronicas",
    "slug": "condiciones-cronicas",
    "title": "Control de Diabetes, Hipertensión y Colesterol",
    "titleEn": "Diabetes, Hypertension & Cholesterol Care",
    "shortTitle": "Crónicas",
    "description": "Diabetes, presión alta y colesterol controlados en una sola consulta, con A1C y perfil de lípidos. Norte de Houston, sin cita y en español.",
    "descriptionEn": "Diabetes, high blood pressure and cholesterol managed in one visit, with A1C and lipid panel. North Houston, walk-ins welcome, Spanish spoken.",
    "longDescription": "Diabetes, presión alta y colesterol suelen llegar juntos y casi nunca avisan. Mucha gente se entera en un chequeo de rutina, cuando la glucosa o la presión ya llevan tiempo elevadas. En Clínica Hispana Cruz 2, en el norte de Houston, llevamos el control de las tres condiciones en una misma consulta y en español, para que no tengas que repartir tu salud entre varias citas.\n\n**Cómo empieza tu control**\nEn la primera visita el equipo médico repasa tu historial, los medicamentos que ya tomas y las enfermedades de tu familia. Medimos presión, peso y cintura, y pedimos los [análisis de laboratorio](/servicios/examenes-sangre) que hagan falta: glucosa en ayunas, hemoglobina A1C, perfil de lípidos y, según el caso, función del riñón y del hígado.\n\n**Qué vigilamos en cada cita**\n- Tu A1C, que refleja el promedio de azúcar de los últimos meses\n- Las cifras de presión, también las que anotas en casa\n- LDL, HDL y triglicéridos\n- Cómo te caen los medicamentos y si hay efectos secundarios\n- Pies, peso y señales tempranas de daño en riñones o vista\n\n**Ajustes sin regaños**\nUn tratamiento solo funciona si cabe en tu vida. Si trabajas turnos largos, si en casa se cocina a la manera tradicional o si te cuesta tomar varias pastillas al día, lo hablamos con franqueza y buscamos la opción que sí puedas sostener. Al terminar la consulta te entregamos los medicamentos indicados en nuestra [farmacia](/servicios/farmacia), sin otra parada.\n\n**Por qué no conviene esperar**\nSin control, el azúcar y la presión altas van lastimando en silencio el corazón, los riñones, la vista y los nervios de los pies. Notar un cambio a tiempo permite corregir la dosis antes de que aparezca una complicación. Si además sientes palpitaciones o falta de aire, podemos sumar un [electrocardiograma](/servicios/electrocardiograma) a la revisión.\n\n**Dónde y cuándo**\nEstamos en 13331 Kuykendahl Rd, Suite 128 (Houston, TX 77090), cerca de Spring. Llega cualquier día, de 9 AM a 9 PM, con tus cajas de medicamentos y tu última lectura de presión; no te pedimos cita ni seguro. Pregunta el precio de tu consulta y de tus análisis antes de empezar.",
    "longDescriptionEn": "Diabetes, high blood pressure and high cholesterol tend to show up together, and they rarely give a warning. Many people find out at a routine checkup, after their glucose or blood pressure has been high for a while. At Clínica Hispana Cruz 2 in north Houston, we manage all three conditions in a single visit and in Spanish, so your health isn't split across several appointments.\n\n**How your follow-up starts**\nAt the first visit the medical team goes over your history, the medicines you already take and the conditions that run in your family. We check blood pressure, weight and waist size, and order the [lab tests](/servicios/examenes-sangre) you need: fasting glucose, hemoglobin A1C, a lipid panel and, depending on the case, kidney and liver function.\n\n**What we track at each visit**\n- Your A1C, which reflects your average blood sugar over recent months\n- Blood pressure readings, including the ones you log at home\n- LDL, HDL and triglycerides\n- How you tolerate your medicines and any side effects\n- Feet, weight and early signs of kidney or eye damage\n\n**Adjustments without lectures**\nA treatment only works if it fits your life. If you work long shifts, if home cooking is traditional or if taking several pills a day is hard, we talk about it openly and look for the option you can actually keep up. At the end of the visit we hand you the medicines prescribed in the consultation at our [pharmacy](/servicios/farmacia), with no extra stop.\n\n**Why waiting costs you**\nLeft unchecked, these conditions slowly harm the heart, kidneys, eyes and the nerves in your feet. Catching a change early lets us correct the dose before a complication appears. If you also notice palpitations or shortness of breath, we can add an [electrocardiogram](/servicios/electrocardiograma) to the checkup.\n\n**Where and when**\nWe're at 13331 Kuykendahl Rd, Suite 128 (Houston, TX 77090), near Spring. Come in any day between 9 AM and 9 PM with your medicine boxes and your latest blood pressure log; no booking or insurance is needed. Ask about the price of your visit and labs before you start.",
    "icon": "Activity",
    "image": "/images/services/condiciones-cronicas.webp",
    "category": "medicina-general",
    "keywords": [
      "control de diabetes houston",
      "doctor diabetes español houston",
      "control de presion alta houston",
      "colesterol alto tratamiento houston"
    ],
    "keywordsEn": [
      "diabetes management houston",
      "high blood pressure doctor houston",
      "cholesterol management houston",
      "chronic disease clinic houston"
    ],
    "features": [
      "Análisis de A1C, glucosa y perfil de lípidos",
      "Seguimiento de presión arterial",
      "Revisión y ajuste de medicamentos",
      "Plan realista de comida y actividad"
    ],
    "featuresEn": [
      "A1C, glucose and lipid panel testing",
      "Blood pressure follow-up",
      "Medication review and adjustment",
      "Realistic food and activity plan"
    ],
    "highlighted": true,
    "order": 1
  },
  {
    "id": "tiroides",
    "slug": "tiroides",
    "title": "Exámenes y Tratamiento de la Tiroides",
    "titleEn": "Thyroid Testing & Treatment",
    "shortTitle": "Tiroides",
    "description": "Prueba de tiroides (TSH, T4 libre y T3) y tratamiento del hipo e hipertiroidismo en el norte de Houston. Resultados explicados en español, sin cita.",
    "descriptionEn": "Thyroid testing (TSH, free T4 and T3) and care for hypo- and hyperthyroidism in north Houston. Results explained in Spanish, walk-ins welcome.",
    "longDescription": "En la base del cuello tienes una glándula con forma de mariposa que regula cuánta energía gasta tu cuerpo. De ella dependen el peso, la temperatura, el ritmo del corazón y buena parte del ánimo. Cuando produce de menos o de más, los síntomas se confunden con estrés o cansancio, y hay quien pasa años sin diagnóstico. En Clínica Hispana Cruz 2 lo aclaramos con un análisis de sangre y una consulta en español.\n\n**Señales que vale la pena revisar**\n- Cansancio que no se quita durmiendo\n- Subir o bajar de peso sin cambiar la dieta\n- Frío o calor que los demás no sienten\n- Caída de cabello, piel seca o uñas quebradizas\n- Corazón acelerado, temblor o nerviosismo\n- Reglas irregulares o dificultad para embarazarse\n- Un bulto o hinchazón al frente del cuello\n\n**Qué análisis hacemos**\nEmpezamos por la TSH, la señal que envía el cerebro para que la tiroides trabaje más o menos. Si sale alterada se completa con T4 libre y, cuando hace falta, T3. Si el caso lo pide se suman anticuerpos, que ayudan a saber si la causa es autoinmune, como en la tiroiditis de Hashimoto o la enfermedad de Graves. La muestra se toma aquí mismo, junto con otros [exámenes de sangre](/servicios/examenes-sangre) que tu chequeo necesite.\n\n**Tratamiento y seguimiento**\nEl hipotiroidismo suele tratarse con una pastilla diaria de hormona tiroidea, y la dosis se afina con análisis de control hasta que la TSH queda en rango. El hipertiroidismo pide otro manejo; si un resultado o un nódulo necesitan estudio más a fondo, se orienta la referencia al especialista. Si estás embarazada o buscas embarazo, avísanos: en esa etapa la tiroides se vigila más de cerca.\n\n**Detalles que cambian el resultado**\nSi tomas biotina o suplementos para cabello y uñas, coméntalo antes de la muestra, porque pueden alterar la medición. Y si ya tienes tratamiento, toma tu pastilla a la misma hora cada día y con el estómago vacío.\n\n**Visítanos**\nPasa cualquier día entre 9 AM y 9 PM a 13331 Kuykendahl Rd, Suite 128, en el norte de Houston; no hace falta cita. No necesitas seguro médico.",
    "longDescriptionEn": "At the base of your neck sits a butterfly-shaped gland that regulates how much energy your body burns. Your weight, body temperature, heart rhythm and much of your mood depend on it. When it makes too little or too much hormone, the symptoms get mistaken for stress or fatigue, and some people go years without a diagnosis. At Clínica Hispana Cruz 2 we sort it out with a blood test and a visit in Spanish.\n\n**Signs worth checking**\n- Tiredness that sleep doesn't fix\n- Gaining or losing weight without changing your diet\n- Feeling cold or hot when others don't\n- Hair loss, dry skin or brittle nails\n- Racing heart, shakiness or nervousness\n- Irregular periods or trouble getting pregnant\n- A lump or swelling at the front of the neck\n\n**Which tests we run**\nWe start with TSH, the signal the brain sends to make the thyroid speed up or slow down. If it's off, we add free T4 and, when needed, T3. When the case calls for it, antibodies are added to help tell whether the cause is autoimmune, as in Hashimoto's thyroiditis or Graves' disease. The sample is drawn right here, along with any other [blood tests](/servicios/examenes-sangre) your checkup needs.\n\n**Treatment and follow-up**\nHypothyroidism is usually treated with a daily thyroid hormone pill, and the dose is fine-tuned with follow-up labs until TSH is back in range. Hyperthyroidism needs a different approach; if a result or a nodule needs a closer look, we guide the referral to a specialist. If you're pregnant or trying to conceive, let us know: the thyroid is watched more closely during that time.\n\n**Details that change the result**\nIf you take biotin or hair-and-nail supplements, mention it before the blood draw, since they can skew the measurement. And if you're already on treatment, take your pill at the same time every day on an empty stomach.\n\n**Visit us**\nStop by any day between 9 AM and 9 PM at 13331 Kuykendahl Rd, Suite 128, in north Houston; no booking needed. No health insurance needed.",
    "icon": "Activity",
    "image": "/images/services/tiroides.webp",
    "category": "medicina-general",
    "keywords": [
      "tiroides houston",
      "examen de tiroides houston",
      "hipotiroidismo tratamiento houston",
      "doctor tiroides español houston"
    ],
    "keywordsEn": [
      "thyroid testing houston",
      "thyroid doctor houston",
      "hypothyroidism treatment houston",
      "thyroid clinic houston"
    ],
    "features": [
      "TSH, T4 libre y T3 en sangre",
      "Diagnóstico de tiroides lenta o acelerada",
      "Ajuste de dosis con análisis de control",
      "Explicación clara en español"
    ],
    "featuresEn": [
      "TSH, free T4 and T3 blood tests",
      "Diagnosis of underactive or overactive thyroid",
      "Dose adjustment with follow-up labs",
      "Clear explanations in Spanish"
    ],
    "highlighted": false,
    "order": 2
  },
  {
    "id": "alergias",
    "slug": "alergias",
    "title": "Exámenes y Tratamiento de Alergias",
    "titleEn": "Allergy Testing & Treatment",
    "shortTitle": "Alergias",
    "description": "Alergias al polen, polvo, moho y mascotas: evaluación y tratamiento para nariz, ojos y piel en el norte de Houston. Sin cita y en español.",
    "descriptionEn": "Allergies to pollen, dust, mold and pets: evaluation and treatment for nose, eyes and skin in north Houston. Walk-ins welcome, Spanish spoken.",
    "longDescription": "En Houston las alergias casi no dan tregua: el polen de los árboles aparece a finales del invierno, el de los pastos en primavera y verano, y la ambrosía en otoño. A eso se suman el moho que deja la humedad, los ácaros del polvo y el pelo de las mascotas. En Clínica Hispana Cruz 2 te ayudamos a identificar qué te provoca los síntomas y a tenerlos bajo control, con explicaciones claras en español.\n\n**Síntomas que atendemos**\n- Estornudos, comezón y moco claro\n- Ojos rojos, llorosos o con picazón\n- Congestión que no te deja dormir\n- Ronchas, urticaria o comezón en la piel\n- Silbido en el pecho o tos que aparece al barrer, sacudir o salir en días de polen\n- Reacciones leves a comidas o a picaduras\n\n**Cómo te evaluamos**\nEl equipo médico te pregunta cuándo empiezan los síntomas, en qué lugares te sientes peor y qué te alivia. Revisa nariz, garganta, oídos, piel y pulmones para distinguir una alergia de una infección o de un resfriado que se alarga. Si hace falta una prueba específica de alergia, se orienta la referencia al especialista.\n\n**Tratamiento a tu medida**\nSegún el caso se indican antihistamínicos, esprays nasales, gotas para los ojos o cremas para la piel. Te damos además un plan sencillo para bajar la exposición: cerrar ventanas en los días de más polen, lavar la ropa de cama con agua caliente y controlar la humedad del baño y la cocina. Los medicamentos indicados en la consulta te los entregamos en nuestra [farmacia](/servicios/farmacia).\n\n**Cuando la alergia se complica**\nLa congestión de semanas puede terminar en sinusitis, y una tos con silbido puede ser asma. Si es tu caso, revisamos también las [enfermedades respiratorias](/servicios/enfermedades-respiratorias) que pueden estar detrás. Si notas hinchazón de labios o lengua, dificultad para respirar o mareo tras comer algo o recibir una picadura, llama al 911: puede ser una reacción grave.\n\n**Dónde estamos**\nAbrimos de 9 AM a 9 PM todos los días en 13331 Kuykendahl Rd, Suite 128, Houston, cerca de Spring. Sin cita y sin seguro médico.",
    "longDescriptionEn": "In Houston, allergies barely let up: tree pollen arrives in late winter, grass pollen in spring and summer, and ragweed in the fall. Add to that the mold humidity leaves behind, dust mites and pet dander. At Clínica Hispana Cruz 2 we help you pin down what triggers your symptoms and keep them under control, with clear explanations in Spanish.\n\n**Symptoms we treat**\n- Sneezing, itching and a clear runny nose\n- Red, watery or itchy eyes\n- Congestion that keeps you up at night\n- Hives, welts or itchy skin\n- Wheezing or a cough that shows up when sweeping, dusting or going out on pollen days\n- Mild reactions to foods or insect stings\n\n**How we evaluate you**\nThe medical team asks when your symptoms start, where they feel worse and what brings relief. They examine your nose, throat, ears, skin and lungs to tell an allergy apart from an infection or a cold that drags on. If a specific allergy test is needed, we guide the referral to a specialist.\n\n**Treatment that fits you**\nDepending on the case, we prescribe antihistamines, nasal sprays, eye drops or skin creams. We also give you a simple plan to lower exposure: keep windows shut on high-pollen days, wash bedding in hot water and control humidity in the bathroom and kitchen. The medicines prescribed in the visit are handed to you at our [pharmacy](/servicios/farmacia).\n\n**When allergies get complicated**\nWeeks of congestion can turn into sinusitis, and a wheezy cough may be asthma. If that sounds like you, we also check for the [respiratory illnesses](/servicios/enfermedades-respiratorias) that may be involved. If you notice swelling of the lips or tongue, trouble breathing or dizziness after eating something or being stung, call 911: it may be a severe reaction.\n\n**Where to find us**\nOpen 9 AM to 9 PM every day at 13331 Kuykendahl Rd, Suite 128, Houston, near Spring. No appointment and no health insurance needed.",
    "icon": "Wind",
    "image": "/images/services/alergias.webp",
    "category": "medicina-general",
    "keywords": [
      "alergias houston",
      "tratamiento de alergias houston",
      "doctor de alergias español houston",
      "examen de alergias houston"
    ],
    "keywordsEn": [
      "allergy treatment houston",
      "allergy testing houston",
      "allergy doctor houston",
      "allergy clinic houston"
    ],
    "features": [
      "Evaluación de síntomas y detonantes",
      "Tratamiento de rinitis y conjuntivitis alérgica",
      "Manejo de ronchas y comezón en la piel",
      "Plan para reducir la exposición en casa"
    ],
    "featuresEn": [
      "Symptom and trigger evaluation",
      "Treatment of allergic rhinitis and itchy eyes",
      "Care for hives and itchy skin",
      "Plan to cut exposure at home"
    ],
    "highlighted": false,
    "order": 3
  },
  {
    "id": "enfermedades-respiratorias",
    "slug": "enfermedades-respiratorias",
    "title": "Pruebas de Flu y COVID y Enfermedades Respiratorias",
    "titleEn": "Flu & COVID Testing and Respiratory Illness Care",
    "shortTitle": "Respiratorias",
    "description": "Prueba rápida de flu y COVID con resultado durante tu visita, y tratamiento de tos, bronquitis y sinusitis. Norte de Houston, sin cita, en español.",
    "descriptionEn": "Rapid flu and COVID testing with results during your visit, plus care for cough, bronchitis and sinusitis. North Houston, walk-ins, Spanish spoken.",
    "longDescription": "Fiebre, dolor de cuerpo, tos y garganta irritada: el flu, el COVID y otros virus respiratorios arrancan de forma parecida y es difícil saber cuál tienes solo por los síntomas. En Clínica Hispana Cruz 2 hacemos pruebas rápidas de flu y COVID durante la consulta, para que sepas qué es y qué cuidados necesitan tú y tu familia.\n\n**Qué atendemos**\n- Influenza (flu) y COVID-19\n- Resfriados que se alargan o se complican\n- Bronquitis y tos que no se quita\n- Sinusitis y dolor de oídos\n- Dolor de garganta, con [prueba de strep](/servicios/prueba-strep) si se sospecha estreptococo\n- Crisis leves de asma o de alergia que afectan la respiración\n\n**Cómo funciona la prueba**\nSe toma una muestra con un hisopo por la nariz. Es rápida, molesta unos segundos y el resultado se conoce mientras esperas en la clínica. Con ese dato el equipo médico decide si te conviene un antiviral, que funciona mejor cuando se empieza en los primeros días de síntomas, o solo tratamiento para aliviar la fiebre, la tos y la congestión.\n\n**Antibióticos solo cuando sirven**\nLa mayoría de estas infecciones son virales y los antibióticos no las curan. Los indicamos cuando hay señales de infección bacteriana, como en algunas sinusitis, otitis o neumonías. Así evitas efectos secundarios que no te hacen falta. Si tus síntomas son de temporada y se repiten cada año, puede tratarse de [alergias](/servicios/alergias).\n\n**Señales de alarma**\nVe a emergencias o llama al 911 si hay mucha dificultad para respirar, labios morados, dolor fuerte en el pecho, confusión o, en bebés, si dejan de comer o de mojar pañales.\n\n**Visita sin cita**\nEstamos en 13331 Kuykendahl Rd, Suite 128, al norte de Houston, con horario de 9 AM a 9 PM todos los días. No necesitas seguro médico. Para llegar mejor preparado a la próxima temporada, pregunta por las [vacunas](/servicios/vacunas) disponibles.",
    "longDescriptionEn": "Fever, body aches, cough and a scratchy throat: flu, COVID and other respiratory viruses start out in similar ways, and it's hard to know which one you have from symptoms alone. At Clínica Hispana Cruz 2 we run rapid flu and COVID tests during the visit, so you know what it is and what care you and your family need.\n\n**What we treat**\n- Influenza (flu) and COVID-19\n- Colds that drag on or get worse\n- Bronchitis and a cough that won't go away\n- Sinusitis and earaches\n- Sore throat, with a [strep test](/servicios/prueba-strep) when strep is suspected\n- Mild asthma or allergy flare-ups that affect breathing\n\n**How the test works**\nA sample is taken with a nasal swab. It's quick, uncomfortable for a few seconds, and the result is ready while you wait at the clinic. With that answer, the medical team decides whether an antiviral makes sense, since it works best when started in the first days of symptoms, or whether you only need relief for fever, cough and congestion.\n\n**Antibiotics only when they help**\nMost of these infections are viral, and antibiotics don't cure them. We prescribe them when there are signs of a bacterial infection, as in some cases of sinusitis, ear infection or pneumonia. That spares you side effects you don't need. If your symptoms are seasonal and come back every year, it may be [allergies](/servicios/alergias).\n\n**Warning signs**\nGo to the ER or call 911 for severe trouble breathing, bluish lips, strong chest pain, confusion or, in babies, if they stop eating or wetting diapers.\n\n**Walk in anytime we're open**\nWe're at 13331 Kuykendahl Rd, Suite 128, in north Houston, open 9 AM to 9 PM every day. No health insurance needed. To be better prepared for next season, ask about the [vaccines](/servicios/vacunas) we have available.",
    "icon": "Wind",
    "image": "/images/services/enfermedades-respiratorias.webp",
    "category": "medicina-general",
    "keywords": [
      "prueba de covid houston",
      "prueba de flu houston",
      "tratamiento gripe houston",
      "enfermedades respiratorias houston"
    ],
    "keywordsEn": [
      "covid test houston",
      "flu test houston",
      "flu treatment houston",
      "respiratory illness houston"
    ],
    "features": [
      "Prueba rápida de flu y COVID",
      "Resultado durante la visita",
      "Tratamiento de tos, bronquitis y sinusitis",
      "Atención sin cita, en español"
    ],
    "featuresEn": [
      "Rapid flu and COVID testing",
      "Results during your visit",
      "Treatment for cough, bronchitis and sinusitis",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 4
  },
  {
    "id": "examen-fisico-escolar",
    "slug": "examen-fisico-escolar",
    "title": "Chequeos Físicos Escolares y Deportivos",
    "titleEn": "School & Sports Physical Exams",
    "shortTitle": "Examen Físico",
    "description": "Examen físico para la escuela, guardería, campamento o liga deportiva, con el formulario completado en la visita. Norte de Houston, sin cita.",
    "descriptionEn": "Physicals for school, daycare, camp or sports leagues, with the form completed at the visit. North Houston, walk-ins welcome, Spanish spoken.",
    "longDescription": "Antes de entrar a la escuela, a un campamento o a la temporada de fútbol, muchos programas piden un examen físico reciente. En Clínica Hispana Cruz 2 lo hacemos sin cita, revisamos el formulario contigo y explicamos cada hallazgo a padres y estudiantes en español.\n\n**Qué incluye la revisión**\n- Talla, peso e índice de masa corporal\n- Presión arterial y pulso\n- Prueba de la vista\n- Escucha del corazón y de los pulmones\n- Revisión de columna, articulaciones y postura\n- Preguntas sobre asma, alergias, desmayos y salud de la familia\n\n**Formularios que completamos**\nLlenamos los formatos de inscripción escolar, guardería, campamentos de verano y ligas deportivas, además de la evaluación previa a la participación que se usa en los deportes escolares de Texas. Trae el formulario original; si la escuela solo te mandó un enlace, imprímelo antes de venir.\n\n**Pruebas que a veces se piden**\nAlgunas escuelas o programas solicitan una [prueba de tuberculosis](/servicios/prueba-tuberculosis) o las vacunas al día. Revisamos la cartilla de tu hijo y te decimos qué le falta; pregunta por las [vacunas](/servicios/vacunas) disponibles en la clínica. Si tiene asma o [alergias](/servicios/alergias), es buen momento para repasar su plan y sus medicamentos antes de la temporada.\n\n**Por qué no es solo un trámite**\nEl examen deportivo sirve para notar a tiempo señales que merecen atención, como un soplo en el corazón, presión alta o dolor en el pecho al hacer ejercicio. Si aparece algo así, te explicamos qué estudio sigue antes de autorizar la actividad, y un [electrocardiograma](/servicios/electrocardiograma) puede hacerse en la misma clínica.\n\n**Para que la visita sea ágil**\nContesta en casa la parte de antecedentes del formulario y trae los lentes si tu hijo los usa, junto con su cartilla de vacunas. Abrimos todos los días de 9 AM a 9 PM en 13331 Kuykendahl Rd, Suite 128, Houston, sin cita y sin seguro médico.",
    "longDescriptionEn": "Before starting school, summer camp or soccer season, many programs ask for a recent physical. At Clínica Hispana Cruz 2 we do it without an appointment, go over the form with you and explain every finding to parents and students in Spanish.\n\n**What the exam covers**\n- Height, weight and body mass index\n- Blood pressure and pulse\n- Vision screening\n- Listening to the heart and lungs\n- Spine, joint and posture check\n- Questions about asthma, allergies, fainting and family health\n\n**Forms we complete**\nWe fill out school enrollment, daycare, summer camp and sports league forms, plus the pre-participation evaluation used for school sports in Texas. Bring the original form; if the school only sent you a link, print it before you come.\n\n**Tests that are sometimes required**\nSome schools or programs ask for a [TB test](/servicios/prueba-tuberculosis) or up-to-date vaccines. We review your child's shot record and tell you what's missing; ask about the [vaccines](/servicios/vacunas) available at the clinic. If your child has asthma or [allergies](/servicios/alergias), it's a good time to go over their plan and medicines before the season.\n\n**Why it's more than paperwork**\nA sports physical helps catch signs that deserve attention early, such as a heart murmur, high blood pressure or chest pain during exercise. If something like that comes up, we explain which test comes next before clearing the activity, and an [electrocardiogram](/servicios/electrocardiograma) can be done at the same clinic.\n\n**To keep the visit quick**\nFill out the history section of the form at home and bring your child's glasses if they wear them, along with the vaccine record. We're open every day from 9 AM to 9 PM at 13331 Kuykendahl Rd, Suite 128, Houston, with no appointment and no insurance required.",
    "icon": "Clipboard",
    "image": "/images/services/examen-fisico-escolar.webp",
    "category": "examenes",
    "keywords": [
      "examen fisico escolar houston",
      "physical para la escuela houston",
      "examen deportivo houston",
      "chequeo escolar houston"
    ],
    "keywordsEn": [
      "school physical houston",
      "sports physical houston",
      "school physical exam houston",
      "kids physical houston"
    ],
    "features": [
      "Revisión de vista, corazón, pulmones y columna",
      "Formularios escolares y deportivos",
      "Revisión de la cartilla de vacunas",
      "Explicación en español para la familia"
    ],
    "featuresEn": [
      "Vision, heart, lung and spine check",
      "School and sports forms",
      "Vaccine record review",
      "Explained in Spanish for the family"
    ],
    "highlighted": false,
    "order": 5
  },
  {
    "id": "ginecologia",
    "slug": "ginecologia",
    "title": "Ginecología en Houston en Español: Papanicolaou y Chequeo de Mujer",
    "titleEn": "Spanish-Speaking Gynecology in Houston: Pap Smear & Well-Woman Exam",
    "seoTitle": "Ginecología en español en Houston: Papanicolaou",
    "seoTitleEn": "Spanish-Speaking Gynecology in Houston: Pap Smear",
    "shortTitle": "Ginecología",
    "description": "Papanicolaou, chequeo de la mujer, cultivos y tratamiento de infecciones vaginales en español, en el norte de Houston. Sin cita y sin seguro.",
    "descriptionEn": "Pap smears, well-woman exams, cultures and vaginal infection treatment in Spanish in north Houston. Walk-ins welcome, no insurance needed.",
    "longDescription": "Tu salud como mujer merece un espacio de confianza. En Clínica Hispana Cruz 2 ofrecemos atención ginecológica en español en el norte de Houston: papanicolaou, chequeo de mujer, cultivos y tratamiento de infecciones, sin cita previa y sin necesidad de seguro médico.\n\n**¿Qué incluye la consulta de ginecología?**\n- Papanicolaou (citología cervical)\n- Chequeo ginecológico y de mujer (well-woman exam)\n- Cultivos vaginales para identificar infecciones\n- Tratamiento de infecciones vaginales por hongos o bacterias\n- Evaluación de flujo anormal, comezón, ardor o dolor\n- Pruebas de embarazo y de enfermedades de transmisión sexual en la misma visita\n- Referencia a especialista cuando se necesita\n\n**¿Qué es el papanicolaou y cuándo debo hacérmelo?**\nEl papanicolaou es una prueba en la que se toma una muestra de células del cuello del útero para detectar cambios antes de que se conviertan en cáncer. Dura pocos minutos y no requiere ayuno. Como regla general se recomienda a partir de los 21 años y repetirlo cada tres años si el resultado es normal; el equipo médico ajusta la frecuencia según tu edad y tu historial. Conviene no hacerlo durante el periodo menstrual y evitar relaciones sexuales, duchas vaginales o cremas en las 48 horas previas. Cuando el resultado está listo te avisamos y te explicamos qué significa.\n\n**¿Cuánto cuesta el papanicolaou sin seguro?**\nNo necesitas seguro médico. Manejamos precios de pago directo y te decimos el costo antes de la consulta. Además solemos tener paquetes de salud de la mujer: por ejemplo, el Chequeo de la Mujer con Ultrasonido por $179 incluye papanicolaou, ultrasonido pélvico, examen de orina y consulta médica, y el paquete de Salud Íntima Femenina por $69 incluye cultivo, consulta y examen de orina. Los precios de promoción pueden cambiar; revisa la [página de promociones](/promociones) o llámanos para confirmar.\n\n**Tengo flujo, comezón o mal olor. ¿Qué hago?**\nSon señales de una posible infección vaginal por hongos o bacterias. En la consulta evaluamos tus síntomas, tomamos un cultivo si es necesario y, en la mayoría de los casos, sales con tu tratamiento en la misma visita. Si además sientes ardor al orinar o ganas constantes de ir al baño, hacemos un examen de orina para descartar una [infección urinaria](/servicios/infecciones-urinarias).\n\n**¿Qué es el chequeo de mujer (well-woman exam)?**\nEs una consulta preventiva anual que incluye revisión de tu historial, papanicolaou cuando corresponde, evaluación de síntomas y orientación sobre anticoncepción, planificación familiar y salud sexual. Si hace falta, se complementa con [exámenes de sangre](/servicios/examenes-sangre) o con un [ultrasonido](/servicios/ultrasonido).\n\n**¿Necesito cita o seguro médico?**\nNo. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM; si prefieres asegurar un horario, llámanos y te lo reservamos. No necesitas seguro: aceptamos efectivo y tarjetas de débito y crédito. Toda la atención, desde la recepción hasta la consulta, es en español.\n\n**¿Dónde están?**\nEn 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, en el norte de Houston. Atendemos a mujeres de Champions, Willowbrook, Klein, Spring, Cypress Station y comunidades cercanas.",
    "longDescriptionEn": "Your health as a woman deserves a space of trust. At Clínica Hispana Cruz 2 we offer gynecology care in Spanish in north Houston: Pap smears, well-woman exams, cultures and infection treatment, with no appointment and no health insurance needed.\n\n**What does the gynecology visit include?**\n- Pap smear (cervical cytology)\n- Gynecological checkup and well-woman exam\n- Vaginal cultures to identify infections\n- Treatment of yeast and bacterial vaginal infections\n- Evaluation of abnormal discharge, itching, burning or pain\n- Pregnancy and STD testing in the same visit\n- Referral to a specialist when needed\n\n**What is a Pap smear and when should I get one?**\nA Pap smear takes a sample of cells from the cervix to detect changes before they turn into cancer. It takes a few minutes and does not require fasting. As a general rule it is recommended from age 21 and repeated every three years if the result is normal; the medical team adjusts the frequency to your age and history. Avoid scheduling it during your period, and avoid intercourse, douching or vaginal creams in the 48 hours before. When the result is ready we let you know and explain what it means.\n\n**How much does a Pap smear cost without insurance?**\nYou don't need health insurance. We offer self-pay pricing and tell you the cost before your visit. We also usually have women's health packages: for example, the Women's Checkup with Ultrasound for $179 includes a Pap smear, pelvic ultrasound, urine test and medical consultation, and the Women's Intimate Health package for $69 includes a culture, consultation and urine test. Promotional prices may change; check the [promotions page](/promociones) or call us to confirm.\n\n**I have discharge, itching or odor. What should I do?**\nThese are signs of a possible yeast or bacterial vaginal infection. During the visit we evaluate your symptoms, take a culture if needed and, in most cases, you leave with treatment from the same visit. If you also feel burning when you urinate or a constant urge to go, we run a urine test to rule out a [urinary tract infection](/servicios/infecciones-urinarias).\n\n**What is a well-woman exam?**\nIt is a yearly preventive visit that includes a review of your history, a Pap smear when due, symptom evaluation and guidance on contraception, family planning and sexual health. If needed, it is completed with [blood tests](/servicios/examenes-sangre) or an [ultrasound](/servicios/ultrasonido).\n\n**Do I need an appointment or insurance?**\nNo. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM; if you prefer a set time, call us and we'll reserve it. No insurance needed: we accept cash, debit and credit cards. All care, from the front desk to the exam room, is in Spanish.\n\n**Where are you located?**\nAt 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, in north Houston. We care for women from Champions, Willowbrook, Klein, Spring, Cypress Station and nearby communities.",
    "icon": "Heart",
    "image": "/images/services/ginecologia.webp",
    "category": "salud-mujer",
    "keywords": [
      "ginecologia en houston",
      "ginecologo houston español",
      "papanicolaou houston",
      "cultivo vaginal houston",
      "infeccion vaginal tratamiento houston"
    ],
    "keywordsEn": [
      "gynecology houston",
      "gynecologist houston spanish",
      "pap smear houston",
      "vaginal culture houston",
      "vaginal infection treatment houston"
    ],
    "features": [
      "Papanicolaou y chequeo ginecológico",
      "Cultivos vaginales",
      "Tratamiento de infecciones vaginales",
      "Atención privada en español"
    ],
    "featuresEn": [
      "Pap smear and gynecological checkup",
      "Vaginal cultures",
      "Treatment of vaginal infections",
      "Private care in Spanish"
    ],
    "highlighted": true,
    "order": 6
  },
  {
    "id": "prueba-embarazo",
    "slug": "prueba-embarazo",
    "title": "Examen y Diagnóstico de Embarazo",
    "titleEn": "Pregnancy Testing & Confirmation",
    "shortTitle": "Prueba de Embarazo",
    "description": "Prueba de embarazo en la clínica con resultado en la visita y orientación sobre lo que sigue. Norte de Houston, sin cita, discreta y en español.",
    "descriptionEn": "In-clinic pregnancy test with results at your visit and guidance on next steps. North Houston, walk-ins welcome, private and in Spanish.",
    "longDescription": "¿Llevas días esperando la regla, amaneces con náuseas o la prueba casera marcó una línea casi invisible? Es normal querer una respuesta segura. En Clínica Hispana Cruz 2 confirmamos el embarazo con una prueba en la clínica y te explicamos, en español y con calma, qué sigue según tu resultado.\n\n**Cómo se hace**\nLa prueba busca la hormona hCG, que el cuerpo empieza a producir cuando hay embarazo. Usamos una muestra de orina y el resultado se conoce en la misma visita. Si no queda claro, el equipo médico puede indicar una prueba en sangre para medir la hormona.\n\n**Cuándo hacerla**\nLo más confiable es esperar al primer día de retraso de tu regla. Si la haces antes, la hormona puede estar todavía muy baja y salir negativa aunque sí haya embarazo. La primera orina de la mañana suele estar más concentrada.\n\n**Si sale positiva**\n- Calculamos tus semanas de embarazo según tu última regla\n- Revisamos los medicamentos que tomas y te decimos cuáles conviene suspender\n- Te recomendamos ácido fólico y cuidados para estas semanas\n- Si hace falta, se indica un [ultrasonido](/servicios/ultrasonido) para confirmar la edad del embarazo\n- Te orientamos para iniciar tu control prenatal\n\n**Si sale negativa**\nSi tu regla no llega en una semana, repite la prueba o regresa. Un retraso también puede deberse a estrés, cambios de peso, problemas de [tiroides](/servicios/tiroides) u ovarios poliquísticos, y vale la pena revisarlo. Si por ahora no buscas embarazo, podemos hablar de [métodos anticonceptivos](/servicios/anticonceptivos).\n\n**Señales para ir a emergencias**\nDolor fuerte en un lado del vientre, sangrado abundante o desmayo con una prueba positiva necesitan atención urgente, porque pueden indicar un embarazo fuera del útero.\n\n**Horario**\nTe atendemos sin cita de 9 AM a 9 PM, todos los días, en 13331 Kuykendahl Rd, Suite 128, Houston. Sin seguro médico y con total discreción.",
    "longDescriptionEn": "Waiting days for your period, waking up queasy or squinting at a barely visible line on a home test? Wanting a sure answer is normal. At Clínica Hispana Cruz 2 we confirm pregnancy with an in-clinic test and walk you through what comes next, calmly and in Spanish.\n\n**How it's done**\nThe test looks for hCG, a hormone the body starts making once a pregnancy begins. We use a urine sample, and you get the result at the same visit. If it's unclear, the medical team may order a blood test to measure the hormone.\n\n**When to take it**\nWait until your period is at least a day overdue for the most trustworthy reading. Testing earlier, the hormone may still be too low and show negative even if you are pregnant. First-morning urine tends to be the most concentrated.\n\n**If it's positive**\n- We estimate how many weeks along you are from your last period\n- We review the medicines you take and tell you which ones to stop\n- We recommend folic acid and care for these early weeks\n- If needed, an [ultrasound](/servicios/ultrasonido) is ordered to confirm how far along you are\n- We point you toward starting prenatal care\n\n**If it's negative**\nIf your period still hasn't come in a week, test again or come back. A late period can also come from stress, weight changes, [thyroid](/servicios/tiroides) problems or polycystic ovaries, and it's worth checking. If you're not looking to get pregnant right now, we can talk about [birth control](/servicios/anticonceptivos).\n\n**Signs that call for the ER**\nSevere pain on one side of the belly, heavy bleeding or fainting with a positive test need urgent care, since they can point to a pregnancy outside the uterus.\n\n**Hours**\nWalk in from 9 AM to 9 PM, every day, at 13331 Kuykendahl Rd, Suite 128, Houston. No health insurance needed, and your visit stays private.",
    "icon": "Heart",
    "image": "/images/services/prueba-embarazo.webp",
    "category": "salud-mujer",
    "keywords": [
      "prueba de embarazo houston",
      "examen de embarazo houston",
      "confirmar embarazo houston",
      "test de embarazo español houston"
    ],
    "keywordsEn": [
      "pregnancy test houston",
      "pregnancy confirmation houston",
      "confirm pregnancy houston",
      "pregnancy testing houston"
    ],
    "features": [
      "Prueba de hCG con resultado en la visita",
      "Interpretación con el equipo médico",
      "Orientación para el control prenatal",
      "Atención privada y en español"
    ],
    "featuresEn": [
      "hCG test with results at your visit",
      "Results reviewed with the medical team",
      "Guidance toward prenatal care",
      "Private care in Spanish"
    ],
    "highlighted": false,
    "order": 7
  },
  {
    "id": "anticonceptivos",
    "slug": "anticonceptivos",
    "title": "Tratamientos Anticonceptivos",
    "titleEn": "Contraceptive Methods",
    "shortTitle": "Anticonceptivos",
    "description": "Pastillas e inyección anticonceptiva con orientación para elegir el método que te conviene. Norte de Houston, sin cita, sin seguro y en español.",
    "descriptionEn": "Birth control pills and the shot, with guidance to choose the method that suits you. North Houston, walk-ins welcome, no insurance, in Spanish.",
    "longDescription": "Elegir un método anticonceptivo es una decisión personal, y la mejor opción es la que se acomoda a tu salud, a tus planes y a tu rutina. En Clínica Hispana Cruz 2 te explicamos cada alternativa en español, sin juicios, y te ayudamos a empezar el método que elijas.\n\n**Opciones que manejamos**\n- Pastillas anticonceptivas diarias, combinadas o solo de progestina\n- Inyección anticonceptiva cada tres meses\n- Orientación sobre métodos de larga duración y sobre el condón, que además protege de infecciones\n- [Retiro de implante](/servicios/extraccion-implantes) cuando quieres cambiar de método o buscar embarazo\n\n**Antes de indicarte un método**\nEl equipo médico revisa tu presión arterial, tu historial y los medicamentos que tomas. Algunas condiciones, como la migraña con aura, fumar después de los 35 años o haber tenido coágulos, hacen que ciertas pastillas no sean seguras; en esos casos hay alternativas sin estrógeno. Si existe la posibilidad de un embarazo, primero hacemos una [prueba de embarazo](/servicios/prueba-embarazo).\n\n**Cómo empezar**\nLas pastillas se pueden iniciar el día en que te las indican o con tu próxima regla; te decimos si necesitas un método de respaldo los primeros días. La inyección se aplica en la clínica y te anotamos la fecha de la siguiente dosis para que no se te pase.\n\n**Lo que conviene saber**\nNi la pastilla ni la inyección te protegen de las infecciones de transmisión sexual. Si tienes una pareja nueva, puedes hacerte las [pruebas de ETS](/servicios/enfermedades-transmision-sexual) en la misma clínica. Es común tener sangrado irregular los primeros meses; si te molesta, regresa y buscamos un ajuste. Para el resto de tu salud femenina también está la consulta de [ginecología](/servicios/ginecologia).\n\n**Te esperamos**\n13331 Kuykendahl Rd, Suite 128, al norte de Houston. Abrimos a las 9 de la mañana y cerramos a las 9 de la noche, los siete días; llega cuando puedas, tengas seguro o no.",
    "longDescriptionEn": "Choosing a birth control method is a personal decision, and the best option is the one that fits your health, your plans and your routine. At Clínica Hispana Cruz 2 we explain each choice in Spanish, without judgment, and help you start the method you pick.\n\n**Options we offer**\n- Daily birth control pills, combined or progestin-only\n- The birth control shot every three months\n- Guidance on long-acting methods and on condoms, which also protect against infections\n- [Implant removal](/servicios/extraccion-implantes) when you want to switch methods or get pregnant\n\n**Before we prescribe a method**\nThe medical team checks your blood pressure, your history and the medicines you take. Some conditions, such as migraine with aura, smoking after age 35 or a past blood clot, make certain pills unsafe; in those cases there are estrogen-free alternatives. If a pregnancy is possible, we start with a [pregnancy test](/servicios/prueba-embarazo).\n\n**How to start**\nPills can be started on the day they're prescribed or with your next period; we'll tell you whether you need a backup method for the first few days. The shot is given at the clinic, and we note the date of your next dose so you don't miss it.\n\n**Good to know**\nPills and shots do nothing against sexually transmitted infections. If you have a new partner, you can get [STD testing](/servicios/enfermedades-transmision-sexual) at the same clinic. Irregular bleeding is common in the first months; if it bothers you, come back and we'll look for an adjustment. For the rest of your women's health, there's also our [gynecology](/servicios/ginecologia) visit.\n\n**We're here for you**\n13331 Kuykendahl Rd, Suite 128, in north Houston. Doors open daily at 9 AM and close at 9 PM; walk in, insured or not.",
    "icon": "Syringe",
    "image": "/images/services/anticonceptivos.webp",
    "category": "salud-mujer",
    "keywords": [
      "anticonceptivos houston",
      "metodos anticonceptivos houston",
      "inyeccion anticonceptiva houston",
      "pastillas anticonceptivas houston"
    ],
    "keywordsEn": [
      "birth control houston",
      "contraception clinic houston",
      "birth control shot houston",
      "birth control pills houston"
    ],
    "features": [
      "Pastillas anticonceptivas",
      "Inyección anticonceptiva trimestral",
      "Revisión de presión e historial antes de empezar",
      "Seguimiento y cambio de método"
    ],
    "featuresEn": [
      "Birth control pills",
      "Three-month birth control shot",
      "Blood pressure and history check before starting",
      "Follow-up and method changes"
    ],
    "highlighted": false,
    "order": 8
  },
  {
    "id": "extraccion-implantes",
    "slug": "extraccion-implantes",
    "title": "Extracción de Implantes Subdérmicos",
    "titleEn": "Subdermal Implant Removal",
    "shortTitle": "Implantes",
    "description": "Retiro del implante anticonceptivo del brazo con anestesia local, en un procedimiento corto. Norte de Houston, en español y sin seguro médico.",
    "descriptionEn": "Removal of the contraceptive arm implant under local anesthesia in a short procedure. North Houston, in Spanish, no health insurance needed.",
    "longDescription": "El implante anticonceptivo es una varilla flexible del tamaño de un cerillo que se coloca bajo la piel del brazo. Protege durante varios años, pero llega un momento en que se vence, quieres embarazarte o simplemente prefieres otro método. En Clínica Hispana Cruz 2 lo retiramos en un procedimiento corto, con anestesia local y explicado en español.\n\n**Cómo es el procedimiento**\n- Palpamos la cara interna del brazo para ubicar la varilla\n- Desinfectamos la piel e inyectamos un anestésico local\n- Se hace un corte muy pequeño en la piel, de pocos milímetros\n- Se saca la varilla y se comprueba que salga completa\n- Se cierra con cintas adhesivas y se cubre con un vendaje de presión\n\n**Antes de venir**\nSi guardas la tarjeta o los papeles de cuando te lo pusieron, tráelos: ahí vienen la fecha y el tipo de implante. Avísanos si tomas anticoagulantes o si alguna vez reaccionaste mal a un anestésico. Puedes comer normal y volver a tus actividades después, evitando cargar peso con ese brazo por unos días.\n\n**Después del retiro**\nMantén el vendaje el tiempo que te indiquen y la herida seca los primeros días. Un moretón o sensibilidad leve es normal. Regresa si notas enrojecimiento que se extiende, pus o fiebre.\n\n**Y luego, ¿qué método?**\nLa protección termina en cuanto sale el implante y la fertilidad vuelve pronto. Si no buscas embarazo, conviene empezar otro método desde ese momento; te explicamos las opciones de [anticonceptivos](/servicios/anticonceptivos) que manejamos. Si por el contrario quieres embarazarte, una [prueba de embarazo](/servicios/prueba-embarazo) te dirá cuándo llegó el momento. Cuando el implante está muy profundo o no se puede palpar, se orienta la referencia para ubicarlo con imagen antes de retirarlo.\n\n**Ubicación**\n13331 Kuykendahl Rd, Suite 128, Houston, TX 77090. Abrimos todos los días de 9 AM a 9 PM; pregunta disponibilidad y precio del retiro al llegar o por WhatsApp.",
    "longDescriptionEn": "The contraceptive implant is a flexible rod about the size of a matchstick placed under the skin of the arm. It protects for several years, but eventually it expires, you want to get pregnant or you'd simply rather use another method. At Clínica Hispana Cruz 2 we remove it in a short procedure, under local anesthesia and explained in Spanish.\n\n**How the procedure works**\n- We feel along the inner arm to find the rod\n- The skin is disinfected and a numbing injection is given\n- A very small cut of a few millimeters is made in the skin\n- The rod is taken out and checked to make sure it's whole\n- The cut is closed with adhesive strips and covered with a pressure bandage\n\n**Before you come in**\nIf you kept the card or papers from when it was placed, bring them: they show the date and the type of implant. Tell us if you take blood thinners or have ever reacted badly to an anesthetic. You can eat normally and get back to your routine afterward, avoiding heavy lifting with that arm for a few days.\n\n**After removal**\nKeep the bandage on as long as instructed and the wound dry for the first few days. A bruise or mild tenderness is normal. Come back if you notice spreading redness, pus or fever.\n\n**What method comes next?**\nProtection ends as soon as the implant is out, and fertility returns quickly. If you're not trying to get pregnant, it's best to start another method right away; we'll explain the [birth control](/servicios/anticonceptivos) options we offer. If you do want to conceive, a [pregnancy test](/servicios/prueba-embarazo) will tell you when it has happened. When the implant sits too deep or can't be felt, we guide the referral to locate it with imaging before removal.\n\n**Location**\n13331 Kuykendahl Rd, Suite 128, Houston, TX 77090. Open every day from 9 AM to 9 PM; ask about availability and the removal price when you arrive or on WhatsApp.",
    "icon": "FirstAid",
    "image": "/images/services/extraccion-implantes.webp",
    "category": "salud-mujer",
    "keywords": [
      "extraccion de implante subdermico houston",
      "quitar implante del brazo houston",
      "retiro de implante anticonceptivo houston",
      "remover implante houston"
    ],
    "keywordsEn": [
      "subdermal implant removal houston",
      "arm implant removal houston",
      "contraceptive implant removal houston",
      "birth control implant removal houston"
    ],
    "features": [
      "Procedimiento corto en la clínica",
      "Anestesia local",
      "Corte de pocos milímetros",
      "Indicaciones de cuidado por escrito"
    ],
    "featuresEn": [
      "Short in-clinic procedure",
      "Local anesthesia",
      "Incision of just a few millimeters",
      "Written after-care instructions"
    ],
    "highlighted": false,
    "order": 9
  },
  {
    "id": "salud-hombre",
    "slug": "salud-hombre",
    "title": "Salud del Hombre: Examen de Próstata (PSA) en Houston",
    "titleEn": "Men's Health: Prostate Exam (PSA) in Houston",
    "shortTitle": "Salud del Hombre",
    "description": "Examen de próstata con PSA en sangre, perfil hormonal y chequeo general para hombres en el norte de Houston. En español, sin cita y sin seguro.",
    "descriptionEn": "Prostate exam with blood PSA, hormone panel and general checkup for men in north Houston. In Spanish, walk-ins welcome, no insurance needed.",
    "longDescription": "Muchos hombres solo van a la clínica cuando algo duele, y varios problemas que se atienden fácil al principio dan pocas molestias. En Clínica Hispana Cruz 2 hacemos chequeos pensados para el hombre, con análisis de sangre y una consulta en español donde puedes preguntar con confianza.\n\n**La próstata y el PSA**\nEl PSA es una proteína que produce la próstata y se mide con una muestra de sangre. Un valor alto no siempre significa cáncer: también sube con el crecimiento benigno de la próstata o con una infección. Por eso hacerse la prueba es una decisión informada; las guías de prevención de Estados Unidos (USPSTF) proponen conversarla entre los 55 y los 69 años, y otras sugieren empezar antes cuando hay antecedentes en la familia.\n\n**Síntomas que conviene revisar**\n- Orinar con poca fuerza o quedarte con ganas después de ir\n- Despertar dos o más veces cada noche para ir al baño\n- Ardor o sangre en la orina\n- Cansancio, menos energía o menos deseo sexual\n- Cambios de ánimo o pérdida de masa muscular\n\n**Chequeo hormonal**\nLa testosterona baja puede causar cansancio y menos deseo, pero esos mismos síntomas aparecen con diabetes, tiroides lenta, falta de sueño o depresión. Por eso la medimos en una muestra de la mañana, cuando el nivel es más estable, y la interpretamos junto con tu [glucosa y colesterol](/servicios/condiciones-cronicas) y tu [tiroides](/servicios/tiroides).\n\n**Qué pasa con tu resultado**\nEl equipo médico te explica cada número. Si algo sale fuera de rango, se repite el análisis, se indica un [ultrasonido](/servicios/ultrasonido) de próstata o se orienta la referencia al urólogo si un resultado lo requiere. Para molestias íntimas o una pareja nueva también tenemos [pruebas de ETS](/servicios/enfermedades-transmision-sexual).\n\n**Paquetes y horario**\nEn la página de [promociones](/promociones) están los paquetes vigentes para el hombre. Abrimos todos los días de 9 AM a 9 PM en 13331 Kuykendahl Rd, Suite 128, Houston, sin cita y sin seguro médico.",
    "longDescriptionEn": "Many men only go to the clinic when something hurts, and several problems that are easy to treat early cause few symptoms. At Clínica Hispana Cruz 2 we run checkups designed for men, with blood work and a visit in Spanish where you can ask anything with confidence.\n\n**The prostate and PSA**\nPSA is a protein made by the prostate and measured with a blood sample. A high value doesn't always mean cancer: it also rises with benign prostate enlargement or an infection. That's why testing is an informed decision; U.S. prevention guidelines (USPSTF) suggest discussing it between ages 55 and 69, and other guidelines suggest starting earlier when it runs in the family.\n\n**Symptoms worth checking**\n- A weak flow, or still feeling the urge right after you go\n- Waking up two or more times a night to use the bathroom\n- Burning or blood in the urine\n- Fatigue, low energy or lower sex drive\n- Mood changes or loss of muscle mass\n\n**Hormone checkup**\nLow testosterone can cause fatigue and lower desire, but the same symptoms show up with diabetes, a slow thyroid, poor sleep or depression. That's why we measure it in a morning sample, when the level is steadiest, and read it alongside your [glucose and cholesterol](/servicios/condiciones-cronicas) and your [thyroid](/servicios/tiroides).\n\n**What happens with your result**\nThe medical team walks you through every number. If something is out of range, the test is repeated, a prostate [ultrasound](/servicios/ultrasonido) is ordered, or we guide a referral to a urologist when a result calls for it. For intimate symptoms or a new partner, we also offer [STD testing](/servicios/enfermedades-transmision-sexual).\n\n**Packages and hours**\nCurrent men's packages are on our [promotions](/promociones) page. Open every day from 9 AM to 9 PM at 13331 Kuykendahl Rd, Suite 128, Houston, with no appointment and no insurance required.",
    "icon": "Activity",
    "image": "/images/services/salud-hombre.webp",
    "category": "medicina-general",
    "keywords": [
      "examen del hombre houston",
      "prueba psa houston",
      "examen de prostata houston",
      "chequeo hormonal del hombre houston"
    ],
    "keywordsEn": [
      "mens health houston",
      "psa test houston",
      "prostate exam houston",
      "mens hormone checkup houston"
    ],
    "features": [
      "Antígeno prostático (PSA) en sangre",
      "Perfil hormonal masculino",
      "Examen de orina y signos vitales",
      "Resultados explicados en español"
    ],
    "featuresEn": [
      "Blood prostate antigen (PSA)",
      "Male hormone panel",
      "Urine test and vital signs",
      "Results explained in Spanish"
    ],
    "highlighted": true,
    "order": 10
  },
  {
    "id": "examenes-sangre",
    "slug": "examenes-sangre",
    "title": "Análisis y Exámenes de Sangre | Laboratorio",
    "titleEn": "Blood Tests | Lab",
    "shortTitle": "Análisis de Sangre",
    "description": "Análisis de sangre en el norte de Houston: biometría, glucosa, A1C, colesterol, tiroides, hígado y riñón. Te explicamos cada valor en español.",
    "descriptionEn": "Blood work in north Houston: CBC, glucose, A1C, cholesterol, thyroid, liver and kidney panels. Every value explained in plain Spanish or English.",
    "longDescription": "Un análisis de sangre es la manera más directa de saber cómo andan por dentro tu azúcar, tu colesterol, tus riñones o tu tiroides, incluso cuando te sientes bien. En Clínica Hispana Cruz 2 sacamos la muestra en la propia clínica, ya sea para un chequeo de rutina, para vigilar una enfermedad o para cumplir un requisito.\n\n**¿Qué pruebas puedes pedir?**\n- Biometría hemática: glóbulos rojos, glóbulos blancos y plaquetas\n- Química sanguínea con glucosa, colesterol y triglicéridos\n- Hemoglobina A1C para quien vive con diabetes o tiene riesgo\n- Pruebas de función del hígado y de los riñones\n- Perfil de tiroides\n\n**¿Tengo que llegar en ayunas?**\nDepende de lo que te vayan a medir. La glucosa en ayunas y el perfil de lípidos salen más confiables si no has comido nada desde la noche anterior; agua natural sí puedes beber. La biometría o la tiroides normalmente no lo exigen. Si no sabes qué te toca, llámanos y te decimos cómo llegar preparado. Tus medicinas de siempre no las suspendas por tu cuenta.\n\n**¿Cómo es la toma de muestra?**\nBasta con una sola punción en el brazo, con material nuevo y desechable, para llenar los tubos de varias pruebas a la vez. Si te mareas con las agujas, dínoslo y te recostamos durante la toma. Luego solo hay que apretar el algodón unos minutos y no cargar cosas pesadas con ese brazo por el resto del día.\n\n**¿Quién te explica los resultados?**\nLos resultados salen rápido y el equipo médico los repasa contigo valor por valor: qué está dentro de rango, qué conviene repetir y qué cambia en tu tratamiento. Si algo sale fuera de lo normal, el siguiente paso puede ser una consulta de [control de diabetes, presión o colesterol](/servicios/condiciones-cronicas) o una revisión de [tiroides](/servicios/tiroides). El precio de cada prueba o paquete te lo decimos antes de la visita, y puedes pagar en efectivo, débito o crédito, sin seguro médico.\n\n**¿A qué hora puedo pasar a sacarme sangre?**\nLa toma se hace en 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, cerca de Champions y Willowbrook. Como abrimos desde las 9 AM todos los días, puedes venir en ayunas a primera hora y desayunar después, antes de entrar a trabajar.",
    "longDescriptionEn": "Blood work shows what's going on with your blood sugar, cholesterol, kidneys or thyroid long before you'd feel anything. At Clínica Hispana Cruz 2 we draw the sample right here, for a routine checkup, to follow a condition you already have or to meet a requirement.\n\n**Which tests can you get?**\n- CBC, which counts the red cells, white cells and platelets in your blood\n- Blood chemistry with glucose, cholesterol and triglycerides\n- Hemoglobin A1C if you have diabetes or are at risk for it\n- Liver and kidney function tests\n- Thyroid panel\n\n**Do I need to fast?**\nIt depends on what's being measured. Fasting glucose and a lipid panel are more reliable if you haven't eaten anything since the night before; plain water is fine. A CBC or thyroid panel usually doesn't call for fasting. If you're not sure what you're getting, give us a call and we'll tell you how to come in prepared. Keep taking your regular medicines unless we tell you otherwise.\n\n**What is the blood draw like?**\nOne needle stick in the arm, with new single-use supplies, is usually enough to fill the tubes for several tests at once. If needles make you lightheaded, let us know and you can lie down for the draw. Afterward, just press on the cotton for a few minutes and skip heavy lifting with that arm for the rest of the day.\n\n**Who goes over your results?**\nResults come back fast, and the medical team walks you through them one value at a time: what's in range, what's worth repeating and what it means for your treatment. If something comes back off, the next step might be a visit for [diabetes, blood pressure or cholesterol care](/servicios/condiciones-cronicas) or a [thyroid](/servicios/tiroides) evaluation. We give you the price of each test or package before your visit, and you can pay with cash, debit or credit, no insurance needed.\n\n**When can I come in for a blood draw?**\nDraws are done at 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, close to Champions and Willowbrook. Since we open at 9 AM every day, you can come in fasting first thing, then grab breakfast on your way to work.",
    "icon": "Flask",
    "image": "/images/services/examenes-sangre.webp",
    "category": "laboratorio",
    "keywords": [
      "examenes de sangre houston",
      "analisis de sangre houston",
      "laboratorio houston",
      "laboratorio cerca de mi houston"
    ],
    "keywordsEn": [
      "blood test houston",
      "blood work houston",
      "lab near me houston",
      "clinical lab houston"
    ],
    "features": [
      "Biometría hemática y química sanguínea",
      "A1C, glucosa, colesterol y triglicéridos",
      "Función de tiroides, hígado y riñón",
      "Lectura de resultados con el equipo médico"
    ],
    "featuresEn": [
      "CBC and blood chemistry",
      "A1C, glucose, cholesterol and triglycerides",
      "Thyroid, liver and kidney function",
      "Results reviewed with the medical team"
    ],
    "highlighted": true,
    "order": 11
  },
  {
    "id": "infecciones-urinarias",
    "slug": "infecciones-urinarias",
    "title": "Infección Urinaria en Houston: Examen de Orina y Tratamiento el Mismo Día",
    "titleEn": "UTI Treatment in Houston: Urine Test & Same-Day Treatment",
    "seoTitle": "Infección Urinaria en Houston: Tratamiento el Mismo Día",
    "seoTitleEn": "UTI Treatment in Houston: Urine Test & Same-Day Treatment",
    "shortTitle": "Infecciones Urinarias",
    "description": "¿Ardor al orinar? Examen de orina en la clínica y, si hay infección, sales con tu tratamiento el mismo día. Norte de Houston, sin cita y en español.",
    "descriptionEn": "Burning when you urinate? Urine test at the clinic and, if there's an infection, you leave with your treatment the same day. North Houston, walk-ins.",
    "longDescription": "¿Ardor al orinar o ganas constantes de ir al baño? En Clínica Hispana Cruz 2 te hacemos el examen de orina en la clínica y, si hay infección urinaria, sales con tu tratamiento el mismo día. Sin cita previa, en español y sin necesidad de seguro médico, en el norte de Houston.\n\n**¿Qué incluye?**\n- Examen general de orina (urianálisis) procesado en la clínica\n- Evaluación de síntomas y consulta médica\n- Diagnóstico de infección urinaria\n- Tratamiento el mismo día, con receta e indicaciones en español\n- Cultivo de orina cuando la infección se repite\n- Recomendaciones para evitar que regrese\n\n**¿Cuáles son los síntomas de una infección urinaria?**\nLos más frecuentes son ardor o dolor al orinar, ganas constantes de ir al baño aunque salga poca orina, orina turbia, oscura o con mal olor, dolor o presión en la parte baja del abdomen y, a veces, sangre en la orina. En adultos mayores puede presentarse solo como confusión o malestar general. Si tienes uno o más de estos síntomas, conviene hacerse un examen de orina el mismo día.\n\n**¿Cómo se diagnostica?**\nCon un examen general de orina que se procesa en la clínica durante tu visita, así que el equipo médico revisa el resultado contigo en la misma consulta. Si las infecciones se repiten o no mejoran con el tratamiento, se envía un cultivo de orina para identificar la bacteria y elegir el antibiótico adecuado.\n\n**¿Salgo con el tratamiento el mismo día?**\nSí. Si el examen confirma la infección, el equipo médico indica el tratamiento ese mismo día y te explica cómo tomarlo. Es importante completar todo el tratamiento aunque los síntomas desaparezcan a los dos o tres días; suspenderlo antes de tiempo favorece que la infección regrese.\n\n**¿Cuándo debo ir a urgencias en lugar de la clínica?**\nAcude a una sala de emergencias si además de los síntomas urinarios tienes fiebre alta o escalofríos, dolor fuerte en la espalda o en un costado, náuseas o vómito, o si estás embarazada y presentas síntomas. Esas señales pueden indicar que la infección llegó a los riñones y requiere atención inmediata.\n\n**¿Cuánto cuesta el examen de orina y el tratamiento sin seguro?**\nNo necesitas seguro médico. Manejamos precios de pago directo y te informamos el costo antes de atenderte; aceptamos efectivo y tarjetas. En la [página de promociones](/promociones) solemos tener paquetes desde $69 que incluyen examen de orina y consulta médica. Los precios de promoción pueden cambiar; llámanos para confirmar.\n\n**¿Cómo evito que la infección regrese?**\nToma suficiente agua durante el día, no aguantes las ganas de orinar, orina después de las relaciones sexuales, límpiate de adelante hacia atrás y evita duchas vaginales o productos irritantes. Si tienes tres o más infecciones al año, en la consulta buscamos la causa y valoramos un plan de prevención. Si además tienes flujo o comezón, revisa nuestro servicio de [ginecología](/servicios/ginecologia).\n\n**¿Dónde y cuándo?**\nEn 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, en el norte de Houston. Abrimos los 7 días de la semana de 9 AM a 9 PM, sin cita previa.",
    "longDescriptionEn": "Burning when you urinate or a constant urge to go? At Clínica Hispana Cruz 2 we run the urine test in the clinic and, if there is a urinary tract infection, you leave with your treatment the same day. No appointment, Spanish-speaking care and no health insurance needed, in north Houston.\n\n**What's included?**\n- General urinalysis processed in the clinic\n- Symptom evaluation and medical consultation\n- Diagnosis of urinary tract infection\n- Same-day treatment, with prescription and instructions in Spanish\n- Urine culture when infections keep coming back\n- Recommendations to prevent recurrence\n\n**What are the symptoms of a urinary tract infection?**\nThe most common are burning or pain when urinating, a constant urge to go even when little urine comes out, cloudy, dark or foul-smelling urine, pain or pressure in the lower abdomen and, sometimes, blood in the urine. In older adults it may show up only as confusion or general malaise. If you have one or more of these symptoms, it is worth getting a urine test the same day.\n\n**How is it diagnosed?**\nWith a general urinalysis processed in the clinic during your visit, so the medical team reviews the result with you in the same consultation. If infections keep coming back or don't improve with treatment, a urine culture is sent to identify the bacteria and choose the right antibiotic.\n\n**Do I leave with treatment the same day?**\nYes. If the test confirms the infection, the medical team prescribes treatment that same day and explains how to take it. It is important to complete the full course even if symptoms disappear after two or three days; stopping early makes the infection more likely to return.\n\n**When should I go to the ER instead of the clinic?**\nGo to an emergency room if, along with urinary symptoms, you have a high fever or chills, severe back or flank pain, nausea or vomiting, or if you are pregnant and have symptoms. Those signs may mean the infection has reached the kidneys and needs immediate care.\n\n**How much do the urine test and treatment cost without insurance?**\nYou don't need health insurance. We offer self-pay pricing and tell you the cost before your visit; we accept cash and cards. On the [promotions page](/promociones) we usually have packages from $69 that include a urine test and medical consultation. Promotional prices may change; call us to confirm.\n\n**How do I keep it from coming back?**\nDrink enough water during the day, don't hold your urine, urinate after sex, wipe from front to back and avoid douching or irritating products. If you get three or more infections a year, we look for the cause during the visit and consider a prevention plan. If you also have discharge or itching, see our [gynecology](/servicios/ginecologia) service.\n\n**Where and when?**\nAt 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, in north Houston. Open 7 days a week from 9 AM to 9 PM, walk-ins welcome.",
    "icon": "Drop",
    "image": "/images/services/infecciones-urinarias.webp",
    "category": "tratamientos",
    "keywords": [
      "examen de orina houston",
      "infeccion urinaria houston",
      "tratamiento infeccion urinaria houston",
      "doctor infeccion de orina houston"
    ],
    "keywordsEn": [
      "urinalysis houston",
      "urinary tract infection houston",
      "uti treatment houston",
      "uti doctor houston"
    ],
    "features": [
      "Examen de orina en la clínica",
      "Diagnóstico de infección urinaria",
      "Tratamiento el mismo día",
      "Atención sin cita en español"
    ],
    "featuresEn": [
      "In-clinic urinalysis",
      "Diagnosis of urinary infection",
      "Same-day treatment",
      "Walk-in care in Spanish"
    ],
    "highlighted": false,
    "order": 12
  },
  {
    "id": "examen-heces",
    "slug": "examen-heces",
    "title": "Exámenes de Heces Fecales",
    "titleEn": "Stool Tests",
    "shortTitle": "Examen de Heces",
    "description": "Examen de heces en el norte de Houston para buscar parásitos, infección o sangre oculta. Te damos el frasco y te explicamos cómo recoger la muestra.",
    "descriptionEn": "Stool testing in north Houston for parasites, gut infections or hidden blood. We give you the container and explain how to collect the sample.",
    "longDescription": "El examen de heces analiza una pequeña muestra de tus evacuaciones para buscar parásitos, bacterias, sangre que no se ve a simple vista o restos de comida mal digerida. Lo pedimos a niños y adultos con diarrea que no se quita, dolor de barriga frecuente o cambios en el hábito intestinal sin una causa clara.\n\n**¿Qué puede encontrar?**\n- Huevos y quistes de parásitos, como amibas o giardia\n- Señales de una infección intestinal por bacterias\n- Sangre oculta, cuando el equipo médico la quiere descartar\n- Grasa o alimentos que el intestino no está absorbiendo bien\n\n**¿Cómo recojo la muestra en casa?**\n- Pide en la clínica el frasco con tapa y la etiqueta con tu nombre\n- Evacúa sobre un plástico limpio o un recipiente, para que la muestra no toque el agua del inodoro ni la orina\n- Con la paletita del frasco toma una porción del tamaño de una nuez, de preferencia de las partes con moco o sangre si las hay\n- Cierra bien, anota la fecha y la hora, y tráela lo antes posible\n\n**¿Cuándo vale la pena hacerlo?**\nCuando la diarrea lleva varios días, aparece moco o sangre, varias personas de la casa tienen los mismos síntomas o volviste de un viaje con el estómago revuelto. También si bajas de peso sin buscarlo, si tienes gases e inflamación constantes o si a un niño le duele la panza seguido y come poco.\n\n**¿Qué pasa con el resultado?**\nEl resultado sale rápido y el equipo médico te lo explica en español. Si aparece un parásito o una infección, te indica el tratamiento y te dice si conviene tratar también a quienes viven contigo; los medicamentos indicados en la consulta se entregan en nuestra [farmacia](/servicios/farmacia). Si sale sangre oculta, se orienta la referencia al especialista para estudiarla.\n\n**¿Cuándo no esperar al examen?**\nSi hay mucha sangre, fiebre alta, dolor muy fuerte o un bebé o adulto mayor que casi no orina y tiene la boca seca, ve a urgencias.\n\n**¿Dónde entrego el frasco?**\nTráelo a 13331 Kuykendahl Rd Ste 128, en el norte de Houston, entre las 9 AM y las 9 PM, cualquier día. Antes de dejar la muestra te decimos el precio del análisis, y puedes pagar en efectivo o con tarjeta.",
    "longDescriptionEn": "A stool test looks at a small sample of your bowel movement to find parasites, bacteria, blood you can't see with the naked eye or food that isn't being digested well. We order it for kids and adults with diarrhea that won't go away, frequent belly pain or changes in bowel habits with no clear reason.\n\n**What can it find?**\n- Parasite eggs and cysts, such as amoeba or giardia\n- Signs of a bacterial gut infection\n- Hidden blood, when the medical team wants to rule it out\n- Fat or food your intestine isn't absorbing properly\n\n**How do I collect the sample at home?**\n- Pick up the lidded container and a label with your name at the clinic\n- Catch the stool on clean plastic wrap or in a container so it doesn't touch toilet water or urine\n- Use the little scoop to take a walnut-sized portion, ideally from any part with mucus or blood\n- Close it tightly, write down the date and time, and bring it in as soon as you can\n\n**When is it worth doing?**\nWhen diarrhea has dragged on for several days, there's mucus or blood, others at home have the same symptoms or you came back from a trip with an upset stomach. Also if you're losing weight without trying or a child keeps complaining of tummy aches and eating little.\n\n**What happens with the result?**\nResults come back fast and the medical team explains them in Spanish or English. If a parasite or infection shows up, you get a treatment plan and advice on whether the people you live with should be treated too; medicines prescribed during the visit are handed to you at our [pharmacy](/servicios/farmacia). If hidden blood is found, we guide your referral to a specialist for further testing.\n\n**When shouldn't you wait for a test?**\nIf there's a lot of blood, a high fever, severe pain, or a baby or older adult with a dry mouth who's barely peeing, go to the ER.\n\n**Where do I drop off the container?**\nBring it to 13331 Kuykendahl Rd Ste 128 in north Houston, any day from 9 AM to 9 PM. We tell you the price before you hand it in; cash and cards accepted.",
    "icon": "TestTube",
    "image": "/images/services/examen-heces.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de heces houston",
      "analisis de heces fecales houston",
      "examen de parasitos houston",
      "laboratorio heces houston"
    ],
    "keywordsEn": [
      "stool test houston",
      "stool analysis houston",
      "parasite test houston",
      "stool lab houston"
    ],
    "features": [
      "Búsqueda de parásitos como amibas o giardia",
      "Señales de infección intestinal",
      "Sangre oculta cuando se indica",
      "Frasco e instrucciones para casa"
    ],
    "featuresEn": [
      "Checks for parasites such as amoeba or giardia",
      "Signs of intestinal infection",
      "Hidden blood when indicated",
      "Collection kit and home instructions"
    ],
    "highlighted": false,
    "order": 13
  },
  {
    "id": "prueba-strep",
    "slug": "prueba-strep",
    "title": "Prueba de Estreptococo (Strep Test)",
    "titleEn": "Strep Test",
    "shortTitle": "Prueba de Strep",
    "description": "Prueba rápida de estreptococo en el norte de Houston: hisopado de garganta con resultado durante la visita y tratamiento si sale positivo.",
    "descriptionEn": "Rapid strep test in north Houston: a quick throat swab with results during your visit, and treatment before you leave if it's positive.",
    "longDescription": "La prueba rápida de estreptococo toma una muestra del fondo de la garganta con un hisopo y te dice, durante la misma visita, si el dolor lo causa la bacteria estreptococo del grupo A. La hacemos a niños y adultos con la garganta muy irritada, fiebre o dificultad para tragar.\n\n**¿Virus o bacteria?**\nMuchos dolores de garganta los causa un virus y se quitan solos; ahí el antibiótico no sirve de nada. El estreptococo es distinto: necesita antibiótico para cortar el contagio y evitar complicaciones como un absceso junto a las amígdalas o la fiebre reumática. Por eso conviene confirmarlo con la prueba en lugar de adivinar por los síntomas.\n\n**Señales que hacen pensar en estreptococo**\n- Fiebre que empieza de golpe\n- Dolor fuerte al tragar, sin tos ni escurrimiento nasal\n- Amígdalas muy rojas o con puntos blancos\n- Bolitas inflamadas y dolorosas en el cuello\n- En niños, dolor de barriga o vómito junto con la garganta\n\n**¿Cómo es la prueba?**\nAbres bien la boca, sacas la lengua y el hisopo roza las amígdalas y la parte de atrás de la garganta unos segundos. Puede provocar una arcada, pero no duele. El resultado sale mientras esperas. Si es positivo, el equipo médico te indica el antibiótico y lo recibes en nuestra [farmacia](/servicios/farmacia) antes de irte. Si es negativo, se revisa si se trata de una [infección respiratoria](/servicios/enfermedades-respiratorias) viral y cómo aliviarla.\n\n**¿Qué hacer en casa?**\n- Toma todas las dosis del antibiótico, aunque la fiebre ya se haya ido\n- Cambia el cepillo de dientes cuando empieces a mejorar\n- No compartas vasos, cubiertos ni botellas con la familia\n- Pregunta al equipo médico cuándo puede volver tu hijo a la escuela\n\n**¿Cuándo ir a urgencias?**\nSi no puedes tragar ni tu propia saliva, babeas, te cuesta respirar o casi no puedes abrir la boca, no esperes a la prueba y ve a urgencias.\n\n**¿Y si el dolor empieza en la tarde?**\nNo tienes que aguantar hasta el día siguiente: hacemos la prueba hasta las 9 PM, todos los días, en 13331 Kuykendahl Rd Ste 128, en el norte de Houston. Te decimos el precio antes de tomar la muestra.",
    "longDescriptionEn": "The rapid strep test uses a swab from the back of the throat to tell you, during the same visit, whether your sore throat is caused by group A strep bacteria. We do it for kids and adults with a badly irritated throat, fever or trouble swallowing.\n\n**Virus or bacteria?**\nA lot of sore throats come from a virus and clear up on their own; antibiotics do nothing for those. Strep is different: it needs an antibiotic to stop the spread and to prevent complications like an abscess next to the tonsils or rheumatic fever. That's why it pays to confirm it with a test instead of guessing from symptoms.\n\n**Signs that point to strep**\n- Fever that comes on suddenly\n- Sharp pain when swallowing, without a cough or runny nose\n- Very red tonsils or tonsils with white spots\n- Swollen, tender lumps in the neck\n- In kids, stomach pain or vomiting along with the sore throat\n\n**What is the test like?**\nYou open wide, stick out your tongue and the swab brushes the tonsils and the back of the throat for a few seconds. It may make you gag, but it doesn't hurt. The result comes back while you wait. If it's positive, the medical team prescribes an antibiotic and you pick it up at our [pharmacy](/servicios/farmacia) before you go. If it's negative, we look at whether it's a viral [respiratory infection](/servicios/enfermedades-respiratorias) and how to ease it.\n\n**What should you do at home?**\n- Take every dose of the antibiotic, even once the fever is gone\n- Replace your toothbrush once you start to improve\n- Don't share cups, utensils or bottles with family members\n- Ask the medical team when your child can go back to school\n\n**When should you go to the ER?**\nIf you can't swallow even your own saliva, you're drooling, it's hard to breathe or you can barely open your mouth, skip the test and go to the emergency room.\n\n**What if the pain starts in the afternoon?**\nYou don't have to tough it out until tomorrow: we run the test until 9 PM every day at 13331 Kuykendahl Rd Ste 128 in north Houston. We tell you the price before taking the swab.",
    "icon": "TestTube",
    "image": "/images/services/prueba-strep.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba de estreptococo houston",
      "strep test houston",
      "prueba de garganta houston",
      "dolor de garganta doctor houston"
    ],
    "keywordsEn": [
      "strep test houston",
      "rapid strep test houston",
      "sore throat test houston",
      "strep throat doctor houston"
    ],
    "features": [
      "Hisopado de garganta rápido",
      "Resultado durante la visita",
      "Antibiótico indicado si es positivo",
      "Niños y adultos, sin cita"
    ],
    "featuresEn": [
      "Quick throat swab",
      "Result during your visit",
      "Antibiotic prescribed if positive",
      "Kids and adults, walk-ins welcome"
    ],
    "highlighted": false,
    "order": 14
  },
  {
    "id": "prueba-tuberculosis",
    "slug": "prueba-tuberculosis",
    "title": "Examen de Tuberculosis (TB)",
    "titleEn": "Tuberculosis (TB) Test",
    "shortTitle": "Tuberculosis",
    "description": "Prueba de tuberculosis PPD en el norte de Houston para trabajo, escuela o voluntariado. Aplicación, lectura y documento del resultado.",
    "descriptionEn": "PPD tuberculosis skin test in north Houston for work, school or volunteering. We place it, read it and give you a written result.",
    "longDescription": "La prueba cutánea de tuberculosis, también llamada PPD o prueba de Mantoux, muestra si tu cuerpo ha estado en contacto con la bacteria que causa la tuberculosis. La piden empleos de salud, guarderías, escuelas y voluntariados; en Clínica Hispana Cruz 2 te la aplicamos, la leemos y te damos el resultado por escrito.\n\n**¿Cómo funciona en dos visitas?**\n- Primera visita: se inyecta una gotita de líquido bajo la piel del antebrazo y queda una pequeña ampolla que desaparece sola\n- Entre una visita y otra: haces vida normal, pero sin rascar, tapar con curita ni poner crema en la zona\n- Segunda visita, entre 48 y 72 horas después: el equipo médico mide si la piel se endureció y anota el resultado en milímetros\n- Al terminar te entregamos el documento con la lectura para tu trámite\n\n**¿Por qué no puedo faltar a la lectura?**\nLa prueba solo vale si la lee personal de salud dentro de esa ventana. Si llegas antes o después, la reacción no se puede interpretar y hay que aplicarla de nuevo. Por eso, al ponértela revisamos contigo cuándo te toca volver; como abrimos los siete días, aunque la lectura caiga en domingo no tienes que pedir permiso en el trabajo.\n\n**¿Qué significa un resultado positivo?**\nNo quiere decir que estés enfermo ni que contagies. Indica que en algún momento hubo contacto con la bacteria, y a veces aparece en personas que recibieron la vacuna BCG de niños. El equipo médico te explica los pasos siguientes, que suelen incluir una radiografía de tórax, y te orienta sobre dónde hacerla.\n\n**¿Qué debes avisar antes de la aplicación?**\n- Si alguna vez tuviste un PPD positivo\n- Si recibiste la vacuna BCG en tu país\n- Si tomas medicinas o tienes una enfermedad que baja las defensas\n\n**¿Es para otro trámite?**\nSi la escuela también te pide un [examen físico escolar](/servicios/examen-fisico-escolar), puedes resolver las dos cosas en la misma visita. Si la necesitas para tu residencia, el [examen médico de inmigración](/servicios/examenes-inmigracion) tiene sus propios requisitos; pregúntanos antes.\n\n**¿Dónde te la ponemos?**\nEn 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, con estacionamiento gratuito. Puedes venir a la aplicación y a la lectura sin cita, entre las 9 AM y las 9 PM, y el precio te lo decimos antes de empezar.",
    "longDescriptionEn": "The tuberculosis skin test, also called a PPD or Mantoux test, shows whether your body has been exposed to the bacteria that cause TB. Healthcare jobs, daycares, schools and volunteer programs often require it; at Clínica Hispana Cruz 2 we place it, read it and put the result in writing.\n\n**How does it work over two visits?**\n- First visit: a tiny drop of fluid goes under the skin of your forearm, leaving a bump that fades on its own\n- Between visits: live normally, just don't scratch, bandage or put lotion on the spot\n- Second visit, 48 to 72 hours later: the medical team checks whether the skin has hardened and records the result in millimeters\n- At the end you get a document with the reading for your paperwork\n\n**Why can't I miss the reading?**\nThe test only counts if a health professional reads it within that window. Too early or too late and the reaction can't be interpreted, so it has to be placed again. When we place it, we confirm when you need to come back, and since we're open seven days a week, a Sunday reading won't cost you time off work.\n\n**What does a positive result mean?**\nIt doesn't mean you're sick or contagious. It means that at some point you were exposed to the bacteria, and it sometimes shows up in people who got the BCG vaccine as children. The medical team explains the next steps, usually a chest X-ray, and where to get one.\n\n**What should you tell us before the test?**\n- If you've ever had a positive PPD\n- If you received the BCG vaccine in your home country\n- If you take medicines or have a condition that weakens your immune system\n\n**Is it for other paperwork?**\nIf your school also asks for a [school physical](/servicios/examen-fisico-escolar), you can take care of both in the same visit. If you need it for a green card, the [immigration medical exam](/servicios/examenes-inmigracion) has its own requirements, so ask us first.\n\n**Where do we place it?**\nAt 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, with free parking. You can walk in for both the placement and the reading between 9 AM and 9 PM, and we tell you the price before we start.",
    "icon": "ShieldCheck",
    "image": "/images/services/prueba-tuberculosis.webp",
    "category": "laboratorio",
    "keywords": [
      "examen de tuberculosis houston",
      "prueba ppd houston",
      "prueba de tb houston",
      "tb test español houston"
    ],
    "keywordsEn": [
      "tuberculosis test houston",
      "ppd test houston",
      "tb test houston",
      "tb skin test houston"
    ],
    "features": [
      "Prueba cutánea PPD (Mantoux)",
      "Visita de lectura con medición",
      "Documento del resultado para tu trámite",
      "Lectura también en fin de semana"
    ],
    "featuresEn": [
      "PPD (Mantoux) skin test",
      "Reading visit with measurement",
      "Written result for your paperwork",
      "Readings on weekends too"
    ],
    "highlighted": false,
    "order": 15
  },
  {
    "id": "enfermedades-transmision-sexual",
    "slug": "enfermedades-transmision-sexual",
    "title": "Pruebas de Enfermedades de Transmisión Sexual (STD)",
    "titleEn": "Sexually Transmitted Disease (STD) Testing",
    "shortTitle": "STD",
    "description": "Pruebas de ETS confidenciales en el norte de Houston, con o sin síntomas. Consulta privada en español y tratamiento si algún resultado sale positivo.",
    "descriptionEn": "Confidential STD testing in north Houston, with or without symptoms. A private visit in Spanish or English, and treatment if a result is positive.",
    "longDescription": "Las pruebas de enfermedades de transmisión sexual buscan infecciones que muchas veces no dan molestias al principio. En Clínica Hispana Cruz 2 las hacemos a hombres y mujeres que tuvieron una relación sin protección, que notan algo raro o que simplemente quieren empezar con una nueva pareja sabiendo cómo están.\n\n**¿Cómo es la consulta?**\n- Una conversación privada sobre tus síntomas y tu exposición\n- Revisión de la zona cuando hay llagas, secreción o molestias\n- Muestras de orina, sangre o hisopado, según lo que se busque\n- Tratamiento indicado si algún resultado sale positivo\n\n**Señales para no dejarlo pasar**\n- Ardor al orinar o una secreción que no es normal para ti\n- Llagas, verrugas o ampollas en los genitales o en la boca\n- Comezón o mal olor en la zona íntima\n- Dolor en la parte baja del abdomen o durante las relaciones\n\n**¿Y si no tengo síntomas?**\nTambién vale la pena hacerte la prueba. Varias de estas infecciones pasan meses calladas y aun así se contagian o afectan la fertilidad. Si el contacto de riesgo fue muy reciente, algunas pruebas todavía no lo detectan; el equipo médico te dice cuándo conviene repetirlas para tener un resultado confiable.\n\n**¿Quién se entera de mis resultados?**\nSolo tú. Hablas a solas con el equipo médico, en español o en inglés, y en recepción basta con decir que vienes a consulta. Si algo sale positivo, te explicamos cómo avisar a tu pareja para que también se trate y no vuelvas a infectarte. Las mujeres pueden aprovechar para su revisión de [ginecología](/servicios/ginecologia), y los hombres para una consulta de [salud del hombre](/servicios/salud-hombre).\n\n**¿Qué pasa después?**\nLos resultados salen rápido y te los explicamos con calma, sin regaños. Si hace falta tratamiento, te lo indicamos en la consulta y te decimos qué evitar mientras dura, incluidas las relaciones sexuales, para no pasarle la infección a nadie.\n\n**¿Cuándo puedo venir?**\nCualquier día de 9 AM a 9 PM, en 13331 Kuykendahl Rd Ste 128, al norte de Houston. Pagas en efectivo o con tarjeta, sin pasar por ningún seguro, y conoces el precio de las pruebas antes de hacértelas.",
    "longDescriptionEn": "STD tests look for infections that often cause no symptoms at first. At Clínica Hispana Cruz 2 we test men and women who had unprotected sex, who've noticed something unusual or who simply want to start a new relationship knowing where they stand.\n\n**What happens during the visit?**\n- A private conversation about your symptoms and possible exposure\n- An exam of the area if there are sores, discharge or discomfort\n- Urine, blood or swab samples, depending on what we're testing for\n- Treatment if any result comes back positive\n\n**Signs you shouldn't ignore**\n- Burning when you pee or discharge that isn't normal for you\n- Sores, warts or blisters on the genitals or mouth\n- Itching or a bad odor down there\n- Pain in the lower belly or during sex\n\n**What if I don't have symptoms?**\nTesting is still worth it. Several of these infections stay silent for months and can still spread or affect fertility. If the exposure was very recent, some tests may not pick it up yet; the medical team tells you when to repeat them so the result can be trusted.\n\n**Who finds out about my results?**\nOnly you. You talk one-on-one with the medical team, in Spanish or English, and at the front desk all you need to say is that you're here for a visit. If something comes back positive, we explain how to tell your partner so they can get treated too and you don't get reinfected. Women can combine the visit with a [gynecology](/servicios/ginecologia) checkup, and men with a [men's health](/servicios/salud-hombre) visit.\n\n**What happens next?**\nResults come back fast and we go over them calmly, with no lectures. If you need treatment, we prescribe it during the visit and tell you what to avoid while you're on it, sex included, so you don't pass the infection on.\n\n**When can I come in?**\nAny day from 9 AM to 9 PM at 13331 Kuykendahl Rd Ste 128 in north Houston. You pay with cash or card, without going through insurance, and you know the price of the tests before you take them.",
    "icon": "ShieldCheck",
    "image": "/images/services/enfermedades-transmision-sexual.webp",
    "category": "laboratorio",
    "keywords": [
      "prueba std houston",
      "examen de transmision sexual houston",
      "prueba ets confidencial houston",
      "clinica std español houston"
    ],
    "keywordsEn": [
      "std testing houston",
      "std test near me houston",
      "confidential std clinic houston",
      "sti testing houston"
    ],
    "features": [
      "Consulta privada y sin juicios",
      "Muestras de orina, sangre o hisopado",
      "Tratamiento si sale positivo",
      "Orientación para avisar a tu pareja"
    ],
    "featuresEn": [
      "Private, judgment-free visit",
      "Urine, blood or swab samples",
      "Treatment if a result is positive",
      "Guidance on telling your partner"
    ],
    "highlighted": false,
    "order": 16
  },
  {
    "id": "examen-alcohol-drogas",
    "slug": "examen-alcohol-drogas",
    "title": "Exámenes de Alcohol y Drogas",
    "titleEn": "Alcohol & Drug Testing",
    "shortTitle": "Alcohol y Drogas",
    "description": "Examen de alcohol y drogas en el norte de Houston para empleo o trámites personales. Te explicamos el proceso y te damos el documento del resultado.",
    "descriptionEn": "Alcohol and drug testing in north Houston for jobs or personal needs. We explain the process and give you a written copy of the result.",
    "longDescription": "El examen de alcohol y drogas detecta si hay alcohol o ciertas sustancias en tu organismo a partir de una muestra que se toma en la clínica. Lo piden empresas al contratar, empleadores que revisan a su personal y algunos trámites personales; en Clínica Hispana Cruz 2 lo hacemos y te damos el documento del resultado.\n\n**¿Qué traer el día del examen?**\n- Una identificación oficial con foto\n- El formulario o la carta de tu empleador, si te dieron uno\n- La lista de medicamentos que tomas, con receta o sin ella\n- Calma con el agua: tomar litros justo antes puede diluir la muestra y obligar a repetirla\n\n**¿Qué sustancias se buscan?**\nDepende de quien pide el examen. Los paneles que suelen usar las empresas incluyen marihuana, cocaína, anfetaminas, opiáceos y otras drogas comunes, y la prueba de alcohol se agrega cuando el empleador la exige. Si tu empresa quiere un panel concreto, trae la indicación por escrito y te decimos si lo podemos hacer.\n\n**¿Y si tomo medicamentos?**\nAlgunas medicinas recetadas, como ciertos analgésicos fuertes o pastillas para la ansiedad o para dormir, pueden salir en el panel. No es motivo para esconderlas: decirlas antes de la prueba permite interpretar bien el resultado. Algunos remedios para el resfriado o las semillas de amapola también pueden confundir, así que menciónalos.\n\n**¿Quién ve el resultado?**\nTú y la persona o empresa que pidió el examen; nadie más. Te lo explicamos en español y te entregamos el documento para que lo presentes donde lo necesites. Si tu trabajo también te pide el [examen físico DOT](/servicios/examen-dot), pregúntanos si puedes resolver los dos en la misma visita.\n\n**¿Me sirve por mi cuenta?**\nSí. Hay quien lo pide para un trámite familiar, por tranquilidad o antes de solicitar un empleo. En ese caso te explicamos qué cubre el panel y el resultado es solo para ti.\n\n**¿Dónde y a qué hora?**\nLa clínica está en 13331 Kuykendahl Rd Ste 128, entre Champions y Greenspoint. Si tu nuevo trabajo te dio poco margen para presentar el examen, llega sin cita cualquier día entre las 9 AM y las 9 PM; el precio te lo decimos antes de tomar la muestra y puedes revisar las [promociones](/promociones).",
    "longDescriptionEn": "An alcohol and drug test checks whether alcohol or certain substances are in your system, using a sample collected here at the clinic. Companies ask for it when hiring, employers use it to screen staff and some people need it for personal matters; at Clínica Hispana Cruz 2 we run the test and give you a written result.\n\n**What should you bring?**\n- A government-issued photo ID\n- Your employer's form or letter, if they gave you one\n- A list of the medicines you take, prescription or over the counter\n- Go easy on water: chugging a lot right before can dilute the sample and force a retest\n\n**Which substances are checked?**\nThat depends on who's asking for the test. Panels commonly used by employers cover marijuana, cocaine, amphetamines, opiates and other common drugs, and the alcohol test is added when the employer requires it. If your company wants a specific panel, bring the request in writing and we'll tell you whether we can run it.\n\n**What if I take medication?**\nSome prescription medicines, such as certain strong painkillers or pills for anxiety or sleep, can show up on a panel. That's no reason to hide them: listing them before the test lets the result be read correctly. Some cold remedies and poppy seeds can also cause confusion, so mention those too.\n\n**Who sees the result?**\nYou and the person or company that requested the test; nobody else. We explain it in Spanish or English and hand you the document so you can present it wherever you need it. If your job also requires a [DOT physical](/servicios/examen-dot), ask whether you can take care of both in the same visit.\n\n**Can I get tested on my own?**\nYes. Some people want it for a family matter, for peace of mind or before applying for a job. In that case we explain what the panel covers and the result is yours alone.\n\n**Where and when?**\nThe clinic is at 13331 Kuykendahl Rd Ste 128, between Champions and Greenspoint. If your new job gave you a tight window to get tested, walk in any day between 9 AM and 9 PM; we tell you the price before collecting the sample, and you can check our current [promotions](/promociones).",
    "icon": "Flask",
    "image": "/images/services/examen-alcohol-drogas.webp",
    "category": "examenes",
    "keywords": [
      "examen de drogas houston",
      "prueba de alcohol y drogas houston",
      "drug test houston español",
      "examen de drogas para trabajo houston"
    ],
    "keywordsEn": [
      "drug test houston",
      "alcohol and drug test houston",
      "employment drug test houston",
      "drug screening houston"
    ],
    "features": [
      "Panel de drogas según lo que pide tu empresa",
      "Prueba de alcohol",
      "Documento del resultado",
      "Revisión de medicamentos antes de la prueba"
    ],
    "featuresEn": [
      "Drug panel based on your employer's request",
      "Alcohol test",
      "Written copy of the result",
      "Medication review before testing"
    ],
    "highlighted": false,
    "order": 17
  },
  {
    "id": "electrocardiograma",
    "slug": "electrocardiograma",
    "title": "Electrocardiograma (EKG)",
    "titleEn": "Electrocardiogram (EKG)",
    "shortTitle": "Electrocardiograma",
    "description": "Electrocardiograma (EKG) en el norte de Houston: estudio sin dolor del ritmo del corazón para palpitaciones, presión alta o un examen de trabajo.",
    "descriptionEn": "EKG in north Houston: a painless check of your heart rhythm for palpitations, high blood pressure, or a pre-op or work exam.",
    "longDescription": "Un electrocardiograma (EKG o ECG) traza en papel los impulsos eléctricos que hacen latir tu corazón, captados con parches pegados al pecho y a las extremidades. Sirve si sientes palpitaciones o mareos, si tienes presión alta o si un trabajo, un deporte o una cirugía programada te piden un estudio del corazón.\n\n**¿Cómo es el estudio?**\n- Te recuestas boca arriba y descubres el pecho, las muñecas y los tobillos\n- Se pegan a la piel unos electrodos que se sienten fríos\n- Durante unos minutos te quedas quieto y respiras con normalidad\n- Se retiran los parches y sigues tu día sin restricciones\n\n**¿Qué puede mostrar?**\n- Si el ritmo es regular, rápido o lento\n- Latidos de más o pausas entre latidos\n- Señales de que el corazón trabaja forzado, por ejemplo tras años de presión alta\n- Cambios que sugieren que al músculo del corazón le falta oxígeno\n\n**¿Cómo me preparo?**\nPonte ropa de dos piezas para descubrir solo el pecho, no uses cremas ni aceites en la piel ese día y avisa si tienes marcapasos. A veces hay que rasurar un poco de vello para que el parche pegue bien. El café y el cigarro justo antes pueden acelerar el ritmo, así que mejor déjalos para después.\n\n**¿Quién revisa el trazo?**\nEl equipo médico de la clínica revisa el trazo y te explica en español lo que encontró. Si algo necesita una evaluación más profunda, se orienta la referencia al especialista. Si vives con presión alta o diabetes, el EKG puede formar parte de tu [control de condiciones crónicas](/servicios/condiciones-cronicas).\n\n**Dolor de pecho: no esperes**\nUn peso o apretón en el pecho que baja al brazo izquierdo o sube a la quijada, junto con sudor frío o ahogo, es motivo para llamar al 911 de inmediato. Eso no se resuelve con un estudio en la clínica.\n\n**¿Dónde se hace?**\nEn 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, con entrada accesible y estacionamiento gratuito justo enfrente de la puerta. Puedes pasar sin cita de 9 AM a 9 PM; te decimos el precio antes de empezar y puedes consultar las [promociones](/promociones).",
    "longDescriptionEn": "An electrocardiogram, also called an EKG or ECG, records your heart's electrical activity using adhesive pads on the chest, arms and legs. It's useful if you feel palpitations or dizziness, if you have high blood pressure, or if a job, a sport or a scheduled surgery calls for a heart test.\n\n**What is the test like?**\n- You lie on your back with your chest, wrists and ankles uncovered\n- A few cool-feeling electrodes are stuck to your skin\n- You hold still for a few minutes while the machine records\n- The pads come off and you go on with your day, no restrictions\n\n**What can it show?**\n- Whether your rhythm is regular, fast or slow\n- Extra beats or pauses between beats\n- Signs that the heart is working too hard, for example after years of high blood pressure\n- Changes that suggest the heart muscle isn't getting enough oxygen\n\n**How should I prepare?**\nWear a two-piece outfit so you only need to uncover your chest, skip lotions and oils on your skin that day and let us know if you have a pacemaker. Sometimes a little chest hair has to be shaved so the pads stick. Coffee and cigarettes right before can speed up your heart rate, so save them for afterward.\n\n**Who reads the tracing?**\nThe clinic's medical team reviews the tracing and explains what it shows. If something needs a closer look, we guide your referral to a specialist. If you live with high blood pressure or diabetes, the EKG can become part of your [chronic condition care](/servicios/condiciones-cronicas).\n\n**Chest pain: don't wait**\nIf you feel pressure-like chest pain that spreads to your arm or jaw, with a cold sweat or shortness of breath, call 911. That's not something a clinic test can handle.\n\n**Where is it done?**\nAt 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, with an accessible entrance and free parking right outside. Walk in between 9 AM and 9 PM; we tell you the price before we start, and you can check our [promotions](/promociones).",
    "icon": "Heartbeat",
    "image": "/images/services/electrocardiograma.webp",
    "category": "laboratorio",
    "keywords": [
      "electrocardiograma houston",
      "ekg houston español",
      "examen del corazon houston",
      "ecg houston"
    ],
    "keywordsEn": [
      "electrocardiogram houston",
      "ekg houston",
      "heart test houston",
      "ecg houston spanish"
    ],
    "features": [
      "Registro del ritmo cardiaco sin dolor",
      "Revisión del trazo por el equipo médico",
      "Para exámenes de trabajo, deporte o cirugía",
      "Referencia orientada si hace falta"
    ],
    "featuresEn": [
      "Painless heart rhythm recording",
      "Tracing reviewed by the medical team",
      "For work, sports or pre-op exams",
      "Guided referral if needed"
    ],
    "highlighted": false,
    "order": 18
  },
  {
    "id": "ultrasonido",
    "slug": "ultrasonido",
    "title": "Ultrasonido y Ecografía",
    "titleEn": "Ultrasound & Sonography",
    "shortTitle": "Ultrasonido",
    "description": "Ultrasonido en el norte de Houston: abdominal, pélvico, de embarazo, de tiroides y de tejidos blandos. Sin radiación y explicado en español.",
    "descriptionEn": "Ultrasound in north Houston: abdominal, pelvic, pregnancy, thyroid and soft-tissue scans. No radiation, and explained in Spanish or English.",
    "longDescription": "El ultrasonido o ecografía usa ondas de sonido para formar imágenes de los órganos en una pantalla, sin agujas y sin radiación. En Clínica Hispana Cruz 2 lo usamos para revisar el abdomen, la pelvis, el embarazo, la tiroides y bultos bajo la piel, y te explicamos en español lo que se ve.\n\n**¿Qué estudios hacemos?**\n- Abdominal: hígado, vesícula, riñones y otros órganos de la barriga\n- Pélvico: útero, ovarios y vejiga\n- De embarazo, para seguir el crecimiento del bebé\n- De tiroides, para revisar nódulos en el cuello\n- De tejidos blandos, para bultos o hinchazón bajo la piel\n\n**¿Cómo me preparo?**\n- Abdominal: llega sin haber comido en las horas previas, para que la vesícula se vea bien\n- Pélvico: toma varios vasos de agua antes y no orines hasta el estudio\n- Embarazo, tiroides y tejidos blandos: por lo general no piden preparación\n- Blusa y pantalón mejor que vestido: así solo descubres la parte que se estudia\n\n**¿Qué sientes durante el estudio?**\nTe recuestas en la camilla, se pone un gel tibio sobre la piel y un transductor se desliza para captar las imágenes. Puedes notar algo de presión, sobre todo con la vejiga llena, pero no duele. Al terminar te limpias el gel y vuelves a tus actividades.\n\n**¿Para qué se pide?**\nAyuda a investigar un dolor en el lado derecho de la barriga por posibles piedras en la vesícula, un sangrado o dolor pélvico, molestias al orinar que se repiten o un bulto que apareció de pronto. En el embarazo permite ver cómo va creciendo el bebé. El equipo médico relaciona las imágenes con tu consulta de [ginecología](/servicios/ginecologia) o con tu [prueba de embarazo](/servicios/prueba-embarazo) para decidir el siguiente paso, y si hace falta otro estudio te orienta sobre dónde hacerlo.\n\n**Llama antes de venir**\nComo cada estudio tiene su propia preparación, conviene que nos llames para reservar tu horario y recibir las indicaciones. Estamos en 13331 Kuykendahl Rd Ste 128, en el norte de Houston, de 9 AM a 9 PM todos los días, y el precio del ultrasonido te lo decimos antes de la visita.",
    "longDescriptionEn": "Ultrasound, also called a sonogram, uses sound waves to build images of your organs on a screen, with no needles and no radiation. At Clínica Hispana Cruz 2 we use it to look at the abdomen, pelvis, pregnancy, thyroid and lumps under the skin, and we explain what we see in Spanish or English.\n\n**Which scans do we do?**\n- Abdominal: liver, gallbladder, kidneys and other organs in the belly\n- Pelvic: uterus, ovaries and bladder\n- Pregnancy, to follow the baby's growth\n- Thyroid, to check for nodules in the neck\n- Soft tissue, for lumps or swelling under the skin\n\n**How do I prepare?**\n- Abdominal: don't eat for a few hours beforehand so the gallbladder shows up clearly\n- Pelvic: drink several glasses of water and hold off on peeing until the scan\n- Pregnancy, thyroid and soft tissue: usually no prep needed\n- A top with pants or a skirt rather than a dress, so you only uncover the part being scanned\n\n**What does it feel like?**\nYou lie on the exam table, a warm gel goes on your skin and a handheld probe glides over it to capture the images. The probe presses a little, which you'll notice more with a full bladder, but the scan is painless. Afterward you wipe off the gel and get back to your day.\n\n**Why is it ordered?**\nIt helps look into pain on the right side of the belly that could be gallstones, pelvic bleeding or pain, urinary problems that keep coming back, or a lump that showed up out of nowhere. In pregnancy it shows how the baby is growing. The medical team connects the images with your [gynecology](/servicios/ginecologia) visit or your [pregnancy test](/servicios/prueba-embarazo) to decide the next step, and if another scan is needed, they point you to where to get it.\n\n**Call before you come**\nSince each scan has its own prep, it's best to call to book a time and get your instructions. We're at 13331 Kuykendahl Rd Ste 128 in north Houston, open 9 AM to 9 PM every day, and we tell you the price of the ultrasound before your visit.",
    "icon": "Monitor",
    "image": "/images/services/ultrasonido.webp",
    "category": "laboratorio",
    "keywords": [
      "ultrasonido houston",
      "ecografia houston español",
      "ultrasonido de embarazo houston",
      "sonograma houston"
    ],
    "keywordsEn": [
      "ultrasound houston",
      "sonogram houston",
      "pregnancy ultrasound houston",
      "abdominal ultrasound houston"
    ],
    "features": [
      "Abdominal y pélvico",
      "Ultrasonido de embarazo",
      "Tiroides y tejidos blandos",
      "Indicaciones de preparación por estudio"
    ],
    "featuresEn": [
      "Abdominal and pelvic",
      "Pregnancy ultrasound",
      "Thyroid and soft tissue",
      "Prep instructions for each scan"
    ],
    "highlighted": false,
    "order": 19
  },
  {
    "id": "examen-dot",
    "slug": "examen-dot",
    "title": "Examen Físico DOT - Licencia CDL",
    "titleEn": "DOT Physical Exam - CDL License",
    "shortTitle": "Examen DOT",
    "description": "Examen físico DOT en el norte de Houston para sacar o renovar tu CDL: vista, oído, presión y orina. Certificado en la misma visita si apruebas.",
    "descriptionEn": "DOT physical in north Houston for a new or renewed CDL: vision, hearing, blood pressure and urine. Certificate during the visit if you pass.",
    "longDescription": "El examen físico DOT es la revisión médica que la ley federal exige a quienes manejan vehículos comerciales, como tráileres, camiones de carga o autobuses. En Clínica Hispana Cruz 2 lo hacemos en español a conductores que sacan su CDL por primera vez o la renuevan, y si apruebas te llevas el certificado en la misma visita.\n\n**¿Qué revisa el examen?**\n- La vista, con y sin lentes, incluida la visión hacia los lados\n- El oído, para confirmar que escuchas una voz baja a cierta distancia\n- La presión arterial y el pulso\n- Una muestra de orina para ver azúcar, proteína y sangre\n- Tu historial: enfermedades, cirugías y medicamentos\n- Una revisión general de pulmones, corazón, abdomen, columna y reflejos\n\n**¿Qué traigo?**\n- Tu licencia de manejo\n- Los anteojos, lentes de contacto o aparato auditivo que uses a diario\n- La lista de medicamentos con nombre y dosis\n- Notas o resultados recientes de tu médico si tienes diabetes, apnea del sueño o algún problema del corazón\n\n**¿Y si la presión me sale alta?**\nNo siempre significa que repruebas. Según la cifra, el certificado puede salir con una vigencia más corta para que vuelvas a revisarte, o el equipo médico puede pedirte que controles la presión y regreses. Es común que suba por los nervios o tras horas de manejo; descansar unos minutos antes de la toma ayuda. Si necesitas tratamiento, puedes empezar tu [control de presión](/servicios/condiciones-cronicas) aquí mismo.\n\n**¿Cuánto dura el certificado?**\nHasta dos años si todo está en orden, y menos tiempo cuando hay una condición que necesita seguimiento, como presión alta o diabetes. La fecha de vencimiento viene impresa en el certificado: anótala para no quedarte sin poder manejar.\n\n**¿Mi empresa pide algo más?**\nSi además te solicitan un [examen de alcohol y drogas](/servicios/examen-alcohol-drogas), pregúntanos al llegar para ver si puedes hacer los dos en la misma visita.\n\n**Un horario pensado para la ruta**\nEntre una carga y otra, pasa por 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, cualquier día de 9 AM a 9 PM, fines de semana incluidos. Pagas directo, en efectivo o con tarjeta, y te decimos el precio del examen antes de empezar.",
    "longDescriptionEn": "The DOT physical is the medical exam federal law requires for anyone who drives commercial vehicles such as semis, box trucks or buses. At Clínica Hispana Cruz 2 we do it in Spanish or English for drivers getting their CDL for the first time or renewing it, and if you pass, you leave with your certificate during the same visit.\n\n**What does the exam check?**\n- Vision, with and without glasses, including side vision\n- Hearing, to make sure you can pick up a soft voice at a set distance\n- Blood pressure and pulse\n- A urine sample to look for sugar, protein and blood\n- Your history: illnesses, surgeries and medications\n- A general check of lungs, heart, abdomen, spine and reflexes\n\n**What should I bring?**\n- Your driver's license\n- Your glasses, contacts or hearing aids if you use them\n- A list of your medicines with names and doses\n- Recent notes or lab results from whoever treats your diabetes, sleep apnea or heart condition\n\n**What if my blood pressure is high?**\nIt doesn't always mean you fail. Depending on the reading, the certificate may be issued for a shorter period so you come back for a recheck, or the medical team may ask you to get your pressure under control and return. Nerves and long hours behind the wheel often push it up; resting a few minutes before the reading helps. If you need treatment, you can start [blood pressure care](/servicios/condiciones-cronicas) right here.\n\n**How long is the certificate good for?**\nUp to two years if everything checks out, and less when you have a condition that needs follow-up, such as high blood pressure or diabetes. The expiration date is printed on the certificate, so mark it down to avoid being sidelined.\n\n**Does your employer need anything else?**\nIf they also ask for an [alcohol and drug test](/servicios/examen-alcohol-drogas), mention it when you arrive and we'll see whether both can be done in the same visit.\n\n**Hours that fit life on the road**\nBetween loads, stop by 13331 Kuykendahl Rd Ste 128, Houston, TX 77090, any day from 9 AM to 9 PM, weekends included. You pay directly with cash or card, and we tell you the price of the exam before we begin.",
    "icon": "Truck",
    "image": "/images/services/examen-dot.webp",
    "category": "examenes",
    "keywords": [
      "examen dot houston",
      "examen fisico dot houston español",
      "examen cdl houston",
      "dot physical houston español"
    ],
    "keywordsEn": [
      "dot physical houston",
      "dot exam houston",
      "cdl physical houston",
      "dot medical exam houston"
    ],
    "features": [
      "Vista, oído y presión arterial",
      "Examen de orina e historial médico",
      "Certificado en la misma visita si apruebas",
      "Abierto también fines de semana"
    ],
    "featuresEn": [
      "Vision, hearing and blood pressure",
      "Urinalysis and medical history",
      "Certificate during the visit if you pass",
      "Open on weekends too"
    ],
    "highlighted": true,
    "order": 20
  },
  {
    "id": "examenes-inmigracion",
    "slug": "examenes-inmigracion",
    "title": "Examen Médico de Inmigración I-693",
    "titleEn": "Immigration Medical Exam I-693",
    "seoTitle": "Examen Médico de Inmigración I-693 en Houston",
    "seoTitleEn": "I-693 Immigration Medical Exam in Houston",
    "shortTitle": "Inmigración",
    "description": "Examen médico de inmigración I-693 en Houston, TX con médico autorizado por USCIS. Vacunas y formulario sellado.",
    "descriptionEn": "I-693 immigration medical exam in Houston, TX with a USCIS-authorized physician. Vaccines and sealed form.",
    "longDescription": "El examen médico de inmigración (Formulario I-693) es un requisito para el ajuste de estatus. En Clínica Hispana Cruz 2 lo realizamos con un médico autorizado por USCIS (civil surgeon) y te entregamos el formulario sellado listo para enviar.\n\n**¿Qué incluye?**\n- Revisión de historial médico y de vacunas\n- Examen físico completo\n- Pruebas requeridas por USCIS (incluida la de tuberculosis)\n- Aplicación de las vacunas que te falten\n- Formulario I-693 completado y sellado en sobre oficial\n\n**¿Quién necesita el Formulario I-693?**\nToda persona que solicita la residencia permanente (green card) por ajuste de estatus dentro de Estados Unidos debe presentar el Formulario I-693 firmado por un civil surgeon autorizado por USCIS. También se pide en algunos otros trámites cuando USCIS lo solicita por carta (RFE).\n\n**Qué traer a tu cita**\n- Identificación con foto vigente (pasaporte, licencia o matrícula consular)\n- Tu registro de vacunas, si lo tienes\n- Resultados de exámenes o tratamientos médicos previos relevantes\n- La carta de USCIS que solicita el examen, si la recibiste\n\n**Cómo funciona el proceso**\n- Revisamos tu historial médico y tu registro de vacunas\n- Realizamos el examen físico y las pruebas requeridas por USCIS, incluida la de tuberculosis\n- Aplicamos las vacunas que te falten según tu edad\n- Completamos el Formulario I-693 y te lo entregamos sellado en sobre oficial, listo para enviar\n\nAlgunas pruebas de laboratorio tardan unos días en dar resultado, así que te recomendamos no dejar el examen para el final de tu trámite.\n\n**¿Por qué hacer tu I-693 con nosotros?**\nNuestro médico está autorizado por USCIS como civil surgeon y todo el proceso —requisitos, pruebas y formulario— se te explica en español, sin cita previa. El sobre se entrega sellado tal como lo exige inmigración, y resolvemos tus dudas antes de que envíes nada.\n\n**Precio y formas de pago**\nEl examen de inmigración tiene precio de pago directo: no necesitas seguro médico. Llámanos para confirmar el costo total con pruebas y vacunas incluidas. Aceptamos efectivo y tarjetas.\n\n**Dónde estamos**\n13331 Kuykendahl Rd Ste 128, Houston, TX 77090, en el norte de Houston, abiertos todos los días de 9 AM a 9 PM. Atendemos a pacientes de Champions, Willowbrook, Klein, Spring, Cypress Station, Greenspoint y toda el área de Houston.",
    "longDescriptionEn": "The immigration medical exam (Form I-693) is required for adjustment of status. At Clínica Hispana Cruz 2 we perform it with a USCIS-authorized physician (civil surgeon) and give you the sealed form ready to submit.\n\n**What's included?**\n- Review of medical and vaccination history\n- Complete physical exam\n- USCIS-required tests (including tuberculosis)\n- Administration of any missing vaccines\n- Form I-693 completed and sealed in the official envelope\n\n**Who needs Form I-693?**\nAnyone applying for permanent residency (green card) through adjustment of status within the United States must submit Form I-693 signed by a USCIS-authorized civil surgeon. It is also requested in some other immigration processes when USCIS asks for it by letter (RFE).\n\n**What to bring to your appointment**\n- A valid photo ID (passport, driver's license or consular ID)\n- Your vaccination record, if you have it\n- Results of relevant previous medical tests or treatments\n- The USCIS letter requesting the exam, if you received one\n\n**How the process works**\n- We review your medical history and vaccination record\n- We perform the physical exam and the tests required by USCIS, including tuberculosis\n- We administer any vaccines you are missing for your age\n- We complete Form I-693 and hand it to you sealed in the official envelope, ready to submit\n\nSome lab tests take a few days to come back, so we recommend not leaving the exam for the very end of your process.\n\n**Why get your I-693 with us?**\nOur physician is authorized by USCIS as a civil surgeon, and the entire process — requirements, tests and form — is explained to you in Spanish, with no appointment needed. The envelope is delivered sealed exactly as immigration requires, and we answer your questions before you send anything.\n\n**Price and payment**\nThe immigration exam has self-pay pricing: you don't need health insurance. Call us to confirm the total cost with tests and vaccines included. We accept cash and cards.\n\n**Where we are**\n13331 Kuykendahl Rd Ste 128, Houston, TX 77090, in north Houston, open every day from 9 AM to 9 PM. We serve patients from Champions, Willowbrook, Klein, Spring, Cypress Station, Greenspoint and the entire Houston area.",
    "icon": "Clipboard",
    "image": "/images/services/examenes-inmigracion.webp",
    "category": "examenes",
    "keywords": [
      "examen de inmigracion houston",
      "examen medico i-693 houston",
      "civil surgeon houston español",
      "medico autorizado uscis houston"
    ],
    "keywordsEn": [
      "immigration medical exam houston",
      "i-693 exam houston",
      "civil surgeon houston",
      "uscis authorized doctor houston"
    ],
    "features": [
      "Médico autorizado (civil surgeon)",
      "Formulario I-693 sellado",
      "Vacunas requeridas disponibles",
      "Proceso explicado en español"
    ],
    "featuresEn": [
      "Authorized civil surgeon",
      "Sealed Form I-693",
      "Required vaccines available",
      "Process explained in Spanish"
    ],
    "highlighted": false,
    "order": 21
  },
  {
    "id": "vacunas",
    "slug": "vacunas",
    "title": "Vacunas contra la Influenza y Toxoide Tetánico",
    "titleEn": "Flu and Tetanus (Tdap) Vaccines",
    "shortTitle": "Vacunas",
    "description": "Vacuna contra la influenza y toxoide tetánico en el norte de Houston. Pasa sin cita, conoce el precio antes y recibe indicaciones en español.",
    "descriptionEn": "Flu shots and tetanus toxoid in North Houston. Walk in, hear the price before the shot and get aftercare advice in Spanish or English.",
    "longDescription": "Son dos vacunas para dos momentos distintos: la de la influenza se pone cada temporada de gripe y el toxoide tetánico se refuerza cuando pasó mucho tiempo desde la última dosis o después de una herida. En Clínica Hispana Cruz 2 aplicamos las dos a vecinos del norte de Houston que quieren resolverlo sin cita y en español.\n\n**¿Cuál de las dos te toca?**\n- Influenza: conviene cada año, de preferencia antes de que empiece la temporada de gripe en otoño\n- Influenza: más aún si convives con bebés, personas mayores o alguien con una enfermedad crónica\n- Toxoide tetánico: si ya perdiste la cuenta de tu última dosis\n- Toxoide tetánico: si te cortaste con metal, madera o algo sucio, por ejemplo en la obra o en el jardín\n\n**¿Qué pasa durante la visita?**\nAntes de aplicar la vacuna, el equipo médico te pregunta si hoy tienes fiebre, si alguna vez reaccionaste mal a una vacuna y si eres alérgico a algo. Con esas respuestas decide si se aplica ahora o conviene esperar. La inyección va en el brazo y, al terminar, te pedimos que te quedes un rato en la sala antes de irte.\n\n**¿Es normal sentir algo después?**\nEs común que el brazo quede adolorido o un poco hinchado donde entró la aguja, y algunas personas notan cansancio leve. Suele pasar solo. Si sientes dificultad para respirar, hinchazón en la cara o ronchas por todo el cuerpo, busca atención de emergencia de inmediato.\n\n**¿Te cortaste y no sabes si estás protegido?**\nSi llegas con una herida, el equipo revisa la lesión y tu historial de refuerzos en la misma consulta. Si el corte necesita puntos, lo atendemos en [suturas de heridas](/servicios/suturas-heridas); si ya está cerrado pero hay que vigilarlo, en [curación de heridas](/servicios/curacion-heridas).\n\n**¿Qué traer y cuánto cuesta?**\nSi tienes tu cartilla o algún papel con vacunas anteriores, tráelo: ayuda a saber qué te falta. No necesitas seguro, porque te decimos el precio de cada vacuna antes de aplicarla y puedes pagar en efectivo o con tarjeta. La vacuna de la gripe depende de la disponibilidad de la temporada, así que llama al consultorio de Kuykendahl Rd si quieres confirmarlo antes de salir de casa; abrimos todos los días de 9 AM a 9 PM.",
    "longDescriptionEn": "These are two vaccines for two different moments: the flu shot is a once-a-season thing, while tetanus toxoid is a booster you get when it has been years since your last dose or right after a wound. At Clínica Hispana Cruz 2 we give both to North Houston residents who want it done as a walk-in, in Spanish or English.\n\n**Which one do you need?**\n- Flu: worth getting every year, ideally before flu season picks up in the fall\n- Flu: even more so if you live with babies, older relatives or someone chronically ill\n- Tetanus: if you can't remember when your last booster was\n- Tetanus: if you were cut by metal, wood or something dirty, say on a job site or in the yard\n\n**What happens at the visit?**\nBefore the shot, the medical team asks whether you have a fever today, whether you have ever reacted badly to a vaccine and whether you have any allergies. Then they decide whether to go ahead now or wait. The injection goes in your arm, and afterward we ask you to sit in the waiting area for a little while before you leave.\n\n**Is it normal to feel something afterward?**\nA sore or slightly swollen arm where the needle went in is common, and some people feel a bit tired. It usually fades on its own. If you have trouble breathing, swelling in your face or hives all over your body, get emergency care right away.\n\n**Got a cut and not sure you're covered?**\nIf you come in with a wound, the team checks the injury and your booster history in the same visit. If the cut needs stitches, we handle it through [wound suturing](/servicios/suturas-heridas); if it's already closed but needs watching, through [wound care](/servicios/curacion-heridas).\n\n**What should you bring, and what does it cost?**\nBring your vaccine card or any record of past shots; it shows what's missing. No insurance needed: we tell you the price of each vaccine before giving it, and you can pay with cash or card. Flu vaccine supply depends on the season, so call our Kuykendahl Rd office to confirm before heading over. Doors open daily from 9 AM until 9 PM.",
    "icon": "Syringe",
    "image": "/images/services/vacunas.webp",
    "category": "tratamientos",
    "keywords": [
      "vacuna de la flu houston",
      "vacuna contra la influenza houston",
      "toxoide tetanico houston",
      "vacuna del tetano houston"
    ],
    "keywordsEn": [
      "flu shot houston",
      "flu vaccine houston",
      "tetanus shot houston",
      "tdap vaccine houston"
    ],
    "features": [
      "Vacuna anual contra la influenza",
      "Refuerzo de toxoide tetánico",
      "Revisión breve antes de vacunarte",
      "Indicaciones en español tras la dosis"
    ],
    "featuresEn": [
      "Yearly influenza vaccine",
      "Tetanus toxoid booster",
      "Quick screening before the shot",
      "Aftercare advice in Spanish or English"
    ],
    "highlighted": false,
    "order": 22
  },
  {
    "id": "sueros-vitaminados",
    "slug": "sueros-vitaminados",
    "title": "Sueros Vitaminados (Terapia IV)",
    "titleEn": "Vitamin IV Therapy",
    "shortTitle": "Sueros Vitaminados",
    "description": "Sueros vitaminados en el norte de Houston: el equipo médico valora si son adecuados para ti y te los aplica en la clínica, explicado en español.",
    "descriptionEn": "Vitamin IV drips in North Houston: the medical team first checks whether one is right for you, then gives it at the clinic, explained in Spanish.",
    "longDescription": "Un suero vitaminado es una solución que se aplica por vena, en consultorio y con personal de salud presente. En Clínica Hispana Cruz 2 lo ofrecemos a quienes lo piden, pero antes el equipo médico valora si es adecuado para ti; si no lo es, te lo decimos y te explicamos por qué.\n\n**¿Por qué hay una valoración antes?**\nNo todas las personas son buenas candidatas para recibir líquidos por vena. Problemas del corazón o del riñón, un embarazo, ciertos medicamentos o una alergia previa pueden cambiar la decisión. Por eso, antes de canalizar, te hacemos preguntas sobre tu salud, tomamos tu presión y escuchamos qué te trae a la clínica.\n\n**¿Qué te preguntamos?**\n- Enfermedades que ya tienes diagnosticadas\n- Medicamentos y suplementos que tomas\n- Alergias a medicamentos o reacciones anteriores\n- Si estás embarazada o amamantando\n- Cómo te sientes hoy y desde cuándo\n\n**¿Y si en realidad estás enfermo?**\nSi llegas con fiebre, vómito que no para, dolor fuerte o algo que parece una infección, lo primero es una consulta para saber qué tienes. Un suero no reemplaza un diagnóstico, y el equipo puede recomendarte otra atención antes que el suero.\n\n**¿Cómo es la aplicación?**\nTe acomodas sentado, el personal coloca una vía en una vena del brazo y deja pasar la solución a un ritmo controlado. Durante todo el proceso hay alguien pendiente de ti; si sientes ardor, mareo o cualquier molestia, avisas y se ajusta o se detiene. Al terminar se retira la vía y se cubre el punto con una gasa.\n\n**¿Cuánto cuesta y cómo pagas?**\nEl precio te lo decimos antes de empezar y puedes pagar en efectivo, débito o crédito; no necesitas seguro. Si hay alguna oferta vigente, aparece en [promociones](/promociones). Puedes llegar sin cita a 13331 Kuykendahl Rd Ste 128 cualquier día entre las 9 AM y las 9 PM, o llamar antes para apartar tu lugar.",
    "longDescriptionEn": "A vitamin IV drip is a solution given through a vein, inside a medical office and with health staff in the room. At Clínica Hispana Cruz 2 we offer it to people who ask, but before anything goes in, the medical team checks whether it's a good fit for you. If it isn't, we tell you and explain why.\n\n**Why is there a screening first?**\nNot everyone is a good candidate for fluids through a vein. Heart or kidney problems, pregnancy, certain medications or a past allergic reaction can change the answer. So before placing the line, we ask about your health, take your blood pressure and listen to what brought you in.\n\n**What will we ask you?**\n- Conditions you've already been diagnosed with\n- Medications and supplements you take\n- Drug allergies or past reactions\n- Whether you're pregnant or breastfeeding\n- How you feel today and since when\n\n**What if you're actually sick?**\nIf you show up with a fever, vomiting that won't stop, strong pain or what looks like an infection, the first step is a regular visit to find out what's going on. A drip is no substitute for a diagnosis, and the team may point you to other care instead.\n\n**How is the drip given?**\nYou get settled in a seat, staff place a line in a vein in your arm and let the solution run at a controlled rate. Someone keeps an eye on you the whole time; if you feel burning, dizziness or any discomfort, speak up and it gets adjusted or stopped. When it's done, the line comes out and the spot is covered with gauze.\n\n**What does it cost, and how do you pay?**\nWe give you the price before we start, and you can pay with cash, debit or credit; no insurance needed. Any current offer is listed on our [promotions page](/promociones). Walk in to 13331 Kuykendahl Rd Ste 128 any day between 9 AM and 9 PM, or call ahead to hold a spot.",
    "icon": "Drop",
    "image": "/images/services/sueros-vitaminados.webp",
    "category": "tratamientos",
    "keywords": [
      "sueros vitaminados houston",
      "terapia iv houston",
      "suero de vitaminas houston",
      "hidratacion intravenosa houston"
    ],
    "keywordsEn": [
      "vitamin iv therapy houston",
      "iv drip houston",
      "iv hydration houston",
      "vitamin drip houston"
    ],
    "features": [
      "Valoración previa por el equipo médico",
      "Aplicación por vena dentro de la clínica",
      "Personal pendiente durante la aplicación",
      "Explicación en español de principio a fin"
    ],
    "featuresEn": [
      "Screening by the medical team first",
      "IV given inside the clinic",
      "Staff nearby throughout the drip",
      "Everything explained in Spanish"
    ],
    "highlighted": false,
    "order": 23
  },
  {
    "id": "suturas-heridas",
    "slug": "suturas-heridas",
    "title": "Suturas de Heridas",
    "titleEn": "Wound Suturing",
    "shortTitle": "Suturas",
    "description": "¿Un corte que se abre y no deja de sangrar? Lo limpiamos, anestesiamos y cerramos con puntos en el norte de Houston, sin cita y en español.",
    "descriptionEn": "A cut that keeps gaping or bleeding? We clean it, numb it and close it with stitches in North Houston. Walk-ins welcome, Spanish spoken.",
    "longDescription": "Las suturas, o puntos, unen los bordes de un corte para que cierre parejo y con menos riesgo de infección. En Clínica Hispana Cruz 2 cosemos heridas hechas en la cocina, en el trabajo o en un accidente en casa, con anestesia local y sin cita, para que un corte que se resuelve aquí no te lleve a emergencias.\n\n**¿Cómo saber si tu corte necesita puntos?**\n- Los bordes se separan cuando mueves la zona\n- Sigue sangrando aunque aprietes un buen rato con una tela limpia\n- Es hondo y se ve tejido amarillento debajo de la piel\n- Está en la cara, en una mano o sobre una articulación como la rodilla\n\n**¿Qué hacer antes de llegar?**\nEnjuaga el corte con agua corriente, cúbrelo con una gasa o un trapo limpio y presiona firme. Si tienes un anillo cerca de la herida, quítatelo antes de que se hinche el dedo. No pongas polvos, café ni remedios caseros encima: complican la limpieza.\n\n**¿Cómo se cierra en la clínica?**\nEl equipo médico revisa qué tan profundo es el corte, si quedó algo dentro y si mueves y sientes bien la zona. Luego aplica anestesia local, lava la herida a fondo y la cierra con puntos. Si hace años que no te pones el refuerzo del tétanos, puedes recibir el [toxoide tetánico](/servicios/vacunas) en la misma consulta.\n\n**¿Cuándo es mejor ir a emergencias?**\n- Sangre que sale a chorro o no se detiene con presión firme\n- Un dedo o un pedazo de piel casi desprendido\n- Hueso visible o un objeto clavado que no debes sacar\n- Pérdida de fuerza o de sensibilidad más allá del corte\n\n**¿Y después?**\nTe explicamos cómo lavar la zona, cuándo cambiar el vendaje y qué señales de infección vigilar. También te decimos cuándo volver para quitar los puntos; esa revisión la hacemos en [curación de heridas](/servicios/curacion-heridas). Conoces el precio antes de empezar, y el consultorio de Kuykendahl Rd recibe cortes todos los días hasta las 9 PM.",
    "longDescriptionEn": "Sutures, or stitches, bring the edges of a cut together so it heals evenly and with less chance of infection. At Clínica Hispana Cruz 2 we close kitchen cuts, work injuries and household accidents with local anesthetic and no appointment, so a wound we can handle here doesn't have to end with a trip to the emergency room.\n\n**How can you tell a cut needs stitches?**\n- The edges pull apart when you move that area\n- It keeps bleeding despite steady pressure with a clean cloth\n- It's deep enough that you can see yellowish tissue under the skin\n- It's on your face, a hand or over a joint like the knee\n\n**What should you do on the way?**\nRinse the cut under running water, cover it with gauze or a clean cloth and press firmly. If you're wearing a ring near the wound, take it off before the finger swells. Skip powders, coffee grounds or home remedies on top; they only make cleaning harder.\n\n**How do we close it?**\nThe medical team checks how deep the cut goes, whether anything is stuck inside and whether you can move and feel the area normally. Then they numb it with local anesthetic, wash it out thoroughly and stitch it closed. If it's been years since your last tetanus booster, you can get [tetanus toxoid](/servicios/vacunas) during the same visit.\n\n**When is the ER the better call?**\n- Blood spurting out or not stopping with firm pressure\n- A fingertip or flap of skin that's nearly cut off\n- Bone showing, or an object stuck in the wound that shouldn't be pulled out\n- Weakness or numbness spreading beyond the cut\n\n**What comes next?**\nWe show you how to wash the area, when to change the bandage and which signs of infection to watch for. We also tell you when to come back to have the stitches taken out; that check happens through [wound care](/servicios/curacion-heridas). You hear the price before we start, and our Kuykendahl Rd office sees cuts every day until 9 PM.",
    "icon": "Scissors",
    "image": "/images/services/suturas-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "suturas houston",
      "puntos para herida houston",
      "cerrar herida houston",
      "doctor para cortadas houston"
    ],
    "keywordsEn": [
      "wound suturing houston",
      "stitches houston",
      "laceration repair houston",
      "cut treatment houston"
    ],
    "features": [
      "Revisión y lavado a fondo del corte",
      "Anestesia local antes de los puntos",
      "Cierre con suturas según la herida",
      "Retiro de puntos en una visita posterior"
    ],
    "featuresEn": [
      "Thorough check and wash of the cut",
      "Local anesthetic before stitching",
      "Closure with sutures as needed",
      "Stitch removal at a later visit"
    ],
    "highlighted": false,
    "order": 24
  },
  {
    "id": "curacion-heridas",
    "slug": "curacion-heridas",
    "title": "Cura y Curación de Heridas",
    "titleEn": "Wound Care",
    "shortTitle": "Curación de Heridas",
    "description": "Limpieza, cambio de vendajes y revisión de heridas que tardan en sanar, en el norte de Houston. Seguimiento cercano y explicaciones en español.",
    "descriptionEn": "Cleaning, dressing changes and check-ups for wounds that are slow to heal, in North Houston. Close follow-up, explained in Spanish or English.",
    "longDescription": "Curar una herida no es solo cambiar la gasa: hay que limpiarla bien, ver cómo avanza y detectar a tiempo si algo se complica. En Clínica Hispana Cruz 2 damos seguimiento a raspones, quemaduras leves, heridas con puntos o de un procedimiento y llagas que no terminan de cerrar, con revisiones explicadas en español.\n\n**¿Qué heridas atendemos en seguimiento?**\n- Raspones grandes por caídas en bicicleta, en moto o en el trabajo\n- Quemaduras leves de cocina o de plancha\n- Heridas con puntos que necesitan revisión o retiro\n- Heridas de una [cirugía menor](/servicios/cirugias-menores) o de un drenaje\n- Úlceras o llagas en piernas y pies que llevan tiempo abiertas\n\n**¿Qué se hace en cada visita?**\nRetiramos el vendaje anterior, lavamos y desinfectamos la herida y la observamos con calma: el color de los bordes, si hay secreción, mal olor o más enrojecimiento que la vez pasada. Después colocamos un apósito adecuado y te indicamos cuándo regresar para la siguiente revisión.\n\n**¿Por qué a veces una herida no sana?**\nLa diabetes, la mala circulación, el tabaco, la presión constante sobre la zona o una infección escondida pueden frenar la cicatrización. Si es tu caso, el equipo médico lo toma en cuenta, puede revisar tu glucosa y, si hace falta, se orienta la referencia al especialista.\n\n**¿Cómo cuidarla entre visitas?**\n- Antes de tocar el vendaje, lávate bien con agua y jabón\n- Si el apósito se moja o se mancha, cámbialo por uno limpio y seco\n- No le pongas pomadas caseras sin preguntar antes\n- Toma los medicamentos indicados hasta terminarlos\n\n**¿Cuándo no esperar a la siguiente cita?**\nSi te da fiebre, la piel alrededor se pone roja y caliente cada vez más lejos de la herida, sale pus o el dolor aumenta en lugar de bajar, vuelve antes; si te sientes muy mal, ve a emergencias. Para las revisiones de rutina puedes pasar por Kuykendahl Rd cualquier día de 9 AM a 9 PM, y el precio de cada curación te lo decimos de antemano.",
    "longDescriptionEn": "Wound care is more than swapping out the gauze: the wound has to be cleaned properly, its progress tracked and any trouble caught early. At Clínica Hispana Cruz 2 we follow up on scrapes, minor burns, wounds with stitches or from a procedure, and sores that won't finish closing, with each check explained in Spanish or English.\n\n**Which wounds do we follow up on?**\n- Large scrapes from bike, motorcycle or on-the-job falls\n- Minor burns from the stove or an iron\n- Stitched wounds that need a check or removal\n- Wounds left by a [minor surgery](/servicios/cirugias-menores) or a drainage\n- Ulcers or sores on the legs and feet that have stayed open a long time\n\n**What happens at each visit?**\nWe take off the old dressing, wash and disinfect the wound and look it over carefully: the color of the edges, any drainage, a bad smell or more redness than last time. Then we put on a suitable dressing and let you know when to come back for the next check.\n\n**Why do some wounds refuse to heal?**\nDiabetes, poor circulation, smoking, constant pressure on the area or a hidden infection can all slow healing. If any of that applies to you, the medical team factors it in, may check your blood sugar and, when needed, helps arrange a referral to a specialist.\n\n**How do you look after it between visits?**\n- Scrub up with soap and water before you handle the dressing\n- Swap the dressing for a fresh, dry one whenever it gets soaked or stained\n- Don't put homemade ointments on it without asking first\n- Finish any medication you were given\n\n**When shouldn't you wait for the next visit?**\nIf you get a fever, the skin around it turns red and warm farther and farther out, pus appears or the pain gets worse instead of better, come back early; if you feel very sick, go to the ER. For routine checks, stop by our Kuykendahl Rd office any day from 9 AM to 9 PM, and we'll tell you the cost of each dressing visit up front.",
    "icon": "FirstAid",
    "image": "/images/services/curacion-heridas.webp",
    "category": "tratamientos",
    "keywords": [
      "curacion de heridas houston",
      "cura de heridas houston",
      "cambio de vendaje houston",
      "limpieza de herida houston"
    ],
    "keywordsEn": [
      "wound care houston",
      "wound dressing houston",
      "dressing change houston",
      "wound cleaning houston"
    ],
    "features": [
      "Lavado y desinfección en cada visita",
      "Cambio de apósitos y vendajes",
      "Revisión de señales de infección",
      "Indicaciones para cuidarla en casa"
    ],
    "featuresEn": [
      "Cleaning and disinfection at every visit",
      "Dressing and bandage changes",
      "Checks for signs of infection",
      "Home-care instructions"
    ],
    "highlighted": false,
    "order": 25
  },
  {
    "id": "cirugias-menores",
    "slug": "cirugias-menores",
    "title": "Cirugías Menores",
    "titleEn": "Minor Surgery",
    "shortTitle": "Cirugías Menores",
    "description": "Retiro de lunares, quistes y lipomas con anestesia local en el norte de Houston. Revisión previa, procedimiento en la clínica y cuidados en español.",
    "descriptionEn": "Mole, cyst and lipoma removal under local anesthetic in North Houston. Exam first, procedure in the clinic and aftercare in Spanish or English.",
    "longDescription": "Una cirugía menor es un procedimiento corto que se hace en el consultorio, con anestesia local y sin hospitalización, para retirar bultos o lesiones de la piel. En Clínica Hispana Cruz 2 lo hacemos con lunares, quistes y lipomas que molestan, crecen o se lastiman con la ropa, y te explicamos cada paso en español.\n\n**¿Qué se puede retirar en la clínica?**\n- Lunares que rozan con el cinturón, el brasier o la rasuradora\n- Quistes bajo la piel que se inflaman de vez en cuando\n- Lipomas, esos bultos suaves de grasa que ruedan bajo los dedos\n\n**¿Primero una revisión o directo al procedimiento?**\nPrimero se revisa. El equipo médico mira el tamaño, la ubicación y el aspecto de la lesión, y te pregunta desde cuándo la tienes y si ha cambiado. Si algo no corresponde a una cirugía menor, por ejemplo una lesión muy grande o en una zona delicada, se orienta la referencia al especialista.\n\n**¿Cómo es el procedimiento?**\nSe limpia la piel, se aplica anestesia local con una aguja fina y, cuando la zona ya está dormida, se retira la lesión. Lo normal es sentir presión o jalones, no dolor agudo; si algo te duele, avisa y se aplica más anestesia. Al final se cierra con puntos si hace falta, se cubre con un vendaje y te vas caminando a casa.\n\n**¿Qué debes avisar antes?**\n- Si tomas aspirina, anticoagulantes o suplementos que afectan la coagulación\n- Si eres alérgico a la anestesia o a algún antiséptico\n- Si tienes diabetes o te cuesta cicatrizar\n- Si estás embarazada\n\n**¿Cuándo llamar o ir a emergencias después?**\nAlgo de dolor y un moretón alrededor son normales. Llámanos si la herida se abre, se pone roja y caliente o sale pus; ve a emergencias si sangra sin parar aunque presiones o te da fiebre alta. Para revisar la herida y quitar los puntos, te citamos en [curación de heridas](/servicios/curacion-heridas).\n\n**¿Cómo pedir tu evaluación?**\nVen a la clínica de Kuykendahl Rd, cerca de Champions y Willowbrook, cualquier día entre las 9 AM y las 9 PM, o llama y apartamos un horario para el procedimiento. Te damos el precio antes de agendar y no necesitas seguro.",
    "longDescriptionEn": "Minor surgery means a short procedure done right in the office, under local anesthetic and with no hospital stay, to remove lumps or growths on the skin. At Clínica Hispana Cruz 2 we do it for moles, cysts and lipomas that bother you, keep growing or get irritated by clothing, and we explain every step in Spanish or English.\n\n**What can be removed at the clinic?**\n- Moles that rub against your belt, bra strap or razor\n- Cysts under the skin that flare up every so often\n- Lipomas: soft, fatty lumps that slide around when you touch them\n\n**Exam first, or straight to the procedure?**\nExam first. The medical team looks at the size, location and appearance of the growth, and asks how long you've had it and whether it has changed. If it isn't a good fit for minor surgery, for example because it's very large or in a delicate spot, they help arrange a referral to a specialist.\n\n**What is the procedure like?**\nThe skin is cleaned, local anesthetic goes in through a thin needle, and once the area is numb the growth is removed. You'll typically feel pressure or tugging rather than sharp pain; if anything hurts, say so and more anesthetic is given. Stitches close it if needed, a bandage goes on top, and you walk out on your own.\n\n**What should you mention beforehand?**\n- Aspirin, blood thinners or supplements that affect clotting\n- Allergies to anesthetics or antiseptics\n- Diabetes or a history of slow healing\n- Pregnancy\n\n**When to call us or head to the ER afterward**\nSome soreness and a bruise around the site are normal. Call us if the wound opens, turns red and warm or drains pus; go to the ER if it keeps bleeding despite pressure or you run a high fever. Follow-up checks and stitch removal are handled through [wound care](/servicios/curacion-heridas).\n\n**How do you get evaluated?**\nCome to our Kuykendahl Rd clinic near Champions and Willowbrook any day between 9 AM and 9 PM, or call and we'll book a time for the procedure. You get the price before scheduling, and insurance isn't required.",
    "icon": "Scissors",
    "image": "/images/services/cirugias-menores.webp",
    "category": "tratamientos",
    "keywords": [
      "cirugia menor houston",
      "quitar lunar houston",
      "extraccion de quiste houston",
      "cirugia ambulatoria houston"
    ],
    "keywordsEn": [
      "minor surgery houston",
      "mole removal houston",
      "cyst removal houston",
      "lipoma removal houston"
    ],
    "features": [
      "Revisión de la lesión antes de decidir",
      "Anestesia local en la zona",
      "Retiro de lunares, quistes y lipomas",
      "Indicaciones y revisión de la herida"
    ],
    "featuresEn": [
      "Exam of the growth before deciding",
      "Local anesthetic at the site",
      "Removal of moles, cysts and lipomas",
      "Aftercare and wound check"
    ],
    "highlighted": false,
    "order": 26
  },
  {
    "id": "drenaje-abscesos",
    "slug": "drenaje-abscesos",
    "title": "Drenaje de Abscesos",
    "titleEn": "Abscess Drainage",
    "shortTitle": "Drenaje de Abscesos",
    "description": "Abscesos y forúnculos drenados con anestesia local en el norte de Houston. Alivio de la presión, limpieza de la zona y cuidados en español.",
    "descriptionEn": "Abscesses and boils drained under local anesthetic in North Houston. Pressure relief, a cleaned-out wound and aftercare in Spanish or English.",
    "longDescription": "Un absceso es una bolsa de pus bajo la piel que se forma cuando una infección queda encerrada: se ve como un bulto rojo, caliente y que duele cada vez más. En Clínica Hispana Cruz 2 lo abrimos y drenamos con anestesia local, para quitar la presión acumulada y ayudar a que la infección ceda.\n\n**¿Es un absceso o solo un granito?**\n- Crece con los días y se siente tenso o blando por dentro\n- Duele al tocarlo y hasta al rozar la ropa\n- La piel alrededor está roja y caliente\n- Tiene una cabecita blanca o amarillenta en medio\n- Sale en axilas, glúteos, ingles, muslos o donde roza el cinturón\n\n**¿Por qué no conviene reventarlo en casa?**\nApretarlo con las manos o picarlo con una aguja puede empujar la infección más adentro, dejarlo a medio vaciar y hacer más probable que regrese. Las compresas tibias alivian mientras llegas, pero cuando el absceso ya está formado, casi siempre hay que drenarlo.\n\n**¿Cómo se drena en la clínica?**\nEl equipo médico revisa el bulto y te pregunta si tienes fiebre, diabetes o abscesos repetidos. Después adormece la zona con anestesia local, hace una pequeña abertura, saca el pus y lava el interior. A veces se deja una gasa dentro para que siga drenando, y se decide si necesitas antibiótico, que te entregamos en nuestra [farmacia](/servicios/farmacia).\n\n**¿Cuándo ir directo a emergencias?**\n- Fiebre alta, escalofríos o sensación de estar muy enfermo\n- Una línea roja que sube por el brazo o la pierna\n- Un bulto inflamado en la cara, junto a los ojos o la nariz\n- Hinchazón en el cuello que dificulta tragar o respirar\n\n**¿Qué sigue después del drenaje?**\nTe enseñamos a cuidar la herida y te damos fecha para cambiar la gasa y revisar cómo cierra en [curación de heridas](/servicios/curacion-heridas). Si los abscesos se te repiten, vale la pena revisar tu glucosa. No esperes a que el bulto reviente: abrimos de 9 de la mañana a 9 de la noche, fines de semana incluidos, en Kuykendahl Rd, y el precio del drenaje lo sabes antes de empezar.",
    "longDescriptionEn": "Think of an abscess as an infection trapped under the skin, sealed into its own pocket of pus. It shows up as a red, warm lump that hurts more each day. At Clínica Hispana Cruz 2 we open and drain it under local anesthetic to release the built-up pressure and help the infection settle down.\n\n**Abscess or just a pimple?**\n- It gets bigger over several days and feels tight or soft inside\n- It hurts to touch, even when clothing brushes it\n- The skin around it is red and warm\n- There's a white or yellow point in the middle\n- It sits in the armpit, buttocks, groin, thighs or along the waistband\n\n**Why not pop it at home?**\nPressing on it or jabbing it with a needle tends to drive the germs deeper, leaves part of the pus behind and sets you up for a repeat. Warm compresses can ease it while you get here, but once an abscess has formed, it almost always needs draining.\n\n**How is it drained at the clinic?**\nThe medical team examines the lump and asks whether you have a fever, diabetes or a history of repeat abscesses. They numb the area with local anesthetic, make a small opening, let the pus out and rinse the inside. Sometimes gauze is left in so it keeps draining, and they decide whether you need an antibiotic, which we hand you at our [pharmacy](/servicios/farmacia).\n\n**When to go straight to the ER**\n- High fever, chills or feeling very sick\n- A red streak running up your arm or leg\n- A swollen, painful lump on your face close to the eyes or nose\n- Neck swelling that makes it hard to swallow or breathe\n\n**What happens after drainage?**\nWe show you how to care for the wound and give you a date to change the gauze and check how it's closing through [wound care](/servicios/curacion-heridas). When they keep showing up, a blood sugar test is a sensible next step. Don't wait for the lump to burst: our Kuykendahl Rd clinic is open from 9 in the morning to 9 at night, weekends included, and you'll know the price of the drainage before we begin.",
    "icon": "Drop",
    "image": "/images/services/drenaje-abscesos.webp",
    "category": "tratamientos",
    "keywords": [
      "drenaje de absceso houston",
      "drenar absceso houston",
      "infeccion de piel houston",
      "tratamiento de absceso houston"
    ],
    "keywordsEn": [
      "abscess drainage houston",
      "drain abscess houston",
      "skin infection houston",
      "boil treatment houston"
    ],
    "features": [
      "Revisión del bulto y la piel alrededor",
      "Anestesia local antes de abrir",
      "Drenaje y lavado del interior",
      "Plan de curaciones y señales de alarma"
    ],
    "featuresEn": [
      "Exam of the lump and surrounding skin",
      "Local anesthetic before opening",
      "Drainage and rinsing of the pocket",
      "Dressing plan and warning signs"
    ],
    "highlighted": false,
    "order": 27
  },
  {
    "id": "unas-encarnadas",
    "slug": "unas-encarnadas",
    "title": "Extracción de Uñas Encarnadas",
    "titleEn": "Ingrown Toenail Removal",
    "shortTitle": "Uñas Encarnadas",
    "description": "Uña encarnada del pie tratada con anestesia local en el norte de Houston: retiro de la orilla enterrada, manejo de la infección y cuidados en español.",
    "descriptionEn": "Ingrown toenail care under local anesthetic in North Houston: the buried edge removed, any infection treated and aftercare in Spanish or English.",
    "longDescription": "Una uña encarnada aparece cuando la orilla de la uña se clava en la piel, casi siempre en el dedo gordo del pie. Al principio solo molesta con el zapato; después se hincha, se pone roja y puede sacar pus. En Clínica Hispana Cruz 2 retiramos la parte enterrada con anestesia local, aquí mismo en el consultorio.\n\n**¿Por qué se entierra la uña?**\n- Cortarla en curva o muy corta en las esquinas\n- Zapatos de punta estrecha o botas de trabajo apretadas\n- Golpes en el dedo, como al jugar fútbol o al pisar mal\n- Uñas curvas por naturaleza, que a veces vienen de familia\n\n**¿Qué pasa en la consulta?**\nEl equipo médico revisa el dedo, mira cuánto se ha clavado la uña y si hay infección. Se inyecta anestesia local en la base del dedo; el pinchazo molesta un momento y luego la zona queda dormida. Entonces se corta y se retira solo la orilla encarnada, se limpia el surco y se cubre con un vendaje.\n\n**¿Si tienes diabetes, conviene esperar?**\nAl contrario. Con diabetes o mala circulación, una herida pequeña en el pie puede complicarse, así que no intentes cortarte la uña enterrada en casa. Avísalo al llegar para que el equipo lo tenga en cuenta en el procedimiento y en la revisión posterior.\n\n**¿Cómo cuidar el dedo después?**\n- Usa sandalias abiertas o un zapato holgado mientras sana\n- Lava el dedo como te indiquen y pon un vendaje limpio\n- Al cortarte las uñas, déjalas rectas y no les recortes las esquinas\n- Regresa a revisión si te lo piden; se hace en [curación de heridas](/servicios/curacion-heridas)\n\n**¿Cuándo es una urgencia?**\nSi el enrojecimiento sube por el pie, tienes fiebre alta o el dedo se pone muy oscuro o frío, ve a emergencias. Para lo demás, la clínica de Kuykendahl Rd, cerca de Klein y Spring, atiende uñas encarnadas de 9 AM a 9 PM los siete días; trae un zapato abierto para irte cómodo y pregunta el precio antes del procedimiento.",
    "longDescriptionEn": "Ingrown toenails start when the side of the nail curls down and pierces the skin, usually on the big toe. At first it just hurts in your shoe; then it swells, turns red and may start draining pus. At Clínica Hispana Cruz 2 we remove the buried part under local anesthetic, right here in the office.\n\n**Why does the nail grow in?**\n- Trimming it curved or cutting the corners too short\n- Narrow-toed shoes or tight work boots\n- Stubbing or jamming the toe, say playing soccer or stepping wrong\n- Naturally curved nails, which sometimes run in families\n\n**What happens at the visit?**\nThe medical team examines the toe, sees how far the nail has dug in and checks for infection. Local anesthetic goes in at the base of the toe; the needle stings for a moment, then the area goes numb. Only the ingrown edge is trimmed and lifted out, the groove is cleaned, and a bandage goes on.\n\n**Have diabetes? Don't put it off**\nQuite the opposite. With diabetes or poor circulation, even a small foot wound can turn serious, so don't try to dig the nail out yourself. Let us know when you arrive so the team can plan the procedure and the follow-up around it.\n\n**How do you care for the toe afterward?**\n- Wear open sandals or a roomy shoe while it heals\n- Wash the toe as instructed and put on a clean bandage\n- Cut your nails straight across, without rounding the corners\n- Come back for a check if asked; it's done through [wound care](/servicios/curacion-heridas)\n\n**When is it an emergency?**\nIf redness spreads up your foot, you run a high fever or the toe turns very dark or cold, go to the ER. For everything else, our Kuykendahl Rd clinic near Klein and Spring treats ingrown toenails seven days a week, 9 AM to 9 PM. Bring an open shoe to go home in, and ask for the price before the procedure.",
    "icon": "Bone",
    "image": "/images/services/unas-encarnadas.webp",
    "category": "tratamientos",
    "keywords": [
      "uña encarnada houston",
      "extraccion de uña encarnada houston",
      "tratamiento uña encarnada houston",
      "doctor para uña encarnada houston"
    ],
    "keywordsEn": [
      "ingrown toenail houston",
      "ingrown toenail removal houston",
      "ingrown nail treatment houston",
      "toenail doctor houston"
    ],
    "features": [
      "Revisión del dedo y de la infección",
      "Anestesia local en el dedo",
      "Retiro de la orilla encarnada",
      "Consejos para que no vuelva a enterrarse"
    ],
    "featuresEn": [
      "Exam of the toe and any infection",
      "Local anesthetic in the toe",
      "Removal of the ingrown edge",
      "Tips to keep it from coming back"
    ],
    "highlighted": false,
    "order": 28
  },
  {
    "id": "farmacia",
    "slug": "farmacia",
    "title": "Farmacia",
    "titleEn": "Pharmacy",
    "shortTitle": "Farmacia",
    "description": "Al salir de tu consulta, recoge aquí los medicamentos indicados y productos de venta libre. En el norte de Houston, con todo explicado en español.",
    "descriptionEn": "Leave your visit with the medications you were given and over-the-counter products from our in-clinic pharmacy in North Houston, Spanish spoken.",
    "longDescription": "La farmacia de Clínica Hispana Cruz 2 está dentro de la misma clínica y tiene un propósito concreto: la entrega de los medicamentos indicados en la consulta y productos de venta libre. Terminas tu visita con el equipo médico, pasas a recoger lo que te indicaron y te vas a casa con el tratamiento en la mano.\n\n**¿Cómo funciona?**\n- El equipo médico te atiende y decide qué tratamiento necesitas\n- Te dicen qué medicamento te van a entregar y cuánto cuesta\n- Lo recibes antes de salir de la clínica\n- Te explican en español cómo y cuándo tomarlo\n\n**¿Qué ganas con recogerlo aquí?**\nCuando sales con fiebre, con dolor o después de un procedimiento como un [drenaje de absceso](/servicios/drenaje-abscesos), lo último que quieres es manejar a otra tienda y volver a formarte. Aquí empiezas el tratamiento sin desvíos, y si te surge una duda sobre la dosis, quien te lo entrega sabe de qué consulta vienes.\n\n**¿Qué productos de venta libre hay?**\nTenemos artículos de uso común para molestias del día a día, como el dolor, la gripe o la alergia. Lo que hay disponible puede variar, así que pregunta por lo que buscas cuando vengas.\n\n**¿Qué te explicamos al entregarte el medicamento?**\n- Cuántas veces al día tomarlo y si va con comida\n- Hasta cuándo seguir aunque ya te sientas mejor\n- Qué efectos pueden aparecer y cuáles son motivo para llamar\n- Qué no mezclar, como el alcohol con ciertos antibióticos\n\n**¿Cómo se paga?**\nNo hace falta seguro: el precio del medicamento te lo decimos antes de entregártelo y puedes pagar en efectivo, débito o crédito. Si estás por venir a consulta, revisa también las [promociones](/promociones) vigentes. Como la farmacia funciona junto a la consulta, la encuentras abierta en el mismo horario que la clínica: todos los días, de 9 AM a 9 PM.",
    "longDescriptionEn": "The pharmacy at Clínica Hispana Cruz 2 sits inside the clinic itself and does one specific job: handing you the medications prescribed during your visit, plus over-the-counter products. You finish with the medical team, pick up what they recommended and head home with your treatment already in hand.\n\n**How does it work?**\n- The medical team sees you and decides what treatment you need\n- They tell you which medication you'll get and what it costs\n- You receive it before you leave the building\n- Someone explains in Spanish or English how and when to take it\n\n**Why pick it up here?**\nWhen you're leaving with a fever, with pain or after a procedure like an [abscess drainage](/servicios/drenaje-abscesos), the last thing you want is to drive to another store and stand in another line. Here you start treatment right away, and if a dosing question comes up, the person handing you the medicine knows which visit you came from.\n\n**What over-the-counter products are there?**\nWe carry everyday items for common complaints such as pain, colds or allergies. What's on hand can change, so just ask for what you're looking for when you come in.\n\n**What do we explain when you get your medicine?**\n- How many times a day to take it and whether to take it with food\n- How long to keep going even once you feel better\n- Which side effects may show up and which ones mean you should call\n- What not to combine it with, like alcohol and certain antibiotics\n\n**How do you pay?**\nNo insurance needed: you hear the price of the medication before it's handed over, and you can pay with cash, debit or credit. If you're planning a visit, take a look at our current [promotions](/promociones) too. Because the pharmacy works alongside the clinic, it keeps the same hours: every day, 9 AM to 9 PM.",
    "icon": "Pill",
    "image": "/images/services/farmacia.webp",
    "category": "tratamientos",
    "keywords": [
      "farmacia en houston",
      "farmacia hispana houston",
      "farmacia cerca de mí houston",
      "farmacia dentro de clinica houston"
    ],
    "keywordsEn": [
      "pharmacy houston",
      "hispanic pharmacy houston",
      "pharmacy near me houston",
      "in-clinic pharmacy houston"
    ],
    "features": [
      "Entrega de los medicamentos indicados en la consulta",
      "Productos de venta libre",
      "Dosis y horarios explicados en español",
      "Precio claro antes de pagar"
    ],
    "featuresEn": [
      "Medications prescribed during your visit",
      "Over-the-counter products",
      "Dosing explained in Spanish or English",
      "Clear price before you pay"
    ],
    "highlighted": false,
    "order": 29
  }
];

export const PROMOTIONS: Promotion[] = [
  {
    slug: "examen-testosterona",
    title: "Revisa tu Testosterona",
    titleEn: "Testosterone Check",
    price: "$79",
    blurb:
      "¿Cansado, con menos energía o con menos deseo sexual? Revisa tu testosterona con examen de orina incluido y consulta médica gratis. Precio regular $220, ahora por solo $79.",
    blurbEn:
      "Tired, low on energy, or experiencing less sexual desire? Check your testosterone with a urine test included and a free medical consultation. Regular price $220, now only $79.",
    includes: [
      "Examen de testosterona",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Testosterone test",
      "Urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/examen-testosterona.webp",
    alt: "Promoción de examen de testosterona por $79 con examen de orina y consulta médica gratis en Clínica Hispana Cruz 2 Houston",
    altEn: "Testosterone test promotion for $79 with urine test and free medical consultation at Clínica Hispana Cruz 2 Houston",
    order: 0,
  },
  {
    slug: "salud-mamaria",
    title: "Evaluación Integral de Salud Mamaria",
    titleEn: "Comprehensive Breast Health Evaluation",
    price: "$175",
    blurb:
      "¿Hace cuánto no revisas tus senos? Evaluación integral de salud mamaria con ultrasonido mamario bilateral, examen general de sangre y consulta médica gratis. Precio regular $350, ahora por solo $175.",
    blurbEn:
      "How long since your last breast check? Comprehensive breast health evaluation with bilateral breast ultrasound, general blood test and a free medical consultation. Regular price $350, now only $175.",
    includes: [
      "Ultrasonido mamario bilateral",
      "Examen general de sangre",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Bilateral breast ultrasound",
      "General blood test",
      "Free medical consultation",
    ],
    image: "/images/promotions/salud-mamaria.webp",
    alt: "Promoción de evaluación integral de salud mamaria por $175 con ultrasonido mamario bilateral, examen general de sangre y consulta médica gratis en Clínica Hispana Cruz 2 Houston",
    altEn: "Comprehensive breast health evaluation promotion for $175 with bilateral breast ultrasound, general blood test and free medical consultation at Clínica Hispana Cruz 2 Houston",
    order: 1,
  },
  {
    slug: "chequeo-prostata",
    title: "Chequeo Completo de Próstata",
    titleEn: "Complete Prostate Checkup",
    price: "$149",
    blurb:
      "Chequea tu salud hoy y gana tranquilidad: PSA en sangre, ultrasonido prostático y examen de orina, con consulta gratis. Precio regular $300, ahora en promoción por $149.",
    blurbEn:
      "Check your health today and gain peace of mind: blood PSA, prostate ultrasound and urine test, with a free consultation. Regular price $300, now on promotion for $149.",
    includes: [
      "Examen de PSA (próstata) en sangre",
      "Ultrasonido prostático",
      "Examen de orina",
      "Consulta gratis",
    ],
    includesEn: [
      "Blood PSA (prostate) test",
      "Prostate ultrasound",
      "Urine test",
      "Free consultation",
    ],
    image: "/images/promotions/chequeo-prostata.webp",
    alt: "Promoción de chequeo completo de próstata por $149 con PSA, ultrasonido prostático y examen de orina en Clínica Hispana Cruz 2 Houston",
    altEn: "Complete prostate checkup promotion for $149 with PSA, prostate ultrasound and urine test at Clínica Hispana Cruz 2 Houston",
    order: 2,
  },
  {
    slug: "chequeo-mujer-ultrasonido",
    title: "Chequeo de la Mujer con Ultrasonido",
    titleEn: "Women's Checkup with Ultrasound",
    price: "$179",
    blurb:
      "¿Hace cuánto no revisas tu salud femenina? Chequeo completo con ultrasonido pélvico, Papanicolaou y examen de orina, más consulta médica gratis. Precio regular $300, ahora por solo $179.",
    blurbEn:
      "How long since you last checked your feminine health? Complete checkup with a pelvic ultrasound, Pap smear and urine test, plus a free medical consultation. Regular price $300, now only $179.",
    includes: [
      "Ultrasonido pélvico",
      "Examen de Papanicolaou",
      "Examen de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "Pelvic ultrasound",
      "Pap smear",
      "Urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-mujer-ultrasonido.webp",
    alt: "Promoción de chequeo completo de la mujer por $179 con ultrasonido pélvico, Papanicolaou y examen de orina en Clínica Hispana Cruz 2 Houston",
    altEn: "Complete women's checkup promotion for $179 with pelvic ultrasound, Pap smear and urine test at Clínica Hispana Cruz 2 Houston",
    order: 3,
  },
  {
    slug: "testosterona-baja",
    title: "Señales de Testosterona Baja",
    titleEn: "Signs of Low Testosterone",
    price: null,
    blurb:
      "¿Cansancio, menos deseo sexual y aumento de barriga? No siempre es la edad: podría ser testosterona baja. Un examen de sangre puede medir tus niveles, y detectar a tiempo hace la diferencia.",
    blurbEn:
      "Tiredness, less sexual desire and belly gain? It's not always your age: it could be low testosterone. A blood test can measure your levels, and catching it early makes the difference.",
    includes: [
      "Cansancio constante",
      "Menos deseo sexual",
      "Aumento de barriga",
      "Pérdida de fuerza o molestias musculares",
    ],
    includesEn: [
      "Constant tiredness",
      "Less sexual desire",
      "Belly gain",
      "Loss of strength or muscle discomfort",
    ],
    image: "/images/promotions/testosterona-baja.webp",
    alt: "Señales de testosterona baja como cansancio, menos deseo sexual y aumento de barriga, información de Clínica Hispana Cruz 2 Houston",
    altEn: "Signs of low testosterone such as tiredness, less sexual desire and belly gain, information from Clínica Hispana Cruz 2 Houston",
    order: 4,
  },
  {
    slug: "salud-prostata",
    title: "Señales de Alerta de la Próstata",
    titleEn: "Prostate Warning Signs",
    price: null,
    blurb:
      "Si orinar de noche ya te corta el sueño o el chorro sale más débil que antes, vale la pena revisarlo. Después de los 40 estos cambios son más comunes, y una consulta con el equipo médico ayuda a saber de dónde vienen.",
    blurbEn:
      "If trips to the bathroom keep waking you up or your stream is weaker than it used to be, it's worth a look. These changes are more common after 40, and a visit with the medical team helps find out where they come from.",
    includes: [
      "Chorro débil",
      "Dificultad para empezar a orinar",
      "Orinar varias veces de noche",
      "Hombres mayores de 40: presta atención",
    ],
    includesEn: [
      "Weak stream",
      "Difficulty starting to urinate",
      "Urinating several times at night",
      "Men over 40: pay attention",
    ],
    image: "/images/promotions/salud-prostata.webp",
    alt: "Señales de alerta de próstata agrandada como chorro débil y levantarse de noche a orinar, información de Clínica Hispana Cruz 2 Houston",
    altEn: "Enlarged prostate warning signs such as a weak stream and getting up at night to urinate, information from Clínica Hispana Cruz 2 Houston",
    order: 5,
  },
  {
    slug: "chequeo-completo-salud",
    title: "Chequeo General Completo",
    titleEn: "Complete General Checkup",
    price: "$99",
    blurb:
      "Chequeo preventivo completo con examen general de sangre, A1C (hemoglobina glicosilada), examen general de orina y consulta médica gratis. Valor regular $250, por tiempo limitado.",
    blurbEn:
      "A complete preventive checkup with a general blood panel, A1C (glycated hemoglobin), a general urine test and a free medical consultation. Regular value $250, for a limited time.",
    includes: [
      "Examen general de sangre",
      "A1C (hemoglobina glicosilada)",
      "Examen general de orina",
      "Consulta médica gratis",
    ],
    includesEn: [
      "General blood panel",
      "A1C (glycated hemoglobin)",
      "General urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-general-completo.webp",
    alt: "Promoción de chequeo general completo por $99 con examen de sangre, A1C y examen de orina en Clínica Hispana Cruz 2 Houston",
    altEn: "Complete general checkup promotion for $99 with blood work, A1C and urine test at Clínica Hispana Cruz 2 Houston",
    highlighted: true,
    order: 7,
  },
  {
    slug: "chequeo-completo-hombre",
    title: "Chequeo Completo del Hombre",
    titleEn: "Complete Men's Checkup",
    price: "$149",
    blurb:
      "Chequeo integral para hombres: PSA (próstata), testosterona y examen general de sangre, con examen de orina y consulta médica gratis. Promoción por tiempo limitado.",
    blurbEn:
      "A comprehensive men's checkup: PSA (prostate), testosterone and a general blood panel, with a free urine test and free medical consultation. Limited-time promotion.",
    includes: [
      "PSA (próstata)",
      "Testosterona",
      "Examen general de sangre",
      "Examen de orina gratis",
      "Consulta médica gratis",
    ],
    includesEn: [
      "PSA (prostate)",
      "Testosterone",
      "General blood panel",
      "Free urine test",
      "Free medical consultation",
    ],
    image: "/images/promotions/chequeo-completo-hombre.webp",
    alt: "Promoción de chequeo completo del hombre por $149 con PSA, testosterona y examen de sangre en Clínica Hispana Cruz 2 Houston",
    altEn: "Complete men's checkup promotion for $149 with PSA, testosterone and blood work at Clínica Hispana Cruz 2 Houston",
    highlighted: true,
    order: 8,
  },
  {
    slug: "examen-general",
    title: "Examen General",
    titleEn: "General Exam",
    price: "$89",
    blurb:
      "Examen general con examen de orina y consulta médica gratis. Una forma accesible de revisar tu salud, sin cita previa.",
    blurbEn:
      "A general exam with a urine test and free medical consultation. An affordable way to check on your health, no appointment needed.",
    includes: [
      "Examen general",
      "Examen de orina",
      "Consulta gratis",
    ],
    includesEn: [
      "General exam",
      "Urine test",
      "Free consultation",
    ],
    image: "/images/promotions/examen-general.webp",
    alt: "Promoción de examen general por $89 con examen de orina y consulta gratis en Clínica Hispana Cruz 2 Houston",
    altEn: "General exam promotion for $89 with urine test and free consultation at Clínica Hispana Cruz 2 Houston",
    highlighted: true,
    order: 9,
  },
  {
    slug: "perfil-hormonal-femenino",
    title: "Perfil Hormonal para Mujeres",
    titleEn: "Women's Hormone Panel",
    price: "$250",
    blurb:
      "Perfil hormonal femenino para evaluar desequilibrios hormonales, problemas menstruales, fertilidad, tiroides, menopausia y cambios hormonales. Exámenes confiables con resultados precisos.",
    blurbEn:
      "A women's hormone panel to evaluate hormonal imbalances, menstrual problems, fertility, thyroid, menopause and hormonal changes. Reliable testing with accurate results.",
    includes: [
      "Desequilibrios hormonales",
      "Problemas menstruales",
      "Fertilidad",
      "Tiroides",
      "Menopausia",
      "Cambios hormonales",
    ],
    includesEn: [
      "Hormonal imbalances",
      "Menstrual problems",
      "Fertility",
      "Thyroid",
      "Menopause",
      "Hormonal changes",
    ],
    image: "/images/promotions/perfil-hormonal-femenino.webp",
    alt: "Promoción de perfil hormonal para mujeres por $250 en Clínica Hispana Cruz 2 Houston",
    altEn: "Women's hormone panel promotion for $250 at Clínica Hispana Cruz 2 Houston",
    order: 10,
  },
  {
    slug: "perfil-hormonal-masculino",
    title: "Perfil Hormonal para Hombres",
    titleEn: "Men's Hormone Panel",
    price: "$200",
    blurb:
      "Perfil hormonal masculino para evaluar fatiga y cansancio, pérdida de masa muscular, disminución de la libido, estrés, problemas de sueño y aumento de grasa corporal.",
    blurbEn:
      "A men's hormone panel to evaluate fatigue, muscle loss, decreased libido, stress and irritability, sleep problems and increased body fat.",
    includes: [
      "Desequilibrios hormonales",
      "Fatiga y cansancio",
      "Pérdida de masa muscular",
      "Disminución de la libido",
      "Problemas de sueño",
      "Aumento de grasa corporal",
    ],
    includesEn: [
      "Hormonal imbalances",
      "Fatigue and tiredness",
      "Muscle mass loss",
      "Decreased libido",
      "Sleep problems",
      "Increased body fat",
    ],
    image: "/images/promotions/perfil-hormonal-masculino.webp",
    alt: "Promoción de perfil hormonal para hombres por $200 en Clínica Hispana Cruz 2 Houston",
    altEn: "Men's hormone panel promotion for $200 at Clínica Hispana Cruz 2 Houston",
    order: 11,
  },
  {
    slug: "salud-intima-femenina",
    title: "Salud Íntima Femenina",
    titleEn: "Women's Intimate Health",
    price: "$69",
    blurb:
      "¿Picazón, flujo o mal olor? No lo ignores, puede ser una infección. Paquete de salud íntima femenina con cultivo íntimo, consulta médica y examen de orina gratis.",
    blurbEn:
      "Itching, discharge or odor? Don't ignore it — it could be an infection. Women's intimate health package with intimate culture, medical consultation and free urine test.",
    includes: [
      "Cultivo íntimo",
      "Consulta médica",
      "Examen de orina gratis",
    ],
    includesEn: [
      "Intimate culture",
      "Medical consultation",
      "Free urine test",
    ],
    image: "/images/promotions/salud-intima-femenina.webp",
    alt: "Promoción de salud íntima femenina por $69 con cultivo íntimo y consulta médica en Clínica Hispana Cruz 2 Houston",
    altEn: "Women's intimate health promotion for $69 with intimate culture and medical consultation at Clínica Hispana Cruz 2 Houston",
    order: 12,
  },
  {
    slug: "salud-intima-masculina",
    title: "Salud Íntima Masculina",
    titleEn: "Men's Intimate Health",
    price: "$69",
    blurb:
      "¿Ardor al orinar? Paquete de salud íntima masculina con cultivo uretral, examen de orina y consulta médica. Atención discreta y profesional.",
    blurbEn:
      "Burning when urinating? Men's intimate health package with urethral culture, urine test and medical consultation. Discreet, professional care.",
    includes: [
      "Cultivo uretral",
      "Examen de orina",
      "Consulta médica",
    ],
    includesEn: [
      "Urethral culture",
      "Urine test",
      "Medical consultation",
    ],
    image: "/images/promotions/salud-intima-masculina.webp",
    alt: "Promoción de salud íntima masculina por $69 con cultivo uretral y consulta médica en Clínica Hispana Cruz 2 Houston",
    altEn: "Men's intimate health promotion for $69 with urethral culture and medical consultation at Clínica Hispana Cruz 2 Houston",
    order: 13,
  },
  {
    slug: "sangre-vitamina-b12",
    title: "General de Sangre + Vitamina B12",
    titleEn: "Blood Panel + Vitamin B12",
    price: "$99",
    blurb:
      "Examen general de sangre más inyección de vitamina B12 en una sola visita. Cuida tu salud y apoya tu energía y bienestar.",
    blurbEn:
      "A general blood panel plus a vitamin B12 injection in a single visit. Take care of your health and support your energy and wellness.",
    includes: [
      "Examen general de sangre",
      "Inyección de vitamina B12",
    ],
    includesEn: [
      "General blood panel",
      "Vitamin B12 injection",
    ],
    image: "/images/promotions/sangre-vitamina-b12.webp",
    alt: "Promoción de examen general de sangre más vitamina B12 por $99 en Clínica Hispana Cruz 2 Houston",
    altEn: "General blood panel plus vitamin B12 promotion for $99 at Clínica Hispana Cruz 2 Houston",
    highlighted: true,
    order: 14,
  },
  {
    slug: "dosis-vitamina-b12",
    title: "6 Dosis de Vitamina B12",
    titleEn: "6 Vitamin B12 Doses",
    price: "$150",
    blurb:
      "Paquete de 6 dosis de vitamina B12 con 50% de descuento (precio regular $300) y consulta médica gratis incluida. Ayuda a combatir el cansancio y apoya la producción de energía.",
    blurbEn:
      "A package of 6 vitamin B12 doses at 50% off (regular price $300) with a free medical consultation included. Helps fight fatigue and supports energy production.",
    includes: [
      "6 dosis de vitamina B12",
      "50% de descuento (precio regular $300)",
      "Consulta médica gratis incluida",
    ],
    includesEn: [
      "6 vitamin B12 doses",
      "50% off (regular price $300)",
      "Free medical consultation included",
    ],
    image: "/images/promotions/dosis-vitamina-b12.webp",
    alt: "Promoción de 6 dosis de vitamina B12 por $150 con consulta médica gratis en Clínica Hispana Cruz 2 Houston",
    altEn: "6 vitamin B12 doses promotion for $150 with free medical consultation at Clínica Hispana Cruz 2 Houston",
    order: 15,
  },
  {
    slug: "prueba-h-pylori",
    title: "Chequeo Estomacal con Prueba de H. Pylori",
    titleEn: "Stomach Checkup with H. Pylori Test",
    price: "$99",
    blurb:
      "¿Acidez, gases o inflamación? Tu estómago puede estar dando señales. Promoción especial con consulta médica, prueba de H. pylori y examen de orina.",
    blurbEn:
      "Heartburn, gas or bloating? Your stomach may be sending signals. Special promotion with medical consultation, H. pylori test and urine test.",
    includes: [
      "Consulta médica",
      "Prueba de H. pylori",
      "Examen de orina",
    ],
    includesEn: [
      "Medical consultation",
      "H. pylori test",
      "Urine test",
    ],
    image: "/images/promotions/prueba-h-pylori.webp",
    alt: "Promoción de chequeo estomacal con prueba de H. pylori por $99 en Clínica Hispana Cruz 2 Houston",
    altEn: "Stomach checkup with H. pylori test promotion for $99 at Clínica Hispana Cruz 2 Houston",
    order: 16,
  },
  {
    slug: "diagnostico-ets",
    title: "Diagnóstico Completo de ETS",
    titleEn: "Complete STD Testing",
    price: "$249",
    blurb:
      "Panel completo de detección de enfermedades de transmisión sexual: RPR (sífilis), VIH, herpes, clamidia y gonorrea. Atención confidencial y profesional. El diagnóstico es clave.",
    blurbEn:
      "Complete sexually transmitted disease screening panel: RPR (syphilis), HIV, herpes, chlamydia and gonorrhea. Confidential, professional care. Diagnosis is key.",
    includes: [
      "RPR (sífilis)",
      "VIH",
      "Herpes",
      "Clamidia",
      "Gonorrea",
    ],
    includesEn: [
      "RPR (syphilis)",
      "HIV",
      "Herpes",
      "Chlamydia",
      "Gonorrhea",
    ],
    image: "/images/promotions/diagnostico-ets.webp",
    alt: "Promoción de diagnóstico completo de enfermedades de transmisión sexual por $249 en Clínica Hispana Cruz 2 Houston",
    altEn: "Complete STD testing promotion for $249 at Clínica Hispana Cruz 2 Houston",
    order: 17,
  },
  {
    slug: "promocion-familiar",
    title: "Promoción Especial Familiar",
    titleEn: "Special Family Promotion",
    price: null,
    blurb:
      "Una visita para varios en la familia: a grandes y chicos les hacemos examen de orina y glucotest sin costo, y el chequeo general sale a bajo precio. En recepción te explican la membresía gratis de 1 año, con 20% de descuento y consultas gratis.",
    blurbEn:
      "One trip for the whole family: adults and kids get a urine test and a glucose finger-stick at no cost, and the general checkup is low-cost. Ask at the front desk about the free 1-year membership with 20% off and free consultations.",
    includes: [
      "Examen de orina gratis",
      "Glucosa (glucotest) gratis",
      "Chequeo médico general a bajo costo",
      "Servicio para adultos y niños",
      "Membresía gratis: 20% de descuento y consulta gratis por 1 año",
    ],
    includesEn: [
      "Free urine test",
      "Free glucose test",
      "Low-cost general medical checkup",
      "Care for adults and kids",
      "Free membership: 20% off and free consultations for 1 year",
    ],
    image: "/images/promotions/promocion-familiar.webp",
    alt: "Promoción especial familiar con examen de orina y glucosa gratis en Clínica Hispana Cruz 2 Houston",
    altEn: "Special family promotion with free urine and glucose tests at Clínica Hispana Cruz 2 Houston",
    order: 18,
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "cita-previa",
    question: "faq.q1",
    answer: "faq.a1",
  },
  {
    id: "sin-seguro",
    question: "faq.q2",
    answer: "faq.a2",
  },
  {
    id: "espanol",
    question: "faq.q3",
    answer: "faq.a3",
  },
  {
    id: "horarios",
    question: "faq.q4",
    answer: "faq.a4",
  },
  {
    id: "formas-pago",
    question: "faq.q5",
    answer: "faq.a5",
  },
  {
    id: "planes-pago",
    question: "faq.q6",
    answer: "faq.a6",
  },
  {
    id: "ubicacion-houston",
    question: "faq.q7",
    answer: "faq.a7",
  },
  {
    id: "examen-inmigracion",
    question: "faq.q8",
    answer: "faq.a8",
  },
  {
    id: "tiempo-espera",
    question: "faq.q9",
    answer: "faq.a9",
  },
  {
    id: "estacionamiento",
    question: "faq.q10",
    answer: "faq.a10",
  },
  {
    id: "clinica-cerca-de-mi",
    question: "faq.q11",
    answer: "faq.a11",
  },
  {
    id: "medico-primario",
    question: "faq.q12",
    answer: "faq.a12",
  },
];

export const NAV_ITEMS = [
  { label: "nav.home", href: "/" },
  { label: "nav.services", href: "/servicios" },
  { label: "nav.promotions", href: "/promociones" },
  { label: "nav.blog", href: "/blog" },
  { label: "nav.contact", href: "/#contacto" },
];

// Fecha del último cambio de contenido; usada como lastModified en sitemap.ts
export const CONTENT_LAST_UPDATED = "2026-09-06";

// Servicios destacados en el footer (los de mayor demanda en búsquedas)
export const FOOTER_SERVICE_LINKS = [
  { slug: "ginecologia", label: "Ginecología", labelEn: "Gynecology" },
  { slug: "infecciones-urinarias", label: "Infecciones Urinarias", labelEn: "Urinary Tract Infections" },
  { slug: "examenes-inmigracion", label: "Examen de Inmigración I-693", labelEn: "Immigration Exam I-693" },
  { slug: "examen-dot", label: "Examen DOT para CDL", labelEn: "DOT Physical Exam" },
  { slug: "examenes-sangre", label: "Exámenes de Sangre", labelEn: "Blood Tests" },
  { slug: "vacunas", label: "Vacunas", labelEn: "Vaccines" },
  { slug: "condiciones-cronicas", label: "Control de Diabetes e Hipertensión", labelEn: "Diabetes & Hypertension Care" },
  { slug: "enfermedades-transmision-sexual", label: "Pruebas de ETS", labelEn: "STD Testing" },
  { slug: "ultrasonido", label: "Ultrasonido", labelEn: "Ultrasound" },
  { slug: "salud-hombre", label: "Salud del Hombre", labelEn: "Men's Health" },
  { slug: "sueros-vitaminados", label: "Sueros Vitaminados", labelEn: "IV Vitamin Therapy" },
] as const;
