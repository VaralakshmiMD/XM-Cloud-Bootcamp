import React from 'react';
import {
  Image as JssImage,
  RichText as JssRichText,
  ImageField,
  Field,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import classes from './EventDetails.module.css';

interface Fields {
  items: RelatedEventsProps[];
}

interface RelatedEventsProps {
  fields: {
    EventTitle: Field<string>;
    IntroText: Field<string>;
    EventImage: ImageField;
  };
  url: string;
}

type RelatedProps = {
  params: { [key: string]: string };
  fields: Fields;
};
export const Default = (props: RelatedProps): JSX.Element => {
  return (
    <div className="row">
      <h1>RELATED EVENTS</h1>
      {props.fields?.items?.slice(0, 3).map((relatedeventdetail) => {
        return (
          <>
            <div className="col-sm-12 col-md-4">
              <a
                href={`${relatedeventdetail.url}`}
                key={relatedeventdetail.fields.EventTitle.value}
              >
                <div className={classes.EventTitle}>
                  <Text field={relatedeventdetail?.fields?.EventTitle} />

                  <div className={classes.EventImage}>
                    <JssImage
                      height="400"
                      width="404"
                      field={relatedeventdetail?.fields?.EventImage}
                    />

                    <div className={classes.EventDescription}>
                      <JssRichText field={relatedeventdetail?.fields?.IntroText} />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </>
        );
      })}
    </div>
  );
};
