let config = Shopware.Service('cmsService').getCmsBlockConfigByName('gallery-buybox');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
