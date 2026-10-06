// FAQ content from Aji's faqs.html, updated for the change request
// (no fixed eight-session course, customisable group sizes, policies moved here
// from the Booking page). Answers are small trusted HTML snippets.

export type FaqGroup = { icon: string; label: string; verse: string | null; qs: { q: string; a: string }[] };

export const FAQS: FaqGroup[] = [
  {
    "icon": "fa-wave-square",
    "label": "Sound Healing Basics",
    "verse": "Ask away, there is no wrong question.",
    "qs": [
      {
        "q": "What is sound healing?",
        "a": "<p>A common term for wellbeing practices using sound, vibration, music and attentive listening. At Léhar Studio we call it sound immersion: a chance to pause, listen and reconnect, not a medical treatment or a promise of healing. Sessions may blend singing bowls, gong, resonant instruments, breathwork, music, voice and silence. Everyone experiences them differently, and no outcome is guaranteed.</p>"
      },
      {
        "q": "What is a sound bath?",
        "a": "<p>A guided listening experience where you rest while sound surrounds you. The \"bath\" means being immersed in layers of sound. No water involved. You usually lie down or sit while bowls, gong and other instruments are played at a considered pace and volume.</p>"
      },
      {
        "q": "What happens during a session?",
        "a": "<p>Every session follows the same gentle arc: grounding and guided relaxation, a short breathwork practice, sound through singing bowls, gong and other resonant instruments (sometimes with raagas, mindful music, voice, mantra or selected frequencies), then silence and a gentle return. See <a href=\"/#arc\">The Arc of a Léhar Session</a>.</p>"
      },
      {
        "q": "Do I need previous experience?",
        "a": "<p>No. No experience of meditation, breathwork, music or sound practice is needed. Everything is explained beforehand. There is nothing to perform and no correct way to respond.</p>"
      },
      {
        "q": "Do I need to know anything about music?",
        "a": "<p>No. You do not need to name notes, understand frequencies or follow a melody. Your role is to get comfortable and listen.</p>"
      },
      {
        "q": "What is music therapy at Léhar Studio?",
        "a": "<p>A gentle, personalised experience using raaga, rhythm, voice and frequency to support emotional ease and a quieter mind. See <a href=\"/music-therapy\">Music Therapy</a>.</p>"
      }
    ]
  },
  {
    "icon": "fa-clipboard-question",
    "label": "Session Questions",
    "verse": "Small things, answered, so the mind can rest.",
    "qs": [
      {
        "q": "How long is a session?",
        "a": "<p>Group Sound Baths and One-to-One Immersions are about 60 minutes. Corporate and retreat experiences can be shorter or longer, by agreement.</p>"
      },
      {
        "q": "What should I bring?",
        "a": "<p>A light blanket, drinking water, an optional eye mask, and any cushion or support you need. For sessions outside Léhar Studio you will be told beforehand whether mats, cushions and blankets are provided.</p>"
      },
      {
        "q": "What should I wear?",
        "a": "<p>Loose, comfortable clothing you can lie down, sit and breathe in. Bring an extra layer, because body temperature can change while resting. Footwear comes off.</p>"
      },
      {
        "q": "Can I attend alone?",
        "a": "<p>Yes, and many do. If you would like more privacy and personalisation, choose a One-to-One Immersion.</p>"
      },
      {
        "q": "Can I participate while seated? Do I need to lie down?",
        "a": "<p>Yes, you may sit, and no, lying down is not compulsory. Most people lie down because it is comfortable. Tell Kavitha in advance so seating and support can be arranged. You can change position at any time. Your comfort comes first.</p>"
      },
      {
        "q": "Can I leave during a session?",
        "a": "<p>Yes. Step out if you feel uncomfortable or need a break, quietly in a group. If you might need to leave early, tell Kavitha and sit near the exit. Re-entry may not be possible, depending on the venue and stage.</p>"
      },
      {
        "q": "What should I expect as a first-time participant?",
        "a": "<p>You will be welcomed, shown where to settle and given a brief explanation. You do not need to stop your thoughts or make yourself relax. You may notice sounds, sensations, thoughts or emotions, drift towards sleep, or stay quietly awake, or simply enjoy an hour without demands or conversation. There is no correct response and nothing to achieve.</p>"
      }
    ]
  },
  {
    "icon": "fa-shield-heart",
    "label": "Suitability and Safety",
    "verse": "Care comes first, so ask before you come.",
    "qs": [
      {
        "q": "Who should consult a healthcare professional before participating?",
        "a": "<p>Please check with a qualified healthcare professional before booking if you:</p> <ul><li>Are pregnant or recently gave birth</li><li>Have a cardiovascular or respiratory condition</li><li>Have uncontrolled high blood pressure</li><li>Have epilepsy, a seizure disorder or a condition affected by sound or breathing practices</li><li>Have had recent surgery or a significant injury</li><li>Have a serious or unstable medical condition</li><li>Have a history of panic attacks, psychosis or significant trauma that breathwork, sustained sound or lying with closed eyes may affect</li><li>Have severe tinnitus, hyperacusis, hearing sensitivity or sound-triggered migraines</li><li>Are unsure whether it suits your current treatment or medication</li></ul> <p>Consulting a professional does not necessarily mean you cannot take part. It helps decide whether the session should be avoided or modified.</p>"
      },
      {
        "q": "When might a session need to be modified?",
        "a": "<p>If you need to stay seated, cannot lie comfortably in one position, are sensitive to particular sounds, volumes or instruments, prefer eyes open, do not want structured breathwork, need extra physical support, need to be near an exit, or have accessibility or communication needs. Changes can include a different position, lower volume, more distance from an instrument, leaving out structured breathwork, or a gentler soundscape.</p>"
      },
      {
        "q": "Are there any specific precautions?",
        "a": "<p>Sound should stay within a comfortable range. Tell Kavitha at once if a tone or volume causes pain, ringing, discomfort, dizziness or distress. Breathwork should stay gentle. If you feel dizzy, light-headed, breathless or unwell, stop and return to natural breathing. Do not attend under the influence of alcohol or recreational substances. Eat lightly at least 90 minutes before and stay comfortably hydrated.</p>"
      },
      {
        "q": "What accessibility arrangements are available?",
        "a": "<p>Seated participation and modified positioning can be arranged if discussed in advance. Before booking, share any mobility, hearing, sensory, access or communication needs. For sessions outside Léhar Studio, venue accessibility is the organiser's responsibility and should be confirmed with them directly.</p>"
      },
      {
        "q": "Should I tell Kavitha about health concerns?",
        "a": "<p>Yes. Please share any relevant condition, pregnancy, recent surgery or injury, hearing sensitivity, sound-triggered symptoms, breathing concern or emotional vulnerability beforehand. It helps plan for comfort and suitability. It is not used to diagnose or treat. Sound immersion is a wellbeing experience, not a substitute for medical, psychological or psychiatric care.</p>"
      }
    ]
  },
  {
    "icon": "fa-user",
    "label": "Personalised One-to-One Sessions",
    "verse": null,
    "qs": [
      {
        "q": "How is one-to-one different from a group sound bath?",
        "a": "<p>A group bath is a shared experience with one structure for everyone. A one-to-one begins with a personal conversation and is shaped around what feels most present for you, with more privacy, continuity and flexibility in the choice of breath, sound and music. The number of sessions is customisable as per your requirements.</p>"
      },
      {
        "q": "How is the session personalised?",
        "a": "<p>Kavitha considers what led you here, your area of focus, your comfort and sound sensitivities, relevant health information, how you respond to different instruments and volumes, and how your experience develops across the sessions. Not every element is used in every session.</p>"
      },
      {
        "q": "How long is a one-to-one session?",
        "a": "<p>About 60 minutes. The number and spacing of sessions are customisable as per your requirements.</p>"
      },
      {
        "q": "How do I book a one-to-one immersion?",
        "a": "<p>Contact Kavitha by WhatsApp, telephone or email. You begin with a conversation about what you are looking for, the format and any health or comfort points. Once suitability, dates and payment are agreed, your course is confirmed.</p>"
      }
    ]
  },
  {
    "icon": "fa-building",
    "label": "Corporate and Retreat Experiences",
    "verse": null,
    "qs": [
      {
        "q": "Can sessions be customised?",
        "a": "<p>Yes, to the event's purpose, time, group size, venue and wider programme, including the balance of grounding, breathwork, sound, music, voice and silence. No specific health or organisational outcome is promised.</p>"
      },
      {
        "q": "What group sizes are possible?",
        "a": "<p>Group size is customisable as per your requirements. For larger organisations, several smaller batches can be arranged so everyone hears the sound comfortably.</p>"
      },
      {
        "q": "What locations are supported?",
        "a": "<p>Your premises, an off-site venue or another agreed location. Retreats at suitable venues, subject to travel, access, accommodation and instrument transport.</p>"
      },
      {
        "q": "How far in advance should organisations book?",
        "a": "<p>As early as possible, especially for retreats, off-sites, multiple employee batches, weekend dates, sessions involving travel, and events needing venue assessment or equipment coordination. Exact lead time depends on availability, location and complexity.</p>"
      },
      {
        "q": "Can a session be combined with other wellbeing activities?",
        "a": "<p>Yes, with yoga, movement, reflection, mindfulness or other activities. Leave enough transition time so nobody feels rushed. Kavitha can coordinate with the organiser or other facilitators to place the session well.</p>"
      }
    ]
  },
  {
    "icon": "fa-calendar-check",
    "label": "Booking and Payment",
    "verse": null,
    "qs": [
      {
        "q": "How do I book?",
        "a": "<p>Use the Booking page: choose your service, share a few details, and Kavitha will reply. Contact details are on that page.</p>"
      },
      {
        "q": "How quickly will I receive a response?",
        "a": "<p>As soon as possible. If your enquiry is about a particular date, put it in your first message. Response times vary with Kavitha's schedule and the enquiry.</p>"
      },
      {
        "q": "What payment methods are accepted?",
        "a": "<p>Bank transfer or GPay. Do not send payment until you have received booking details directly from Léhar Studio.</p>"
      },
      {
        "q": "Is advance payment required?",
        "a": "<p>Yes, to confirm an individual booking or group place. One-to-one fees are paid in advance. Corporate and retreat bookings follow the schedule in the written quotation. A booking is confirmed once Léhar Studio has acknowledged receipt of payment.</p>"
      },
      {
        "q": "Cancellation, rescheduling and refunds",
        "a": "<p>Please give at least 48 hours' notice. Cancellations made earlier may be moved to another date or refunded, less any non-recoverable payment charges. Cancellations within 48 hours and missed appointments are non-refundable except in exceptional circumstances. A confirmed individual session may be rescheduled once without charge with 48 hours' notice. Corporate, retreat and private-group bookings follow their written quotation.</p>"
      }
    ]
  },
  {
    "icon": "fa-earth-asia",
    "label": "Online Sessions and Locations",
    "verse": null,
    "qs": [
      {
        "q": "Are online sessions available?",
        "a": "<p>Not at present. The natural resonance of the instruments, the room's acoustics and Kavitha's real-time response are part of the experience and cannot be fully reproduced online.</p>"
      },
      {
        "q": "Where are in-person sessions held?",
        "a": "<p>One-to-one at Léhar Studio, Mulund East. Group Sound Baths generally at the organiser's chosen venue. Corporate and retreat sessions at the organisation's premises, off-site location or retreat venue.</p>"
      },
      {
        "q": "What cities or areas are covered?",
        "a": "<p>One-to-one is based in Mulund East. Group, corporate and retreat enquiries from other areas can be considered by distance, venue, travel time and instrument transport. Confirm availability with Kavitha before finalising a location.</p>"
      },
      {
        "q": "Can Kavitha travel for corporate sessions or retreats?",
        "a": "<p>Yes, by prior arrangement. When the client provides or books the venue, no additional travel charge applies. Please share parking, loading access, stairs, lifts and the distance from arrival point to session space.</p>"
      }
    ]
  },
  {
    "icon": "fa-moon",
    "label": "After the Session",
    "verse": "Take your time. The wave settles slow.",
    "qs": [
      {
        "q": "What might I experience immediately afterwards?",
        "a": "<p>Everyone responds differently. You may feel relaxed, quiet, sleepy, refreshed, reflective or emotionally aware, or much the same as before. All of these are valid. Take a few moments before standing, especially after lying down for a while.</p>"
      },
      {
        "q": "Should I rest after the session?",
        "a": "<p>You do not need to sleep or avoid normal activity. If you feel tired or deeply relaxed, sit, drink water and return to activity gradually. If you plan to drive, wait until you feel fully alert.</p>"
      },
      {
        "q": "Are any practices recommended afterwards?",
        "a": "<p>You may like to: drink water as usual, have a light meal if hungry, spend a few quiet minutes before a busy environment, take a gentle walk, write down anything you want to remember, and notice your experience without forcing meaning from it. No special diet, detox or lifestyle restriction is needed.</p>"
      },
      {
        "q": "Is it normal to feel tired, relaxed or emotional?",
        "a": "<p>Some people feel tired, relaxed, reflective or emotionally sensitive after a quiet, immersive session. Others notice no change. These responses should not automatically be read as healing, release or proof the session \"worked\". Give yourself time and respond to what you need. If you have persistent distress, significant physical symptoms, worsening tinnitus or any reaction that worries you, contact a suitable healthcare professional.</p>"
      }
    ]
  }
];
