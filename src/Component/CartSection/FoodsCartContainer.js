import React from 'react';
import style from './foodsCartContainer.module.scss';
import FoodsCartItem from './FoodsCartItem';
const FoodsCartContainer = () => {
    return (
        <div className={style.container}>
            <FoodsCartItem/>
            <FoodsCartItem/>
        </div>
    );
};

export default FoodsCartContainer;