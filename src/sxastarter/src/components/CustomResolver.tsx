import React from 'react';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  items: RelatedBlogProps[];
}

interface RelatedBlogProps {
  fields: {
    text: Field<string>;
  };
}

// interface itemProps {
//   fields: {
//     blog: RelatedBlogProps[];
//   };
// }

type PromoProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: PromoProps): JSX.Element => {
  //const ds = props.fields.Fields.blog.fields;

  return (
    <div>
      {props?.fields?.items?.map((xx) => {
        return (
          <>
            <div>{xx?.fields?.text?.value}</div>
          </>
        );
      })}
    </div>
  );
};
