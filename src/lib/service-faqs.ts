interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQs {
  faqs: FAQ[];
  faqsEn: FAQ[];
}

export const SERVICE_FAQS: Record<string, ServiceFAQs> = {
  "condiciones-cronicas": {
    "faqs": [
      {
        "question": "¿Mis análisis de control son en ayunas?",
        "answer": "Si te toca glucosa en ayunas o perfil de lípidos, sí: llega con unas 8 a 12 horas sin comer, tomando solo agua. La A1C no necesita ayuno. Si usas insulina o pastillas para el azúcar, pregúntanos antes cómo manejar la dosis de esa mañana."
      },
      {
        "question": "¿Puedo seguir con el tratamiento que me dieron en mi país?",
        "answer": "Trae las cajas o las recetas que tengas. El equipo médico revisa cada medicamento, busca su equivalente en Estados Unidos si hace falta y decide si conviene mantenerlo o cambiarlo según tus análisis."
      },
      {
        "question": "¿Cada cuánto serán mis citas de control?",
        "answer": "Depende de qué tan estable estés. Al iniciar o cambiar un medicamento las revisiones son más seguidas; cuando tus cifras se mantienen en meta se espacian. Al final de cada visita te decimos cuándo volver y qué análisis tocan."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I need to fast before my labs?",
        "answer": "If you're having fasting glucose or a lipid panel, yes: come in after roughly 8 to 12 hours without food, drinking only water. The A1C doesn't require fasting. If you use insulin or diabetes pills, ask us first how to handle that morning's dose."
      },
      {
        "question": "Can I keep the treatment I was given in my home country?",
        "answer": "Bring the boxes or prescriptions you have. The medical team reviews each medicine, finds its U.S. equivalent if needed and decides whether to keep or change it based on your lab results."
      },
      {
        "question": "How often will my follow-up visits be?",
        "answer": "It depends on how stable you are. When a medicine is started or changed, visits are closer together; once your numbers stay on target, they're spaced out. At the end of each visit we tell you when to return and which labs are due."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "¿Debo saltarme el desayuno antes del análisis de tiroides?",
        "answer": "Para la TSH sola no hace falta ayuno. Si ese mismo viaje aprovechas para medir glucosa o colesterol, entonces sí conviene venir sin comer. Si ya tomas hormona tiroidea, pregunta si debes tomarla antes o después de la muestra."
      },
      {
        "question": "¿El hipotiroidismo se cura?",
        "answer": "En la mayoría de los casos se controla, no se cura: el tratamiento suele ser de por vida. Con la dosis correcta y análisis de control, la persona hace su vida normal."
      },
      {
        "question": "¿La tiroides puede hacerme subir de peso?",
        "answer": "Puede contribuir. Una tiroides lenta reduce el gasto de energía y favorece la retención de líquidos, pero rara vez explica por sí sola un aumento grande. Por eso revisamos también el azúcar, los hábitos y otras causas."
      }
    ],
    "faqsEn": [
      {
        "question": "Should I skip breakfast before a thyroid blood draw?",
        "answer": "TSH alone doesn't require fasting. If you're also checking glucose or cholesterol on the same trip, then it's best to come without eating. If you already take thyroid hormone, ask whether to take it before or after the blood draw."
      },
      {
        "question": "Can hypothyroidism be cured?",
        "answer": "In most cases it's controlled rather than cured, and treatment is usually lifelong. With the right dose and follow-up labs, people live a normal life."
      },
      {
        "question": "Can my thyroid make me gain weight?",
        "answer": "It can play a part. An underactive thyroid lowers energy use and promotes fluid retention, but it rarely explains a large weight gain on its own. That's why we also look at blood sugar, habits and other causes."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "¿Alergia o resfriado? ¿Cómo distingo uno del otro?",
        "answer": "Un catarro común se va solo en una o dos semanas y a veces trae fiebre o malestar general. La alergia no da fiebre, se repite en ciertas temporadas o lugares y casi siempre causa comezón en nariz y ojos. Si tienes dudas, la revisión lo aclara."
      },
      {
        "question": "¿Puedo tomar antihistamínicos todos los días?",
        "answer": "Muchos se pueden usar durante temporadas largas, pero algunos dan sueño y no todos son adecuados si tienes otras enfermedades o tomas otros medicamentos. En la consulta te decimos cuál te conviene y cómo tomarlo."
      },
      {
        "question": "¿Atienden a niños con alergias?",
        "answer": "Sí, atendemos a toda la familia. En los niños revisamos también si la congestión o la tos tienen relación con asma, y la dosis del medicamento se calcula según su edad y su peso."
      }
    ],
    "faqsEn": [
      {
        "question": "Allergy or a cold: how do I know which one I have?",
        "answer": "A cold usually lasts one or two weeks and can bring fever or body aches. Allergies don't cause fever, come back in certain seasons or places and almost always make your nose and eyes itch. If you're unsure, an exam will clear it up."
      },
      {
        "question": "Can I take antihistamines every day?",
        "answer": "Many can be used through long seasons, but some cause drowsiness and not all are right if you have other conditions or take other medicines. At the visit we tell you which one suits you and how to take it."
      },
      {
        "question": "Do you see children with allergies?",
        "answer": "Yes, we care for the whole family. With children we also check whether congestion or cough is linked to asthma, and the medicine dose is based on their age and weight."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "¿Cuándo conviene hacerme la prueba?",
        "answer": "Lo antes posible desde que empiezan los síntomas, sobre todo si tienes más de 65 años, estás embarazada o tienes diabetes, asma u otra enfermedad crónica. Si sale negativa muy al principio y sigues mal, el equipo médico puede repetirla o buscar otra causa."
      },
      {
        "question": "Si salgo positivo, ¿cuántos días me quedo en casa?",
        "answer": "La guía de los CDC indica regresar cuando los síntomas van mejorando y llevas un día completo sin fiebre sin tomar medicina para bajarla. En los días siguientes conviene usar cubrebocas y lavarte las manos seguido."
      },
      {
        "question": "¿Puedo traer a mi hijo con fiebre y tos?",
        "answer": "Sí, atendemos a toda la familia. Trae la lista de medicinas que le has dado y la temperatura más alta que ha tenido; esos datos ayudan a decidir el tratamiento."
      }
    ],
    "faqsEn": [
      {
        "question": "When should I get tested?",
        "answer": "As soon as possible once symptoms start, especially if you're over 65, pregnant or living with diabetes, asthma or another chronic condition. If it comes back negative very early and you still feel sick, the medical team may repeat it or look for another cause."
      },
      {
        "question": "After a positive test, how long should I stay home?",
        "answer": "CDC guidance says to return once your symptoms are improving overall and you've gone a full day without fever and without fever-reducing medicine. For the next few days, wear a mask and wash your hands often."
      },
      {
        "question": "Can I bring my child in for a fever and cough?",
        "answer": "Yes, we care for the whole family. Bring a list of the medicines you've given and the highest temperature your child has had; that helps us choose the treatment."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Cada cuánto se renueva el examen para deportes escolares?",
        "answer": "Para los deportes de la UIL se pide antes de competir por primera vez en secundaria y otra vez antes del primer y del tercer año de preparatoria. Otras ligas lo piden cada temporada; revisa lo que exige tu escuela o equipo."
      },
      {
        "question": "¿El examen escolar sirve también para deportes?",
        "answer": "Depende del formulario. Algunas escuelas aceptan un mismo examen para ambos, pero los deportes suelen tener su propio formato. Si traes los dos, se completan en una sola visita."
      },
      {
        "question": "¿Mi hijo puede hacer deporte si tiene asma?",
        "answer": "En la mayoría de los casos sí. Revisamos que su asma esté bien controlada y que tenga su inhalador de rescate, y anotamos en el formulario lo que la escuela necesita saber."
      }
    ],
    "faqsEn": [
      {
        "question": "How often does the school sports physical need renewing?",
        "answer": "For UIL sports it's required before first competing in middle school and again before the first and third years of high school. Other leagues ask for one every season; check what your school or team requires."
      },
      {
        "question": "Does the school physical also work for sports?",
        "answer": "It depends on the form. Some schools accept one exam for both, but sports usually have their own form. If you bring both, they're completed in a single visit."
      },
      {
        "question": "Can my child play sports with asthma?",
        "answer": "In most cases, yes. We check that their asthma is well controlled and that they have a rescue inhaler, and we note on the form what the school needs to know."
      }
    ]
  },
  "ginecologia": {
    "faqs": [
      {
        "question": "¿Cuánto cuesta una consulta de ginecología o un papanicolaou sin seguro?",
        "answer": "No necesitas seguro médico. Manejamos precios de pago directo, transparentes y accesibles; te decimos el costo antes de la consulta. Solemos tener paquetes de salud de la mujer en la página de promociones, por ejemplo el Chequeo de la Mujer con Ultrasonido por $179 (papanicolaou, ultrasonido pélvico, examen de orina y consulta) o Salud Íntima Femenina por $69 (cultivo, consulta y examen de orina). Los precios de promoción pueden cambiar; llámanos para confirmar."
      },
      {
        "question": "¿El personal de ginecología habla español?",
        "answer": "Sí. Toda la atención, desde la recepción hasta la consulta, es en español, para que puedas explicar tus síntomas y entender tu tratamiento sin barreras."
      },
      {
        "question": "¿Qué incluye el chequeo de mujer (well-woman exam)?",
        "answer": "Una consulta ginecológica con revisión de tu historial, papanicolaou, evaluación de síntomas como flujo, comezón o dolor, y cultivos vaginales si se necesitan. Si hace falta un especialista, te damos la referencia."
      },
      {
        "question": "Tengo flujo, comezón o mal olor. ¿Salgo de la consulta con tratamiento?",
        "answer": "Sí. Evaluamos tus síntomas, tomamos un cultivo si es necesario y, en la mayoría de los casos, sales con tu tratamiento en la misma visita. Si los síntomas son ardor al orinar, también hacemos examen de orina para descartar una infección urinaria."
      },
      {
        "question": "¿Puedo llegar sin cita a hacerme el papanicolaou?",
        "answer": "Sí, cualquier día de 9 de la mañana a 9 de la noche. Evita venir durante la regla; si quieres una hora fija para no esperar, llama y la apartamos."
      },
      {
        "question": "¿Hacen pruebas de enfermedades de transmisión sexual?",
        "answer": "Sí, ofrecemos pruebas y tratamiento de ETS de forma confidencial. Puedes pedirlas en la misma visita de ginecología."
      }
    ],
    "faqsEn": [
      {
        "question": "How much does a gynecology visit or Pap smear cost without insurance?",
        "answer": "You don't need health insurance. We offer transparent, affordable self-pay pricing and tell you the cost before your visit. We usually have women's health packages on the promotions page, for example the Women's Checkup with Ultrasound for $179 (Pap smear, pelvic ultrasound, urine test and consultation) or Women's Intimate Health for $69 (culture, consultation and urine test). Promotional prices may change; call us to confirm."
      },
      {
        "question": "Does the gynecology staff speak Spanish?",
        "answer": "Yes. Everything from the front desk to the exam room is in Spanish, so you can explain your symptoms and understand your treatment without barriers."
      },
      {
        "question": "What does the well-woman exam include?",
        "answer": "A gynecology visit with a review of your history, a Pap smear, evaluation of symptoms such as discharge, itching or pain, and vaginal cultures if needed. If you need a specialist, we provide the referral."
      },
      {
        "question": "I have discharge, itching or odor. Will I leave the visit with treatment?",
        "answer": "Yes. We evaluate your symptoms, take a culture if needed and, in most cases, you leave with treatment from the same visit. If your symptom is burning when urinating, we also run a urine test to rule out a UTI."
      },
      {
        "question": "Can I walk in for a Pap smear?",
        "answer": "Yes, any day from 9 AM to 9 PM. Try not to come during your period; if you'd rather have a set time and skip the wait, call and we'll hold one for you."
      },
      {
        "question": "Do you offer STD testing?",
        "answer": "Yes, we offer confidential STD testing and treatment. You can request it during the same gynecology visit."
      }
    ]
  },
  "prueba-embarazo": {
    "faqs": [
      {
        "question": "¿La prueba de la clínica es más confiable que la de la tienda?",
        "answer": "Las dos detectan la misma hormona. La ventaja de hacerla aquí es que el equipo médico interpreta el resultado contigo, revisa tus síntomas y te dice qué pasos seguir."
      },
      {
        "question": "¿Mi resultado es confidencial?",
        "answer": "Sí. Tu resultado es privado y solo lo hablamos contigo. Puedes venir sola o con la persona que tú elijas."
      },
      {
        "question": "¿Qué hago si tengo un sangrado leve con la prueba positiva?",
        "answer": "Un manchado ligero puede pasar al inicio, pero conviene revisarlo. Ven a la clínica para evaluarte; si el sangrado es abundante o hay dolor fuerte, ve a emergencias."
      }
    ],
    "faqsEn": [
      {
        "question": "Is the clinic test more reliable than a store-bought one?",
        "answer": "Both detect the same hormone. The advantage of testing here is that the medical team reads the result with you, reviews your symptoms and tells you what to do next."
      },
      {
        "question": "Is my result confidential?",
        "answer": "Yes. Your result is private and we only discuss it with you. You can come alone or with whoever you choose."
      },
      {
        "question": "What if I have light bleeding with a positive test?",
        "answer": "Light spotting can happen early on, but it should be checked. Come to the clinic to be evaluated; if bleeding is heavy or the pain is strong, go to the ER."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué hago si olvido una pastilla?",
        "answer": "Tómala en cuanto te acuerdes, aunque te toque tomar dos en un día, y sigue con las demás a tu hora de siempre. Si olvidaste dos o más seguidas, usa condón durante siete días y pregúntanos si necesitas anticoncepción de emergencia."
      },
      {
        "question": "¿Cada cuánto me pongo la inyección?",
        "answer": "Cada tres meses, unas 13 semanas. Si ya pasaron más de 15 semanas desde la última dosis, avísanos: puede hacer falta una prueba de embarazo antes de aplicar la siguiente."
      },
      {
        "question": "¿La inyección afecta mi fertilidad a futuro?",
        "answer": "No causa infertilidad, pero la fertilidad puede tardar varios meses en volver después de dejarla, más que con las pastillas. Si piensas embarazarte pronto, coméntalo al elegir el método."
      }
    ],
    "faqsEn": [
      {
        "question": "What if I miss a pill?",
        "answer": "Take it as soon as you remember, even if that means two in one day, and keep taking the rest at your usual time. If you missed two or more in a row, use condoms for seven days and ask us whether you need emergency contraception."
      },
      {
        "question": "How often do I get the shot?",
        "answer": "Every three months, about 13 weeks. If more than 15 weeks have passed since your last dose, let us know: a pregnancy test may be needed before the next one."
      },
      {
        "question": "Does the shot affect my future fertility?",
        "answer": "It doesn't cause infertility, but fertility can take several months to return after stopping it, longer than with the pill. If you plan to get pregnant soon, mention it when choosing a method."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Duele quitar el implante?",
        "answer": "Se siente el piquete de la anestesia local; después solo presión mientras se retira. Cuando pasa el efecto puede quedar una molestia leve que se controla con un analgésico común."
      },
      {
        "question": "¿Cuánto dura el procedimiento?",
        "answer": "El retiro en sí toma pocos minutos. Sumando la preparación y las indicaciones de cuidado, la visita es corta."
      },
      {
        "question": "¿Me pueden quitar un implante vencido?",
        "answer": "Sí, y conviene hacerlo: después de la fecha recomendada la protección ya no es confiable. Si no recuerdas cuándo te lo pusieron, la revisión ayuda a decidir qué hacer."
      }
    ],
    "faqsEn": [
      {
        "question": "Does implant removal hurt?",
        "answer": "You'll feel the pinch of the local anesthetic; after that, only pressure while it's taken out. Once the numbness wears off there may be mild soreness that a regular pain reliever handles."
      },
      {
        "question": "How long does the procedure take?",
        "answer": "The removal itself takes just a few minutes. Including the prep and after-care instructions, the visit is short."
      },
      {
        "question": "Can you remove an expired implant?",
        "answer": "Yes, and it's a good idea: past the recommended date its protection is no longer reliable. If you don't remember when it was placed, the exam helps decide what to do."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿El examen de próstata incluye tacto rectal?",
        "answer": "No necesariamente. El PSA se mide en sangre. Si el equipo médico considera útil un examen físico o un ultrasonido de próstata, te explica para qué sirve y tú decides."
      },
      {
        "question": "¿Cómo me preparo para el PSA?",
        "answer": "No necesitas ayuno. Evita eyacular y el ejercicio intenso, como andar en bicicleta, durante los dos días previos, porque pueden subir un poco el valor. Si también te mides la hormona masculina, ven por la mañana."
      },
      {
        "question": "¿A qué edad debo empezar a revisarme?",
        "answer": "Un chequeo general vale la pena a cualquier edad. Sobre el PSA, lo habitual es conversarlo desde los 50 a 55 años, y antes si tu padre o un hermano tuvo cáncer de próstata o si eres afroamericano."
      }
    ],
    "faqsEn": [
      {
        "question": "Does the prostate exam include a rectal exam?",
        "answer": "Not necessarily. PSA is measured in the blood. If the medical team thinks a physical exam or a prostate ultrasound would help, they explain why and you decide."
      },
      {
        "question": "How do I prepare for a PSA test?",
        "answer": "No fasting needed. Avoid ejaculation and hard exercise, such as cycling, for two days beforehand, since they can raise the value slightly. If you're also checking your male hormone level, come in the morning."
      },
      {
        "question": "At what age should I start getting checked?",
        "answer": "A general checkup is worth it at any age. For PSA, the usual time to discuss it is from about 50 to 55, and earlier if your father or a brother had prostate cancer or if you are African American."
      }
    ]
  },
  "examenes-sangre": {
    "faqs": [
      {
        "question": "¿Puedo hacerme análisis aunque no traiga una orden?",
        "answer": "Sí. Si no traes orden, el equipo médico te pregunta por tus síntomas, tu historial y el motivo del chequeo, y te recomienda las pruebas que tienen sentido en tu caso, para que no pagues por análisis que no necesitas."
      },
      {
        "question": "¿Qué análisis me convienen si nunca me he hecho un chequeo?",
        "answer": "Para un primer chequeo de adulto se suelen pedir biometría, química con glucosa y colesterol, y función de riñón e hígado. El equipo médico ajusta la lista según tu edad, tu peso y lo que haya en tu familia, como diabetes o presión alta."
      },
      {
        "question": "¿Puedo tomar café antes de un análisis en ayunas?",
        "answer": "Mejor no. El café, aunque sea sin azúcar, y los jugos pueden mover la glucosa y los triglicéridos. Agua natural sí puedes tomar, y de hecho ayuda a que la vena se encuentre con más facilidad durante la toma."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I get blood work without an order?",
        "answer": "Yes. If you don't bring an order, the medical team asks about your symptoms, your history and why you want the checkup, then recommends the tests that make sense for you, so you don't pay for labs you don't need."
      },
      {
        "question": "Which tests make sense if I've never had a checkup?",
        "answer": "A first adult checkup usually includes a CBC, a chemistry panel with glucose and cholesterol, and kidney and liver function. The medical team adjusts the list for your age, weight and family history, such as diabetes or high blood pressure."
      },
      {
        "question": "Can I drink coffee before a fasting blood test?",
        "answer": "Better not. Coffee, even black, and juice can shift your glucose and triglyceride numbers. Plain water is fine, and staying hydrated actually makes the vein easier to find during the draw."
      }
    ]
  },
  "infecciones-urinarias": {
    "faqs": [
      {
        "question": "¿Cómo sé si lo que tengo es una infección urinaria?",
        "answer": "Ardor al orinar, ganas constantes de ir al baño aunque salga poco, orina turbia o con mal olor, y dolor en la parte baja del abdomen. Si además tienes fiebre o dolor en la espalda baja, ven el mismo día: la infección puede estar llegando a los riñones."
      },
      {
        "question": "¿Salgo con el tratamiento el mismo día?",
        "answer": "Sí. Hacemos el examen de orina en la clínica, revisamos tus síntomas y, si hay infección, sales con tu tratamiento el mismo día."
      },
      {
        "question": "¿Cuánto cuesta el examen de orina y el tratamiento sin seguro?",
        "answer": "No necesitas seguro médico. Manejamos precios de pago directo, transparentes y accesibles; te informamos el costo antes de atenderte. En la página de promociones solemos tener paquetes desde $69 que incluyen examen de orina y consulta médica. Aceptamos efectivo y tarjetas."
      },
      {
        "question": "¿Dónde se analiza mi muestra de orina?",
        "answer": "El examen general de orina se procesa en la clínica durante tu visita, así que el equipo médico revisa el resultado contigo en la misma consulta."
      },
      {
        "question": "¿Puedo llegar sin cita si el ardor empezó hoy?",
        "answer": "Sí. No hace falta cita: ven cualquier día entre las 9 de la mañana y las 9 de la noche. Si puedes, no orines justo antes de llegar, así la muestra sale mejor."
      },
      {
        "question": "¿Qué hago si las infecciones urinarias me regresan seguido?",
        "answer": "Las infecciones repetidas merecen evaluación. Revisamos posibles causas, te damos indicaciones para prevenirlas y, si es necesario, hacemos estudios adicionales o te referimos con un especialista."
      }
    ],
    "faqsEn": [
      {
        "question": "How can I tell if it's a urinary tract infection?",
        "answer": "Burning when you urinate, a constant urge to go even if little comes out, cloudy or foul-smelling urine, and lower-abdomen pain. If you also have fever or lower-back pain, come in the same day: the infection may be reaching your kidneys."
      },
      {
        "question": "Will I leave with my treatment the same day?",
        "answer": "Yes. We run the urine test in the clinic, review your symptoms and, if there's an infection, you leave with your treatment the same day."
      },
      {
        "question": "How much do the urine test and treatment cost without insurance?",
        "answer": "You don't need health insurance. We offer transparent, affordable self-pay pricing and tell you the cost before your visit. We accept cash and cards. On the promotions page we usually have packages from $69 that include a urine test and medical consultation."
      },
      {
        "question": "Where is my urine sample tested?",
        "answer": "The urinalysis is processed in the clinic during your visit, so the medical team reviews the result with you in the same consultation."
      },
      {
        "question": "Can I walk in if the burning started today?",
        "answer": "Yes. No appointment is needed: come any day between 9 AM and 9 PM. If you can, avoid urinating right before you arrive so the sample is easier to collect."
      },
      {
        "question": "What if my UTIs keep coming back?",
        "answer": "Recurrent infections deserve evaluation. We look at possible causes, give you prevention guidance and, if needed, order additional tests or refer you to a specialist."
      }
    ]
  },
  "examen-heces": {
    "faqs": [
      {
        "question": "¿Puedo traer la muestra de mi bebé en el pañal?",
        "answer": "Sí, si la evacuación es sólida o pastosa: toma con la paletita la parte que no esté mojada de orina y pásala al frasco. Si es muy líquida y el pañal la absorbe, avísanos y te explicamos otra forma de recogerla."
      },
      {
        "question": "¿Debo dejar algún medicamento antes de recoger la muestra?",
        "answer": "Antiácidos, laxantes, aceite mineral o antibióticos recientes pueden dificultar el análisis. No los suspendas por tu cuenta: dile al equipo médico qué estás tomando y te indicará si conviene esperar antes de recoger la muestra."
      },
      {
        "question": "¿Hace falta entregar más de una muestra?",
        "answer": "A veces sí. Algunos parásitos no salen en todas las evacuaciones, así que el equipo médico puede pedirte muestras de días distintos para no pasar por alto una infección. Te damos un frasco para cada una."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I bring my baby's sample in the diaper?",
        "answer": "Yes, if the stool is formed or pasty: use the scoop to take a portion that isn't soaked with urine and put it in the container. If it's very watery and the diaper absorbs it, let us know and we'll explain another way to collect it."
      },
      {
        "question": "Should I stop any medicine before collecting the sample?",
        "answer": "Antacids, laxatives, mineral oil or recent antibiotics can interfere with the test. Don't stop them on your own: tell the medical team what you're taking and they'll let you know whether to wait before collecting the sample."
      },
      {
        "question": "Will I need to turn in more than one sample?",
        "answer": "Sometimes. Some parasites don't show up in every bowel movement, so the medical team may ask for samples from different days to avoid missing an infection. We give you a container for each one."
      }
    ]
  },
  "prueba-strep": {
    "faqs": [
      {
        "question": "¿Puede salir negativa aunque sí tenga estreptococo?",
        "answer": "Puede pasar, aunque no es lo habitual. Si la prueba sale negativa pero los síntomas apuntan con fuerza a estreptococo, el equipo médico lo toma en cuenta, te dice qué señales vigilar y cuándo volver a revisarte."
      },
      {
        "question": "¿Mi familia también tiene que hacerse la prueba?",
        "answer": "Solo quien tenga síntomas. El estreptococo se pasa por la saliva y las gotitas al toser, así que si alguien en casa empieza con fiebre o dolor al tragar, tráelo para hacerle su propia prueba. A quien está sano no se le da antibiótico."
      },
      {
        "question": "¿Puedo comer o hacer gárgaras antes de la prueba?",
        "answer": "Lo ideal es no comer, no beber y no hacer gárgaras con enjuague bucal en la media hora previa, porque pueden reducir la bacteria en la muestra. Si ya lo hiciste, avísanos y hacemos la prueba igual."
      }
    ],
    "faqsEn": [
      {
        "question": "Can the test come back negative even if I have strep?",
        "answer": "It can happen, though it isn't common. If the test is negative but your symptoms strongly suggest strep, the medical team takes that into account, tells you which warning signs to watch for and when to come back."
      },
      {
        "question": "Does my family need to be tested too?",
        "answer": "Only those with symptoms. Strep spreads through saliva and droplets from coughing, so if someone at home starts running a fever or hurting when they swallow, bring them in for their own test. Healthy people don't get antibiotics."
      },
      {
        "question": "Can I eat or gargle before the test?",
        "answer": "Ideally, don't eat, drink or gargle with mouthwash in the half hour before, since that can reduce the bacteria in the sample. If you already did, just let us know and we'll run the test anyway."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "¿Puedo hacerme la prueba si me pusieron la vacuna BCG?",
        "answer": "Sí. La BCG no impide hacer la prueba, aunque a veces provoca una reacción positiva. Cuéntale al equipo médico si la recibiste y, si el resultado sale positivo, te explica qué estudio ayuda a aclarar si se debe a la vacuna o al contacto con la bacteria."
      },
      {
        "question": "Se me pasó la fecha de lectura, ¿qué hago?",
        "answer": "Pasada la ventana de lectura, la reacción ya no se puede interpretar con seguridad y la prueba se tiene que repetir desde el principio. Apunta la fecha y la hora que te damos al aplicarla y pon una alarma en el teléfono."
      },
      {
        "question": "¿Puedo bañarme o hacer ejercicio con la prueba puesta?",
        "answer": "Sí. Puedes bañarte, trabajar y hacer ejercicio con normalidad. Solo evita rascar, frotar o tapar la zona con una curita, y no le pongas crema; si te da comezón, una compresa fría ayuda."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I take the test if I had the BCG vaccine?",
        "answer": "Yes. BCG doesn't rule out the test, although it can sometimes cause a positive reaction. Tell the medical team if you received it, and if the result is positive, they'll explain which test can help sort out whether it's from the vaccine or from exposure."
      },
      {
        "question": "I missed my reading. Now what?",
        "answer": "Once the reading window has passed, the reaction can no longer be judged reliably and the test has to be started over. Write down the date and time we give you when it's placed, and set a reminder on your phone."
      },
      {
        "question": "Can I shower or work out with the test on my arm?",
        "answer": "Yes. You can shower, work and exercise as usual. Just avoid scratching, rubbing or covering the spot with a bandage, and don't put lotion on it; if it itches, a cold compress helps."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Cuánto tiempo después de una relación de riesgo me hago la prueba?",
        "answer": "Depende de la infección: algunas se detectan pronto y otras tardan unas semanas en aparecer en el análisis. Ven cuanto antes para que el equipo médico valore tu caso; si es demasiado pronto para alguna prueba, te dirá cuándo repetirla."
      },
      {
        "question": "¿Mi pareja tiene que venir también?",
        "answer": "Es lo recomendable si tu resultado sale positivo, porque si solo se trata uno de los dos la infección puede regresar. Tu pareja puede venir a su propia consulta, y lo que hablamos contigo no se comparte con nadie sin tu permiso."
      },
      {
        "question": "¿Una prueba de orina basta para todo?",
        "answer": "No. La orina sirve para algunas infecciones, pero otras se buscan en sangre o con un hisopado de una llaga o secreción. Por eso el equipo médico pregunta primero por tus síntomas y tu exposición antes de decidir qué muestras tomar."
      }
    ],
    "faqsEn": [
      {
        "question": "How soon after unprotected sex does testing make sense?",
        "answer": "It depends on the infection: some show up early and others take a few weeks to appear on a test. Come in as soon as you can so the medical team can assess your situation; if it's too early for a particular test, they'll tell you when to repeat it."
      },
      {
        "question": "Does my partner need to come in too?",
        "answer": "It's a good idea if your result is positive, because if only one of you is treated the infection can come back. Your partner can book their own visit, and what we discuss with you isn't shared with anyone without your permission."
      },
      {
        "question": "Is a urine test enough to check for everything?",
        "answer": "No. Urine works for some infections, but others are tested with blood or a swab from a sore or discharge. That's why the medical team asks about your symptoms and exposure first, then decides which samples to take."
      }
    ]
  },
  "examen-alcohol-drogas": {
    "faqs": [
      {
        "question": "¿Qué pasa si salgo positivo por un medicamento recetado?",
        "answer": "Por eso preguntamos qué tomas antes de la prueba. Trae la caja o la receta y avísanos antes de dar la muestra: así ese dato queda anotado en tu expediente y puedes explicarlo si tu empleador pregunta por el resultado."
      },
      {
        "question": "¿Puedo hacerme la prueba si tomé alcohol anoche?",
        "answer": "Puedes hacerla, pero la prueba de alcohol puede detectarlo según cuánto y a qué hora bebiste. Si es un requisito de trabajo, lo prudente es no tomar antes del examen. Dile la verdad al equipo médico para que sepa cómo interpretar el resultado."
      },
      {
        "question": "¿Puedo llevar la muestra de orina hecha desde casa?",
        "answer": "No. Para que el resultado tenga validez, la muestra se toma aquí, el mismo momento en que te identificas. Llega con ganas de orinar, sin haber tomado demasiada agua, y el personal te indica el procedimiento."
      }
    ],
    "faqsEn": [
      {
        "question": "What if I test positive because of a prescription?",
        "answer": "That's why we ask what you take before the test. Bring the box or the prescription and tell us before giving the sample, so it's noted in your record and you can explain it if your employer asks about the result."
      },
      {
        "question": "Can I take the test if I drank alcohol last night?",
        "answer": "You can, but the alcohol test may pick it up depending on how much and how late you drank. If it's a job requirement, the safe move is not to drink beforehand. Be honest with the medical team so they know how to read the result."
      },
      {
        "question": "Can I bring a urine sample from home?",
        "answer": "No. A sample from home can't be verified, so we collect it on site once we've checked your ID. Come in needing to go, without having had too much water, and our staff will walk you through the steps."
      }
    ]
  },
  "electrocardiograma": {
    "faqs": [
      {
        "question": "¿Un EKG normal significa que mi corazón está perfecto?",
        "answer": "No necesariamente. El EKG muestra cómo late el corazón durante esos minutos; un problema que aparece solo con el esfuerzo o de vez en cuando puede no verse. Por eso el equipo médico lo interpreta junto con tus síntomas y tu historial."
      },
      {
        "question": "¿Me sirve para un examen de trabajo o antes de una cirugía?",
        "answer": "Sí, es un estudio que con frecuencia piden antes de una cirugía programada y en exámenes laborales o deportivos. Trae el formulario que te dieron para que el reporte incluya justo lo que necesitan revisar."
      },
      {
        "question": "¿Puedo hacerme un electrocardiograma si estoy embarazada?",
        "answer": "Sí. El EKG solo capta las señales eléctricas que ya produce tu corazón; no emite radiación ni manda corriente a tu cuerpo. Dile al equipo médico cuántas semanas de embarazo tienes para tenerlo en cuenta al leer el trazo."
      }
    ],
    "faqsEn": [
      {
        "question": "Does a normal EKG mean my heart is perfect?",
        "answer": "Not necessarily. An EKG shows how your heart beats during those few minutes; a problem that only appears with exertion or comes and goes may not show up. That's why the medical team reads it alongside your symptoms and history."
      },
      {
        "question": "Can I use it for a work exam or before surgery?",
        "answer": "Yes, it's often requested before a scheduled surgery and for work or sports physicals. Bring the form you were given so the report covers exactly what they need to see."
      },
      {
        "question": "Can I have an EKG while pregnant?",
        "answer": "Yes. An EKG only picks up the electrical signals your heart already makes; it doesn't use radiation or send current into your body. Tell the medical team how far along you are so they can factor it in when reading the tracing."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿Por qué tengo que ir con la vejiga llena al ultrasonido pélvico?",
        "answer": "Porque la orina acumulada empuja el intestino hacia arriba y deja ver el útero y los ovarios con más claridad. Toma agua antes del estudio y aguanta las ganas; si orinas antes, puede que haya que esperar a que la vejiga se llene otra vez."
      },
      {
        "question": "¿El gel mancha la ropa?",
        "answer": "No. Es un gel a base de agua que se limpia con una toalla de papel al terminar. Aun así, conviene llevar ropa holgada de dos piezas para descubrir solo la zona que se va a revisar y estar más cómoda."
      },
      {
        "question": "¿El ultrasonido sirve para buscar piedras en la vesícula o los riñones?",
        "answer": "Sí, es un estudio útil para revisar la vesícula y los riñones cuando hay dolor en la barriga o en la espalda. Si las imágenes no bastan para aclarar la causa, el equipo médico te explica qué otro estudio conviene y dónde hacerlo."
      }
    ],
    "faqsEn": [
      {
        "question": "Why do I need a full bladder for a pelvic ultrasound?",
        "answer": "Because a full bladder pushes the bowel up and out of the way, giving a clearer view of the uterus and ovaries. Drink water before the scan and hold it; if you go beforehand, we may need to wait for your bladder to fill up again."
      },
      {
        "question": "Will the gel stain my clothes?",
        "answer": "No. It's a water-based gel that wipes off with a paper towel when we're done. Still, loose two-piece clothing makes it easier to uncover only the area being scanned and keeps you more comfortable."
      },
      {
        "question": "Can an ultrasound check for gallstones or kidney stones?",
        "answer": "Yes, it's a useful scan for looking at the gallbladder and kidneys when you have belly or back pain. If the images don't explain the cause, the medical team tells you which other test makes sense and where to get it."
      }
    ]
  },
  "examen-dot": {
    "faqs": [
      {
        "question": "¿Puedo pasar el examen DOT si me inyecto insulina?",
        "answer": "Es posible, pero antes tu médico de cabecera tiene que llenar el formulario federal de evaluación para conductores que usan insulina, y debes traerlo al examen. Sin ese documento no se puede emitir el certificado."
      },
      {
        "question": "¿Qué pasa si no paso la prueba de la vista?",
        "answer": "Muchas veces basta con unos lentes con la graduación al día. Ve a tu óptica, actualiza la receta de tus lentes y regresa: el examen de la vista se repite con los lentes que vas a usar para manejar."
      },
      {
        "question": "Tengo apnea del sueño, ¿me pueden certificar?",
        "answer": "Con un tratamiento bien llevado, muchas veces sí. Si usas CPAP, trae el reporte de uso que te da tu proveedor del aparato; el equipo médico revisa que lo uses con regularidad, y la vigencia del certificado puede ser más corta."
      }
    ],
    "faqsEn": [
      {
        "question": "I'm on insulin. Can I still get DOT certified?",
        "answer": "It's possible, but first the clinician who manages your diabetes needs to fill out the federal assessment form for insulin-treated drivers, and you have to bring it to the exam. Without that form, the certificate can't be issued."
      },
      {
        "question": "What happens if I fail the vision test?",
        "answer": "Often all you need is glasses with an up-to-date prescription. Visit your optometrist, update your lenses and come back: the vision test is repeated with the glasses you'll wear while driving."
      },
      {
        "question": "I have sleep apnea. Can I still get certified?",
        "answer": "With well-managed treatment, often yes. If you use a CPAP, bring the usage report from your equipment provider; the medical team checks that you use it regularly, and your certificate may be issued for a shorter period."
      }
    ]
  },
  "examenes-inmigracion": {
    "faqs": [
      {
        "question": "¿Quién firma mi Formulario I-693 en Clínica Hispana Cruz 2?",
        "answer": "Lo firma un Civil Surgeon designado por USCIS. Al terminar todos los pasos del examen te entregamos el formulario dentro de un sobre sellado, que no debes abrir: así lo exige USCIS para aceptarlo."
      },
      {
        "question": "¿Qué papeles traigo el día del examen de inmigración?",
        "answer": "Una identificación con foto (pasaporte o tarjeta consular), tu cartilla o registro de vacunas si lo tienes, la lista de tus medicamentos y, si te lo pidieron, el número de caso. Si no tienes la cartilla, el equipo médico te orienta sobre las vacunas que faltan."
      },
      {
        "question": "¿Puedo venir a hacer el I-693 sin cita y sin seguro?",
        "answer": "Sí. Puedes llegar cualquier día entre las 9 de la mañana y las 9 de la noche, o llamar para apartar una hora. El examen es de pago directo: te damos el precio completo antes de empezar, sin cargos sorpresa."
      }
    ],
    "faqsEn": [
      {
        "question": "Who signs my Form I-693 at Clínica Hispana Cruz 2?",
        "answer": "A USCIS-designated civil surgeon signs it. Once every step of the exam is done, you receive the form inside a sealed envelope. Do not open it: USCIS only accepts it sealed."
      },
      {
        "question": "What should I bring to my immigration medical exam?",
        "answer": "A photo ID (passport or consular card), your vaccination record if you have one, a list of the medicines you take and your case number if you were given one. Without a vaccine record, the medical team will tell you which shots are still needed."
      },
      {
        "question": "Can I get the I-693 exam as a walk-in, without insurance?",
        "answer": "Yes. Come any day between 9 AM and 9 PM, or call ahead to hold a time. The exam is self-pay, and we quote the full price before we start, so there are no surprise charges."
      }
    ]
  },
  "vacunas": {
    "faqs": [
      {
        "question": "¿Puedo vacunarme contra la gripe si estoy resfriado?",
        "answer": "Depende de cómo te sientas. Un resfriado leve sin fiebre no siempre impide vacunarte, pero si tienes fiebre o te sientes muy mal, el equipo médico puede recomendarte esperar a que mejores. Te lo dicen al revisarte antes de la inyección."
      },
      {
        "question": "¿Cada cuánto necesito el refuerzo del tétanos?",
        "answer": "En adultos, la pauta general es un refuerzo cada diez años, y puede adelantarse si sufres una herida sucia o profunda y el último fue hace tiempo. Si no recuerdas la fecha, el equipo médico te orienta durante la consulta."
      },
      {
        "question": "¿Puedo ponerme la de la gripe y la del tétanos en la misma visita?",
        "answer": "Por lo general sí: se pueden aplicar en la misma consulta, una en cada brazo si lo prefieres. El equipo médico lo confirma después de revisar tu historial de vacunas y cómo te sientes ese día."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I get a flu shot if I have a cold?",
        "answer": "It depends on how you feel. A mild cold without fever doesn't always rule it out, but if you have a fever or feel quite sick, the medical team may suggest waiting until you're better. They'll tell you when they check you before the shot."
      },
      {
        "question": "How many years can go by between tetanus boosters?",
        "answer": "For adults, the general guideline is a booster every ten years, sometimes sooner if you get a dirty or deep wound and your last dose was a while ago. If you don't remember the date, the medical team will guide you at the visit."
      },
      {
        "question": "Can I get the flu and tetanus shots at the same visit?",
        "answer": "Usually yes. Both can be given during one visit, one in each arm if you like. The medical team confirms it after reviewing your vaccine history and how you're feeling that day."
      }
    ]
  },
  "sueros-vitaminados": {
    "faqs": [
      {
        "question": "¿Me pueden decir que no aunque yo pida el suero?",
        "answer": "Sí. Si en la valoración aparece algo que lo hace poco seguro para ti, como ciertos problemas del corazón o del riñón, el equipo médico te explica el motivo y te sugiere qué hacer en su lugar. La decisión se toma pensando en tu salud."
      },
      {
        "question": "¿Puedo preguntar qué me van a aplicar antes de empezar?",
        "answer": "Claro. Antes de colocar la vía, pregunta todo lo que quieras sobre la solución y por qué se eligió para ti. El equipo médico te lo explica en español, sin prisas, y si no te convence puedes decidir no seguir."
      },
      {
        "question": "¿Qué hago si me siento mal durante la aplicación?",
        "answer": "Avisa enseguida al personal que está contigo. Mareo, ardor en el brazo, náuseas o dificultad para respirar son motivo para pausar. El equipo revisa qué pasa y decide si se ajusta, se detiene o necesitas otra atención."
      }
    ],
    "faqsEn": [
      {
        "question": "Can the clinic say no even if I ask for a drip?",
        "answer": "Yes. If the screening turns up something that makes it unsafe for you, such as certain heart or kidney problems, the medical team explains why and suggests what to do instead. The call is made with your health in mind."
      },
      {
        "question": "Can I ask what's in the bag before we start?",
        "answer": "Of course. Before the line goes in, ask anything you want about the solution and why it was chosen for you. The medical team walks you through it in Spanish or English, without rushing, and you're free to decide not to go ahead."
      },
      {
        "question": "What should I do if I feel unwell during the drip?",
        "answer": "Tell the staff member with you right away. Dizziness, burning in the arm, nausea or trouble breathing are all reasons to pause. The team checks what's happening and decides whether to adjust it, stop it or get you other care."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "¿Ya es tarde para coser un corte que me hice ayer?",
        "answer": "No necesariamente, pero entre más tiempo pasa, más difícil es cerrar la herida con seguridad, porque sube el riesgo de infección. Ven cuanto antes; si ya no conviene coserla, el equipo médico la limpia y te indica otra forma de tratarla."
      },
      {
        "question": "¿Se va a notar mucho la cicatriz?",
        "answer": "Toda herida deja alguna marca, y su aspecto depende de la zona, la profundidad y cómo la cuides. Cerrarla bien y pronto, mantenerla limpia y protegerla del sol mientras madura ayuda a que la cicatriz quede más discreta."
      },
      {
        "question": "¿Puedo mojar los puntos al bañarme?",
        "answer": "El equipo médico te dice en la consulta cuándo puedes mojar la herida según dónde está. En general se pide mantenerla limpia y seca al principio, secarla con suavidad sin tallar y no meterla en albercas ni tinas hasta que te quiten los puntos."
      }
    ],
    "faqsEn": [
      {
        "question": "Is it too late to stitch a cut I got yesterday?",
        "answer": "Not necessarily, but the longer you wait, the harder it is to close the wound safely, because the risk of infection goes up. Come in as soon as you can; if stitching no longer makes sense, the medical team cleans it and explains another way to treat it."
      },
      {
        "question": "Will the scar be very noticeable?",
        "answer": "Every wound leaves some kind of mark, and how it looks depends on the spot, the depth and your aftercare. Closing it well and early, keeping it clean and shielding it from the sun while it matures all help the scar fade."
      },
      {
        "question": "Can I get my stitches wet in the shower?",
        "answer": "The medical team tells you at the visit when the wound can get wet, based on where it is. Usually you keep it clean and dry at first, pat it dry gently without rubbing, and stay out of pools and bathtubs until the stitches come out."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Cada cuánto debo venir a que me curen la herida?",
        "answer": "Depende del tamaño, la profundidad y cómo va sanando. Algunas heridas necesitan revisiones frecuentes al principio y luego más espaciadas. Al terminar cada visita, el equipo médico te indica cuándo te toca la siguiente curación."
      },
      {
        "question": "¿Me pueden quitar aquí puntos que me pusieron en otro lugar?",
        "answer": "Sí, revisamos la herida y retiramos los puntos si ya es momento. Si la tienes, trae la hoja de indicaciones que te dieron donde te cosieron, para saber qué tipo de puntos son y cuándo te los pusieron."
      },
      {
        "question": "¿Qué hago si la herida huele mal o supura?",
        "answer": "Son señales de que podría haber infección. No la tapes con más vendas ni esperes a que mejore sola: ven para que el equipo médico la limpie y valore si necesitas tratamiento. Si además tienes fiebre alta o escalofríos, busca atención de emergencia."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I come in to have the wound dressed?",
        "answer": "It depends on the size, the depth and how it's healing. Some wounds need frequent checks at first and then fewer as they improve. At the end of each visit, the medical team tells you when your next dressing change is due."
      },
      {
        "question": "Can you remove stitches that were put in somewhere else?",
        "answer": "Yes, we check the wound and take the stitches out if it's time. If you have it, bring the instruction sheet from the place that stitched you, so we know what kind of sutures they used and when they went in."
      },
      {
        "question": "What should I do if the wound smells bad or is oozing?",
        "answer": "Those are signs of a possible infection. Don't just pile on more bandages or wait for it to clear up: come in so the medical team can clean it and decide whether you need treatment. If you also have a high fever or chills, get emergency care."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Me pueden quitar un lunar solo porque no me gusta cómo se ve?",
        "answer": "Sí, muchas personas lo piden por estética o porque les estorba. Aun así, el equipo médico lo revisa antes; si el lunar cambió de color o de forma, o sangra, te lo explica y decide contigo la mejor manera de manejarlo."
      },
      {
        "question": "¿Puede volver a salir un quiste o un lipoma después de quitarlo?",
        "answer": "Puede pasar, sobre todo con los quistes si queda parte de la pared que los forma; por eso se intenta retirarlos completos. Si vuelves a notar un bulto en la misma zona, regresa para que el equipo médico lo revise."
      },
      {
        "question": "¿Puedo manejar después del procedimiento?",
        "answer": "Como se usa anestesia local, normalmente sí, porque no te duerme ni te deja aturdido. Si la herida queda en una mano, un pie o una zona que necesitas mover para manejar, pregunta al equipo si conviene venir acompañado."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I have a mole removed just because I don't like how it looks?",
        "answer": "Yes, plenty of people ask for cosmetic reasons or because it gets in the way. The medical team still examines it first; if the mole has changed color or shape, or bleeds, they explain what that means and decide with you how best to handle it."
      },
      {
        "question": "Can a cyst or lipoma come back after removal?",
        "answer": "It can happen, especially with cysts if part of the sac that forms them stays behind, which is why we try to take them out whole. If you notice a lump in the same spot again, come back and have the medical team look at it."
      },
      {
        "question": "Can I drive home after the procedure?",
        "answer": "Since only local anesthetic is used, usually yes; it doesn't put you to sleep or leave you groggy. If the wound is on a hand, a foot or somewhere you need to move to drive, ask the team whether you should bring someone along."
      }
    ]
  },
  "drenaje-abscesos": {
    "faqs": [
      {
        "question": "¿Voy a necesitar antibiótico después del drenaje?",
        "answer": "No siempre. En muchos abscesos pequeños el drenaje es el tratamiento principal. El equipo médico decide si hace falta antibiótico según el tamaño, cómo está la piel alrededor y si tienes fiebre o diabetes; si lo necesitas, te lo entregan al terminar la consulta."
      },
      {
        "question": "¿Qué significa que los abscesos se me repitan?",
        "answer": "Pueden repetirse por bacterias que viven en la piel, roce constante, vellos encarnados, sudor o glucosa alta. Si te pasa seguido, coméntalo en la consulta: el equipo médico puede buscar posibles causas y darte medidas para prevenirlos."
      },
      {
        "question": "¿Puedo ir a trabajar después de que me lo drenen?",
        "answer": "Muchas personas vuelven pronto a sus actividades, pero depende de dónde está la herida y del tipo de trabajo. Si en tu trabajo hay suciedad, sudor o roce en esa zona, el equipo médico te explica cómo protegerla y cuándo es prudente regresar."
      }
    ],
    "faqsEn": [
      {
        "question": "Will I need antibiotics after the drainage?",
        "answer": "Not always. For many small abscesses, draining them is the main treatment. The medical team decides whether you need an antibiotic based on the size, the skin around it and whether you have a fever or diabetes; if you do, you get it before you leave."
      },
      {
        "question": "Why do I keep getting abscesses?",
        "answer": "They can recur because of bacteria that live on the skin, constant friction, ingrown hairs, sweat or high blood sugar. If it happens often, bring it up at your visit: the medical team can look into possible causes and give you ways to prevent them."
      },
      {
        "question": "Can I go back to work after the drainage?",
        "answer": "Many people get back to their routine fairly soon, but it depends on where the wound is and what kind of work you do. If your job involves dirt, sweat or rubbing in that area, the medical team explains how to protect it and when it's sensible to return."
      }
    ]
  },
  "unas-encarnadas": {
    "faqs": [
      {
        "question": "¿Me van a quitar toda la uña?",
        "answer": "Casi nunca. Lo habitual es retirar solo la orilla que se clava en la piel y dejar el resto de la uña. El equipo médico te explica antes cuánto hay que quitar según lo enterrada que esté y si hay infección."
      },
      {
        "question": "¿La uña encarnada puede volver a salir?",
        "answer": "Sí, sobre todo si sigues usando zapatos apretados o cortas las uñas en curva. Cortarlas rectas y usar calzado con espacio para los dedos ayuda. Si te pasa seguido en la misma orilla, el equipo médico puede hablar contigo de otras opciones."
      },
      {
        "question": "¿Cuándo puedo volver a usar zapatos cerrados?",
        "answer": "Depende de cómo vaya sanando el dedo. Al principio conviene un calzado abierto o muy holgado que no apriete el vendaje. En la revisión, el equipo médico te dice cuándo puedes volver a tus zapatos de siempre o a tu bota de trabajo."
      }
    ],
    "faqsEn": [
      {
        "question": "Will you take off the whole nail?",
        "answer": "Rarely. The usual approach is to remove only the edge that's digging into the skin and leave the rest of the nail alone. The medical team explains beforehand how much needs to come off, depending on how deep it is and whether it's infected."
      },
      {
        "question": "Can an ingrown toenail come back?",
        "answer": "Yes, especially if you keep wearing tight shoes or trimming your nails in a curve. Cutting them straight across and choosing shoes with room for your toes helps. If the same edge keeps acting up, the medical team can talk with you about other options."
      },
      {
        "question": "When can I wear closed shoes again?",
        "answer": "That depends on how the toe is healing. At first, open or very loose footwear that doesn't press on the bandage is best. At your follow-up, the medical team tells you when it's fine to go back to your regular shoes or work boots."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Puedo comprar medicamentos sin pasar a consulta?",
        "answer": "Los productos de venta libre, sí. Los medicamentos que requieren indicación médica se entregan solo después de una consulta en la clínica, cuando el equipo médico decide que los necesitas; así se revisa primero qué tienes y qué te conviene."
      },
      {
        "question": "¿Y si tengo una reacción a lo que me dieron?",
        "answer": "Si notas ronchas, hinchazón de cara o labios o dificultad para respirar, deja de tomarlo y busca emergencias de inmediato. Para molestias leves, como náuseas o malestar de estómago, llama a la clínica: el equipo médico te dice si se ajusta o se cambia."
      },
      {
        "question": "¿Conviene traer a la consulta los medicamentos que ya tomo?",
        "answer": "Sí, y mucho. Trae las cajas o frascos de lo que tomas, incluidos suplementos y remedios naturales. Así el equipo médico confirma que lo que te indique no choque con tu tratamiento actual antes de que pases a recogerlo."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I buy medication without seeing the medical team?",
        "answer": "Over-the-counter products, yes. Medications that need a medical order are only handed out after a visit at the clinic, once the medical team decides you need them; that way they check what's going on and what suits you first."
      },
      {
        "question": "What should I do if a medication disagrees with me?",
        "answer": "If you notice hives, swelling of the face or lips, or trouble breathing, stop taking it and get emergency care right away. For milder issues like nausea or an upset stomach, call the clinic and the medical team will tell you whether to adjust or switch it."
      },
      {
        "question": "Should I bring the medications I already take to my visit?",
        "answer": "Yes, it really helps. Bring the boxes or bottles of everything you take, including supplements and herbal remedies. That lets the medical team make sure nothing new clashes with your current treatment before you pick it up."
      }
    ]
  }
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
