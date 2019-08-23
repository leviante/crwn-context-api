import React, { useContext } from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';


//import the context
import CollectionsContext from "../../contexts/collections/collections.context";

import './collection.styles.scss';

const CollectionPage = ({ match }) => {

  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
      {items.map(item => (
        <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};



export default CollectionPage;

/*
Two ways to use a context

1-use as a component, wrap the part of the application where you want to access to whatever you stored inside the context, this is a bit more difficult way though

In order to access the context data, we use functions inside the component (so inside {})

By using .Consumer, now we can use a function inside that takes whatever we stored in the collections context (in this case, the big collections object that is set initially to SHOP_DATA)

We access the specific data we want by using match.params.collectionId and then we return what we wanted to render using that data in the first place.

2 - This one is a bit easier than above, use a HOOK called useContext.

useContext gets the context component we created as an argument and returns us the value that is stored inside the context component. With this way, we can easily pluck values from context components

Rest is the same, we access the specific collection by using match.params.collectionsId and continue with our rendering.




*/