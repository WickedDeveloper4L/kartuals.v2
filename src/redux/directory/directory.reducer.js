const INITIAL_STATE = {
    section: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/NrwZNq1/hats.jpg',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/4TQ092q/jackets.jpg',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/yQsVxdD/shoes.jpg',
          id: 3,
          linkUrl: 'shop/sneakers'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/xLV5L8m/womensclothing.jpg',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/7WXhVPV/mens.jpg',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens'
        }
      ]
}

export const directoryReducer = (state = INITIAL_STATE, action)=>{
    switch (action.type) {
        default:
            return state;
    }
}