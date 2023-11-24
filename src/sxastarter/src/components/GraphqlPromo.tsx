import React from 'react';
import {
  Image as JssImage,
  RichText as JssRichText,
  ImageField,
  Field,
  LinkField,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  data: {
    datasource: {
      PromoText: {
        jsonValue: Field<string>;
      };
      PromoIcon: {
        jsonValue: ImageField;
      };
      PromoLink: {
        jsonValue: LinkField;
      };
    };
  };
}

type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: PromoProps): JSX.Element => {
  const id = props.params?.RenderingIdentifier;
  const ds = props?.fields?.data.datasource;

  return (
    <div className={`component promo ${props.params?.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <div className="field-promoicon">
          <JssImage field={ds.PromoIcon?.jsonValue} />
        </div>
        <div className="promo-text">
          <div>
            <div className="field-promotext">
              <JssRichText field={ds.PromoText?.jsonValue} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
