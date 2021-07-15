let config = Shopware.Service('cmsService').getCmsBlockConfigByName('image-three-column');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
