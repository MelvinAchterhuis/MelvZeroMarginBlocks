let config = Shopware.Service('cmsService').getCmsBlockConfigByName('text-teaser');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
