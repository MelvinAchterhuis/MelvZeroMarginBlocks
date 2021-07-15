let config = Shopware.Service('cmsService').getCmsBlockConfigByName('text-two-column');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
