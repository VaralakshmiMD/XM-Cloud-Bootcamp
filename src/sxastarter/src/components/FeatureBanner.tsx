import React from 'react';
import {
  Image as JssImage,
  ImageField,
  Field,
  Text,
  RichText as JssRichText,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  FeatureBanner: FeatureEventsProps;
}

interface FeatureEventsProps {
  fields: {
    EventImage: ImageField;
    EventTitle: Field<string>;
    IntroText: Field<string>;
  };
  url: string;
}

type EventsProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: EventsProps): JSX.Element => {
  return (
    <div className="row">
      <h1>FEATURE BANNER</h1>

      <div className="col-12">
        <a
          href={`${props.fields.FeatureBanner.url}`}
          key={props.fields.FeatureBanner.fields.EventTitle.value}
        >
          <div className="event-title">
            <Text field={props.fields.FeatureBanner.fields.EventTitle} />
            <JssRichText field={props.fields.FeatureBanner.fields.IntroText} />
          </div>
          <JssImage height="600" width="604" field={props.fields.FeatureBanner.fields.EventImage} />
        </a>
      </div>
    </div>
  );
};
