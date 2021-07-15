let config = Shopware.Service('cmsService').getCmsBlockConfigByName('cross-selling');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
