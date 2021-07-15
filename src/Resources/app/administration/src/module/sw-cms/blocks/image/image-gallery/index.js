let config = Shopware.Service('cmsService').getCmsBlockConfigByName('image-gallery');

config.defaultConfig = {
    marginBottom: '',
    marginTop: '',
    marginLeft: '',
    marginRight: ''
}

Shopware.Service('cmsService').registerCmsBlock(config);
