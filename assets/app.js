'use strict';
const translations = {
  fr: {
    paypalLabel:"PayPal",
    airtelLabel:"Airtel Money",
    phoneLabel:"Téléphone / WhatsApp",
    arrangeMaterial:"Organiser un don →",
    mailAction:"Écrire par e-mail",
    whatsapp:"WhatsApp",
    call:"Appeler",
    roleOperations:"Projets et opérations",
    roleOperationsDeputy:"Adjoint aux projets et opérations",
    roleAudit:"Vérificateur aux comptes",
    roleEvaluation:"Suivi et évaluation",
    roleSocial:"Affaires sociales et bénéficiaires",
    artValues:"SOLIDARITÉ · ENGAGEMENT · ACTION",
    skip:"Aller au contenu",menu:"Menu",navMission:"Notre mission",navAction:"Nos actions",navTeam:"Équipe",navHelp:"Participer",navTransparency:"Transparence",navContact:"Contact",
    heroEyebrow:"COLLECTIF CITOYEN · PORT-GENTIL, GABON",heroTitle:"La solidarité <em>en action.</em>",heroText:"Un collectif citoyen engagé dans la solidarité, la sensibilisation et des actions concrètes au service de la communauté.",discover:"Découvrir notre action",help:"Comment participer ?",
    missionLabel:"NOTRE RAISON D'ÊTRE",missionTitle:"Solidarité et engagement citoyen.",missionText:"Rassembler des personnes désireuses d'agir ensemble à travers le soutien solidaire, la sensibilisation, la prévention et la mobilisation citoyenne.",v1title:"Solidarité",v1text:"Répondre aux besoins réels et encourager l'entraide.",v2title:"Engagement",v2text:"Participer activement à la vie de la communauté.",v3title:"Transparence",v3text:"Rendre compte des dons et de leur utilisation.",
    actionLabel:"NOTRE PREMIÈRE ACTION · DÉCEMBRE 2026",christmasTag:"CAMPAGNE SOLIDAIRE",christmasTitle:"Noël du Sourire <span>2026</span>",christmasQuote:"Parce que chaque enfant mérite la magie de Noël.",christmasText:"À Port-Gentil, nous souhaitons offrir une fête de Noël à des enfants en difficulté : un moment de partage, des cadeaux adaptés, un repas et, selon les besoins, des dons utiles.",provisional:"Collecte ouverte. Période de campagne : du 3 novembre au 15 décembre 2026. La date définitive de la fête sera confirmée prochainement.",join:"Je souhaite contribuer",loc:"Port-Gentil · Gabon",beneficiaries:"Bénéficiaires : enfants en structures de protection et familles identifiées en grande précarité",dateWindow:"Fête envisagée : du 20 au 24 décembre 2026",
    teamLabel:"DERRIÈRE L'INITIATIVE",teamTitle:"Des visages et surtout des engagements.",teamText:"Découvrez les personnes qui assurent la coordination, la gestion et le suivi des actions du collectif.",nameSoon:"Nom à confirmer",roleCoord:"Coordination générale",roleFinance:"Référente financière",roleComms:"Relations extérieures, partenariats et communication",
    helpLabel:"PASSER À L'ACTION",helpTitle:"Plusieurs façons de faire la différence.",moneyTitle:"Faire un don financier",moneyText:"Contribuez via Airtel Money au +241 76 21 72 43 (titulaire : Paul Stephane ENGONE MOUITY) ou, depuis l’étranger, par PayPal : stephanepaul21@yahoo.fr.",materialTitle:"Faire un don matériel",materialText:"Livres, vêtements en bon état, cadeaux, bons d’achat, fournitures et autres biens adaptés aux besoins identifiés. Contactez-nous pour organiser la remise.",partnerTitle:"Devenir partenaire",partnerText:"Entreprises, commerces et particuliers : contribuez par des biens, prestations, savoir-faire, bénévolat ou soutien logistique. Échangeons sur votre proposition.",soon:"Modalités à venir",contactLink:"Nous contacter →",noPayments:"Le site ne traite aucun paiement. Vérifiez toujours le numéro Airtel Money et le nom du titulaire avant de transférer des fonds. Les contributions via PayPal sont à adresser au compte indiqué.",
    trustLabel:"NOTRE ENGAGEMENT",trustTitle:"Chaque contribution compte. Chaque dépense doit pouvoir s'expliquer.",trustText:"Nous enregistrons par écrit les dons financiers et matériels ainsi que chaque dépense liée à l’opération. Les justificatifs sont conservés. À la clôture, un bilan écrit détaillant les ressources, les dépenses et les résultats sera archivé par le collectif et mis à la disposition des contributeurs qui en font la demande. L’anonymat des donateurs sera préservé.",trust1:"Registre des contributions financières et matérielles",trust2:"Justificatifs conservés pour toutes les dépenses",trust3:"Bilan écrit consultable sur demande, dans le respect de l’anonymat",statusPill:"Collecte ouverte",statusTitle:"Noël du Sourire 2026",statusText:"Campagne du 3 novembre au 15 décembre 2026. Aucun objectif financier public n’est annoncé. Pour participer, utilisez les coordonnées officielles indiquées sur cette page.",statusUpdated:"Informations actualisées · 29 octobre 2026",
    contactLabel:"RESTONS EN CONTACT",contactTitle:"L'action commence par un échange.",contactText:"Pour contribuer, proposer un partenariat, organiser un don matériel ou demander des précisions, contactez notre équipe au numéro dédié ou par e-mail.",emailLabel:"E-mail",emailSoon:"Adresse officielle à confirmer",phoneSoon:"Numéro officiel à confirmer",basedIn:"Ville",footerMission:"La solidarité en action.",footerNote:"Collecte ouverte pour Noël du Sourire 2026 · Dons consignés et dépenses justifiées."
  },
  en: {
    paypalLabel:"PayPal",
    airtelLabel:"Airtel Money",
    phoneLabel:"Phone / WhatsApp",
    arrangeMaterial:"Arrange an in-kind donation →",
    mailAction:"Email us",
    whatsapp:"WhatsApp",
    call:"Call",
    roleOperations:"Projects and operations",
    roleOperationsDeputy:"Deputy for Projects and Operations",
    roleAudit:"Accounts verification",
    roleEvaluation:"Monitoring and evaluation",
    roleSocial:"Social affairs and beneficiaries",
    artValues:"SOLIDARITY · COMMITMENT · ACTION",
    skip:"Skip to content",menu:"Menu",navMission:"Our mission",navAction:"Our initiatives",navTeam:"Team",navHelp:"Get involved",navTransparency:"Transparency",navContact:"Contact",
    heroEyebrow:"COMMUNITY VOLUNTEER GROUP · PORT-GENTIL, GABON",heroTitle:"Solidarity <em>in action.</em>",heroText:"A citizen-led collective committed to solidarity, awareness-raising and practical action for our communities.",discover:"Explore our initiative",help:"How to get involved",
    missionLabel:"WHY WE EXIST",missionTitle:"Solidarity and civic engagement.",missionText:"Bringing people together to act through mutual support, awareness, prevention and civic engagement.",v1title:"Solidarity",v1text:"Respond to real needs and foster mutual support.",v2title:"Commitment",v2text:"Take an active part in community life.",v3title:"Transparency",v3text:"Account for donations and how they are used.",
    actionLabel:"OUR FIRST INITIATIVE · DECEMBER 2026",christmasTag:"COMMUNITY FUNDRAISING CAMPAIGN",christmasTitle:"Christmas of Smiles <span>2026</span>",christmasQuote:"Because every child deserves the magic of Christmas.",christmasText:"In Port-Gentil, we hope to host a Christmas celebration for children facing difficult circumstances: a day of togetherness, age-appropriate gifts, a shared meal and, where needed, useful supplies.",provisional:"Fundraising is open. Campaign dates: 3 November to 15 December 2026. The celebration date will be confirmed soon.",join:"I'd like to contribute",loc:"Port-Gentil · Gabon",beneficiaries:"Beneficiaries: children in protection facilities and identified families facing severe hardship",dateWindow:"Tentative celebration: 20–24 December 2026",
    teamLabel:"THE PEOPLE BEHIND THE PROJECT",teamTitle:"People, and above all, commitment.",teamText:"Meet the people coordinating, managing and monitoring the collective’s activities.",nameSoon:"Name to be confirmed",roleCoord:"General coordination",roleFinance:"Finance Lead",roleComms:"External relations, partnerships and communications",roleOperationsDeputy:"Deputy for Projects and Operations",
    helpLabel:"TAKE PART",helpTitle:"There are many ways to make a difference.",moneyTitle:"Make a financial donation",moneyText:"Donate via Airtel Money at +241 76 21 72 43 (account holder: Paul Stephane ENGONE MOUITY) or from abroad via PayPal: stephanepaul21@yahoo.fr.",materialTitle:"Donate supplies",materialText:"Books, clothing in good condition, gifts, shopping vouchers, school supplies and other goods suited to identified needs. Contact us to arrange delivery.",partnerTitle:"Become a partner",partnerText:"Businesses, shops and individuals can offer goods, services, expertise, volunteer time or logistical support. Contact us to discuss a partnership.",soon:"Details coming soon",contactLink:"Contact us →",noPayments:"This website does not process payments. Always verify the Airtel Money number and account holder before sending funds. PayPal contributions should be sent to the stated account.",
    trustLabel:"OUR COMMITMENT",trustTitle:"Every contribution matters. Every expense should be accounted for.",trustText:"We maintain written records of monetary and in-kind donations and every expense related to the initiative. Supporting receipts are retained. After the event, a written report covering resources, spending and results will be archived by the collective and made available to contributors upon request. Donor anonymity will be protected.",trust1:"A register of cash and in-kind contributions",trust2:"Receipts retained for all expenses",trust3:"Written report available upon request, with donor anonymity protected",statusPill:"Fundraising open",statusTitle:"Christmas of Smiles 2026",statusText:"Campaign: 3 November to 15 December 2026. No public fundraising target has been announced. Please use the official contact information on this page to participate.",statusUpdated:"Updated · 29 October 2026",
    contactLabel:"KEEP IN TOUCH",contactTitle:"Action starts with a conversation.",contactText:"To contribute, propose a partnership, arrange an in-kind donation or ask questions, contact our team by phone, WhatsApp or email.",emailLabel:"Email",emailSoon:"Official email address to be confirmed",phoneSoon:"Official number to be confirmed",basedIn:"Location",footerMission:"Solidarity in action.",footerNote:"Fundraising open for Christmas of Smiles 2026 · Donations recorded and expenses documented."
  }
};
function setLanguage(language){
  const lang=Object.hasOwn(translations,language)?language:'fr';
  document.documentElement.lang=lang;
  for(const node of document.querySelectorAll('[data-i18n]')){
    const key=node.dataset.i18n;
    if(!Object.hasOwn(translations[lang],key)) continue;
    // Only the two reviewed emphasis keys contain markup.
    if(key==='heroTitle'||key==='christmasTitle') node.innerHTML=translations[lang][key];
    else node.textContent=translations[lang][key];
  }
  document.title=lang==='fr'?"Entraid'Action — Solidarité à Port-Gentil":"Entraid'Action — Community Solidarity in Port-Gentil";
  for(const btn of document.querySelectorAll('[data-lang]')) btn.setAttribute('aria-pressed',String(btn.dataset.lang===lang));
  try{localStorage.setItem('entraid-action-language',lang);}catch(error){console.info('Language preference not saved:',error.message);}
}
for(const btn of document.querySelectorAll('[data-lang]')) btn.addEventListener('click',()=>setLanguage(btn.dataset.lang));
let preferred='fr';try{preferred=localStorage.getItem('entraid-action-language')||'fr';}catch(error){console.info('Language preference unavailable:',error.message);}
setLanguage(preferred);
const toggle=document.getElementById('menuToggle');const menu=document.getElementById('menu');
toggle.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=String(new Date().getFullYear());
