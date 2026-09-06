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
        "question": "¿Cada cuánto debo hacerme exámenes de control?",
        "answer": "Depende de tu condición; por lo general cada 3 a 6 meses para diabetes, presión o colesterol. Te damos un plan de seguimiento personalizado."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How often should I get control labs?",
        "answer": "It depends on your condition; usually every 3 to 6 months for diabetes, blood pressure or cholesterol. We give you a personalized follow-up plan."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "tiroides": {
    "faqs": [
      {
        "question": "¿Qué prueba se usa para revisar la tiroides?",
        "answer": "Usamos principalmente la TSH y, si es necesario, T3 y T4 para evaluar cómo funciona tu tiroides."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What test is used to check the thyroid?",
        "answer": "We mainly use TSH and, if needed, T3 and T4 to evaluate how your thyroid is working."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "alergias": {
    "faqs": [
      {
        "question": "¿Tratan alergias en la piel y respiratorias?",
        "answer": "Sí, evaluamos y tratamos alergias respiratorias (rinitis, congestión) y de la piel (ronchas, comezón)."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you treat both skin and respiratory allergies?",
        "answer": "Yes, we evaluate and treat respiratory allergies (rhinitis, congestion) and skin allergies (hives, itching)."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "enfermedades-respiratorias": {
    "faqs": [
      {
        "question": "¿Hacen prueba de flu y de COVID el mismo día?",
        "answer": "Sí, hacemos pruebas rápidas de influenza y COVID y te damos el resultado y el tratamiento el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you test for flu and COVID the same day?",
        "answer": "Yes, we run rapid flu and COVID tests and give you the result and treatment the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-fisico-escolar": {
    "faqs": [
      {
        "question": "¿Llenan el formulario de la escuela o el equipo?",
        "answer": "Sí, trae el formulario de tu escuela o equipo deportivo y lo completamos durante la visita."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you fill out the school or team form?",
        "answer": "Yes, bring your school or sports-team form and we complete it during the visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
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
        "question": "Tengo flujo, comezón o mal olor. ¿Me pueden tratar el mismo día?",
        "answer": "Sí. Evaluamos tus síntomas, tomamos un cultivo si es necesario y, en la mayoría de los casos, sales con tu tratamiento el mismo día. Si los síntomas son ardor al orinar, también hacemos examen de orina para descartar una infección urinaria."
      },
      {
        "question": "¿Necesito cita para el papanicolaou?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. Si prefieres asegurar un horario, llámanos y te lo reservamos."
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
        "question": "I have discharge, itching or odor. Can you treat me the same day?",
        "answer": "Yes. We evaluate your symptoms, take a culture if needed and, in most cases, you leave with treatment the same day. If your symptom is burning when urinating, we also run a urine test to rule out a UTI."
      },
      {
        "question": "Do I need an appointment for a Pap smear?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. If you prefer a guaranteed time, call us and we'll reserve it."
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
        "question": "¿Qué tan confiable es la prueba de embarazo?",
        "answer": "Nuestras pruebas son confiables y las confirma personal médico; también podemos orientarte sobre los siguientes pasos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How reliable is the pregnancy test?",
        "answer": "Our tests are reliable and confirmed by medical staff; we can also guide you on next steps."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "anticonceptivos": {
    "faqs": [
      {
        "question": "¿Qué métodos anticonceptivos ofrecen?",
        "answer": "Ofrecemos orientación, pastillas anticonceptivas e inyección, y te ayudamos a elegir el método adecuado para ti."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What contraceptive methods do you offer?",
        "answer": "We offer guidance, birth control pills and the injection, and help you choose the right method for you."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "extraccion-implantes": {
    "faqs": [
      {
        "question": "¿Duele la extracción del implante?",
        "answer": "Se realiza con anestesia local, por lo que las molestias son mínimas. El procedimiento toma pocos minutos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does implant removal hurt?",
        "answer": "It's done with local anesthesia, so discomfort is minimal. The procedure takes just a few minutes."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "salud-hombre": {
    "faqs": [
      {
        "question": "¿Qué incluye el examen del hombre?",
        "answer": "Incluye antígeno prostático (PSA), nivel de testosterona y un chequeo general, con resultados explicados en español."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What does the men's exam include?",
        "answer": "It includes prostate antigen (PSA), testosterone level and a general checkup, with results explained in Spanish."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examenes-sangre": {
    "faqs": [
      {
        "question": "¿En cuánto tiempo entregan los resultados?",
        "answer": "En la mayoría de los casos los resultados están listos el mismo día o muy pronto, y te los explicamos en español."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How soon are results ready?",
        "answer": "In most cases results are ready the same day or very soon, and we explain them to you in Spanish."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "infecciones-urinarias": {
    "faqs": [
      {
        "question": "¿Cuáles son los síntomas de una infección urinaria?",
        "answer": "Ardor al orinar, ganas constantes de ir al baño aunque salga poco, orina turbia o con mal olor, y dolor en la parte baja del abdomen. Si además tienes fiebre o dolor en la espalda baja, ven el mismo día: la infección puede estar llegando a los riñones."
      },
      {
        "question": "¿Puedo recibir tratamiento el mismo día?",
        "answer": "Sí. Hacemos el examen de orina en la clínica, revisamos tus síntomas y, si hay infección, sales con tu tratamiento en la misma visita."
      },
      {
        "question": "¿Cuánto cuesta el examen de orina y el tratamiento sin seguro?",
        "answer": "No necesitas seguro médico. Manejamos precios de pago directo, transparentes y accesibles; te informamos el costo antes de atenderte. En la página de promociones solemos tener paquetes desde $69 que incluyen examen de orina y consulta médica. Aceptamos efectivo y tarjetas."
      },
      {
        "question": "¿Cuánto tarda el resultado del examen de orina?",
        "answer": "El examen general de orina se procesa en la clínica durante tu visita, así que el médico revisa el resultado contigo en la misma consulta."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Qué hago si las infecciones urinarias me regresan seguido?",
        "answer": "Las infecciones repetidas merecen evaluación. Revisamos posibles causas, te damos indicaciones para prevenirlas y, si es necesario, hacemos estudios adicionales o te referimos con un especialista."
      }
    ],
    "faqsEn": [
      {
        "question": "What are the symptoms of a urinary tract infection?",
        "answer": "Burning when you urinate, a constant urge to go even if little comes out, cloudy or foul-smelling urine, and lower-abdomen pain. If you also have fever or lower-back pain, come in the same day: the infection may be reaching your kidneys."
      },
      {
        "question": "Can I get treatment the same day?",
        "answer": "Yes. We run the urine test in the clinic, review your symptoms and, if there's an infection, you leave with treatment in the same visit."
      },
      {
        "question": "How much do the urine test and treatment cost without insurance?",
        "answer": "You don't need health insurance. We offer transparent, affordable self-pay pricing and tell you the cost before your visit. We accept cash and cards. On the promotions page we usually have packages from $69 that include a urine test and medical consultation."
      },
      {
        "question": "How long does the urine test take?",
        "answer": "The urinalysis is processed in the clinic during your visit, so the doctor reviews the result with you in the same consultation."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
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
        "question": "¿Cómo se toma la muestra de heces?",
        "answer": "Te entregamos un recipiente e instrucciones claras para recolectar la muestra en casa y traerla a la clínica."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How is the stool sample collected?",
        "answer": "We give you a container and clear instructions to collect the sample at home and bring it to the clinic."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-strep": {
    "faqs": [
      {
        "question": "¿Cuánto tarda el resultado del strep test?",
        "answer": "La prueba rápida de estreptococo da resultado en pocos minutos durante tu visita."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How long does the strep test take?",
        "answer": "The rapid strep test gives a result in just a few minutes during your visit."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "prueba-tuberculosis": {
    "faqs": [
      {
        "question": "¿Tengo que regresar para leer la prueba de TB?",
        "answer": "Sí, la prueba cutánea (PPD) se lee entre 48 y 72 horas después de aplicarla; te damos la cita de lectura."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I have to come back to read the TB test?",
        "answer": "Yes, the skin test (PPD) is read 48 to 72 hours after it's placed; we schedule your reading appointment."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "enfermedades-transmision-sexual": {
    "faqs": [
      {
        "question": "¿Las pruebas son confidenciales?",
        "answer": "Sí, todas las pruebas de STD son completamente confidenciales y se realizan con respeto y sin juicios."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Is the testing confidential?",
        "answer": "Yes, all STD testing is completely confidential and done with respect and without judgment."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-alcohol-drogas": {
    "faqs": [
      {
        "question": "¿Entregan documentación para el trabajo?",
        "answer": "Sí, te entregamos la documentación del resultado para tu empleador o trámite."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you provide documentation for work?",
        "answer": "Yes, we give you documentation of the result for your employer or paperwork."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "electrocardiograma": {
    "faqs": [
      {
        "question": "¿El electrocardiograma duele?",
        "answer": "No, es un estudio rápido y sin dolor; solo se colocan electrodos en la piel por unos minutos."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does the EKG hurt?",
        "answer": "No, it's a fast, painless test; electrodes are simply placed on the skin for a few minutes."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "ultrasonido": {
    "faqs": [
      {
        "question": "¿El ultrasonido tiene radiación?",
        "answer": "No, el ultrasonido no usa radiación, por lo que es seguro incluso durante el embarazo."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does ultrasound use radiation?",
        "answer": "No, ultrasound uses no radiation, so it's safe even during pregnancy."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examen-dot": {
    "faqs": [
      {
        "question": "¿Me entregan el certificado DOT el mismo día?",
        "answer": "Sí, al terminar el examen físico DOT te entregamos tu certificado el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do I get the DOT certificate the same day?",
        "answer": "Yes, after the DOT physical we give you your certificate the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "examenes-inmigracion": {
    "faqs": [
      {
        "question": "¿El médico está autorizado por USCIS?",
        "answer": "Sí, el examen lo realiza un médico autorizado (civil surgeon) y te entregamos el Formulario I-693 sellado."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Is the doctor authorized by USCIS?",
        "answer": "Yes, the exam is performed by an authorized civil surgeon and we give you the sealed Form I-693."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "vacunas": {
    "faqs": [
      {
        "question": "¿Qué vacunas aplican?",
        "answer": "Aplicamos la vacuna contra la influenza (flu) y el toxoide tetánico; pregúntanos cuál te conviene."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Which vaccines do you give?",
        "answer": "We administer the influenza (flu) vaccine and tetanus toxoid; ask us which one you need."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "sueros-vitaminados": {
    "faqs": [
      {
        "question": "¿Quién aplica el suero vitaminado?",
        "answer": "Lo aplica y supervisa personal médico, tras una breve evaluación para elegir el suero adecuado para ti."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Who administers the vitamin IV?",
        "answer": "It's administered and monitored by medical staff, after a brief evaluation to choose the right drip for you."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "suturas-heridas": {
    "faqs": [
      {
        "question": "¿Atienden heridas sin cita?",
        "answer": "Sí, atendemos cortes y heridas sin cita previa; entre más pronto, menor el riesgo de infección."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you treat wounds without an appointment?",
        "answer": "Yes, we treat cuts and wounds on a walk-in basis; the sooner, the lower the risk of infection."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "curacion-heridas": {
    "faqs": [
      {
        "question": "¿Hacen cambios de vendaje y seguimiento?",
        "answer": "Sí, limpiamos, curamos y cambiamos los vendajes, y damos seguimiento hasta que la herida cicatrice."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Do you do dressing changes and follow-up?",
        "answer": "Yes, we clean, treat and change the dressings, and follow up until the wound heals."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "cirugias-menores": {
    "faqs": [
      {
        "question": "¿Qué cirugías menores realizan?",
        "answer": "Realizamos extracción de lunares, quistes y lipomas, entre otros procedimientos ambulatorios con anestesia local."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "What minor surgeries do you perform?",
        "answer": "We perform removal of moles, cysts and lipomas, among other outpatient procedures with local anesthesia."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "drenaje-abscesos": {
    "faqs": [
      {
        "question": "¿El drenaje de un absceso duele?",
        "answer": "Se realiza con anestesia local para reducir las molestias y aliviar el dolor del absceso rápidamente."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Does abscess drainage hurt?",
        "answer": "It's done with local anesthesia to reduce discomfort and quickly relieve the abscess pain."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "unas-encarnadas": {
    "faqs": [
      {
        "question": "¿Cómo tratan la uña encarnada?",
        "answer": "Con un procedimiento sencillo y anestesia local retiramos la porción encarnada para aliviar el dolor el mismo día."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "How do you treat an ingrown toenail?",
        "answer": "With a simple procedure and local anesthesia we remove the ingrown portion to relieve pain the same day."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  },
  "farmacia": {
    "faqs": [
      {
        "question": "¿Puedo surtir mi receta en la clínica?",
        "answer": "Sí, al terminar tu consulta surtimos tu receta en nuestra farmacia, sin tener que ir a otro lugar."
      },
      {
        "question": "¿Necesito cita previa?",
        "answer": "No. Atendemos sin cita de lunes a domingo de 9 AM a 9 PM. También puedes llamarnos para reservar un horario."
      },
      {
        "question": "¿Atienden a pacientes sin seguro?",
        "answer": "Sí. No necesitas seguro médico; manejamos precios accesibles y transparentes. Pregúntanos por el costo antes de tu visita."
      }
    ],
    "faqsEn": [
      {
        "question": "Can I fill my prescription at the clinic?",
        "answer": "Yes, after your visit we fill your prescription at our pharmacy, with no need to go elsewhere."
      },
      {
        "question": "Do I need an appointment?",
        "answer": "No. We welcome walk-ins Monday to Sunday from 9 AM to 9 PM. You can also call us to reserve a time."
      },
      {
        "question": "Do you accept patients without insurance?",
        "answer": "Yes. You don't need insurance; we offer affordable, transparent pricing. Ask us about the cost before your visit."
      }
    ]
  }
};

export function getServiceFAQs(slug: string, locale: string) {
  const data = SERVICE_FAQS[slug];
  if (!data) return [];
  return locale === "en" ? data.faqsEn : data.faqs;
}
