import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'cast';
  };
  attributes: {
    image: Attribute.String;
    alt: Attribute.String;
    link: Attribute.String;
  };
}

export interface SharedVariant extends Schema.Component {
  collectionName: 'components_shared_variants';
  info: {
    displayName: 'Variant';
    icon: 'brush';
  };
  attributes: {
    title: Attribute.String;
    desc: Attribute.String;
    alt: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.media': SharedMedia;
      'shared.variant': SharedVariant;
    }
  }
}
