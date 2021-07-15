let config = Shopware.Service('cmsService').getCmsBlockConfigByName('text-on-image');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
