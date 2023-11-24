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
  items: Events[];
}
interface Events {
  fields: {
    EventTitle: Field<string>;
    EventImage: ImageField;
    IntroText: Field<string>;
  };
  url: string;
}

type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: PromoProps): JSX.Element => {
  return (
    <div>
      <div className="component-content row">
        {props?.fields?.items?.map((event) => {
          return (
            <>
              <div className="col-sm-12 col-md-4">
                <a href={`${event.url}`} key={event.fields.EventTitle.value}>
                  <div className="event-Title">
                    <Text field={event?.fields?.EventTitle} />
                  </div>
                  <div className={classes.EventImage}>
                    <JssImage height="200" width="204" field={event?.fields?.EventImage} />
                    <div className="introtext">
                      <JssRichText field={event?.fields?.IntroText} />
                    </div>
                  </div>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
