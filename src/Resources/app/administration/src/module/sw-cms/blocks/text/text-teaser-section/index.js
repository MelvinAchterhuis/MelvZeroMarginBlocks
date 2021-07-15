let config = Shopware.Service('cmsService').getCmsBlockConfigByName('text-teaser-section');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
