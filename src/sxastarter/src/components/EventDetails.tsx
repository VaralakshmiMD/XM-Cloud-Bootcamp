import React from 'react';
import classes from './EventDetails.module.css';
import {
  Image as JssImage,
  RichText as JssRichText,
  ImageField,
  Field,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  EventDescription: Field<string>;
  EventImage: ImageField;
  EventLocation: Field<string>;
  EventTitle: Field<string>;
  IntroText: Field<string>;
}

type EventsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: EventsProps): JSX.Element => {
  return (
    <div className={classes.Card}>
      <div>
        <div className={classes.EventTitle}>
          <Text field={props.fields.EventTitle} />
        </div>
        <div className={classes.EventImage}>
          <JssImage field={props?.fields?.EventImage} />
        </div>
        <div className={classes.EventDescription}>
          <JssRichText field={props.fields?.EventDescription} />

          <div className={classes.EventLocation}>
            <Text field={props?.fields?.EventLocation} />
          </div>
        </div>
      </div>
    </div>
  );
};
export const VLvariant = (props: EventsProps): JSX.Element => {
  return (
    <div>
      <div>
        <div className="event-title">
          <Text field={props.fields.EventTitle} />
        </div>
        <div className="event-description">
          <JssRichText field={props.fields?.EventDescription} />
        </div>
        <div className="event-location">
          <Text field={props?.fields?.EventLocation} />
        </div>
      </div>
    </div>
  );
};
