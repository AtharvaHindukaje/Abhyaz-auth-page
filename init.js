if (typeof catalyst === 'undefined'){
	throw new Error('Catalyst Web SDK not included. You must include it before /__catalyst/sdk/init.js');
}
catalyst.initApp({
	project_Id : "13112000000009813", //No I18N
	zaid : "10049937939", //No I18N
    auth_domain : "https://accounts.zohoportal.com" //No I18N
}, {
	org_id: "795299854" //No I18N
});