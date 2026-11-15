export const business = {
 name: 'Cali Vehicle Detailing', phone: '+1 (707) 309-8836', tel: '+17073098836',
 address: '13 Rancho Dr, Sonoma, CA 95476, United States',
 maps: 'https://www.google.com/maps/search/?api=1&query=13+Rancho+Dr+Sonoma+CA+95476',
 hours: null, email: null, socialLinks: [], // OWNER INPUT REQUIRED
};
export const services = [
 {slug:'exterior-detailing',name:'Exterior Detailing',tag:'A fresh perspective.',image:'mercedes',description:'Explore a considered approach to exterior care, from road grime to the finishing touches that bring your vehicle back into focus.',highlights:['Discuss a careful exterior wash','Ask about wheels and exterior trim','Choose a finish suited to your vehicle']},
 {slug:'interior-detailing',name:'Interior Detailing',tag:'Enjoy every mile.',image:'interior',description:'A refreshed cabin makes every drive feel different. Discuss care for the surfaces you see and touch, from upholstery to the smallest details.',highlights:['Discuss upholstery and carpet care','Ask about leather and trim cleaning','Identify areas needing extra attention']},
 {slug:'full-vehicle-detailing',name:'Full Vehicle Detailing',tag:'Care, inside and out.',image:'hero',description:'Bring interior and exterior care together in a plan built around the condition of your vehicle and what matters most to you.',highlights:['Review interior and exterior priorities','Discuss a coordinated care plan','Confirm the scope before your appointment']},
 {slug:'paint-correction',name:'Paint Correction',tag:'Let the finish speak.',image:'polishing',description:'Explore options for addressing visible paint imperfections. A vehicle assessment is needed to discuss suitability and realistic results.',highlights:['Discuss visible swirls and paint concerns','Ask about a paint assessment','Confirm a suitable correction approach']},
 {slug:'ceramic-coating',name:'Ceramic Coating',tag:'Think beyond the shine.',image:'porsche',description:'Ask about protective coating options and the preparation your paint may need. Availability, products and maintenance requirements need confirmation.',highlights:['Discuss coating suitability','Ask about preparation requirements','Confirm aftercare and product details']},
 {slug:'engine-bay-detailing',name:'Engine Bay Detailing',tag:'Attention beneath the surface.',image:'road',description:'Discuss appropriate care for your engine compartment, with the vehicle’s materials and sensitive components in mind.',highlights:['Review your vehicle’s suitability','Discuss sensitive components','Confirm a safe scope of care']},
].map(s=>({...s,confirmed:false}));
export const packages = [
 {name:'Essential Detail',description:'Start with the areas that need attention most.',inclusions:['Your priority areas','Vehicle condition review','Agreed scope of care'],price:null,confirmed:false},
 {name:'Premium Detail',description:'Explore a more comprehensive refresh.',inclusions:['Interior care options','Exterior care options','A tailored care plan'],price:null,confirmed:false},
 {name:'Complete Detail',description:'Discuss care for your vehicle as a whole.',inclusions:['Inside-and-out assessment','Finish care options','Personalized recommendations'],price:null,confirmed:false},
];
export const faqs = [
 ['What detailing services are available?','Explore the service options here, then call to confirm current availability and the right approach for your vehicle. Listed services and packages are subject to confirmation.'],
 ['How can I request an appointment?','Call +1 (707) 309-8836 to discuss your vehicle and preferred date. Online forms can help prepare your request, but online delivery is not currently enabled.'],
 ['How long does a detailing appointment take?','Timing depends on your vehicle, its condition and the agreed service. Please confirm the expected duration when discussing your appointment.'],
 ['How is pricing determined?','Request a personalized quote based on your vehicle size, condition and requested care. No fixed prices are currently published.'],
 ['Where is Cali Vehicle Detailing located?','Find us at 13 Rancho Dr, Sonoma, CA 95476, United States. Please call before visiting to confirm an appointment.'],
 ['How can I contact your team?','Call +1 (707) 309-8836. Business hours and social profiles will be added when confirmed.'],
];
export const gallery = [
 {image:'hero',category:'Complete Detail',title:'The art of the open road'},
 {image:'interior',category:'Interior',title:'A considered cabin'},
 {image:'mercedes',category:'Exterior',title:'Presence in every line'},
 {image:'detail',category:'Paint Finish',title:'Light meets bodywork'},
 {image:'porsche',category:'Paint Finish',title:'A finish worth a second look'},
 {image:'road',category:'Exterior',title:'Ready for the next drive'},
];
