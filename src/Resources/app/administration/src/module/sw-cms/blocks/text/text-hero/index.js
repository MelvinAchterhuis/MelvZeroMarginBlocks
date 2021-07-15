let config = Shopware.Service('cmsService').getCmsBlockConfigByName('text-hero');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
