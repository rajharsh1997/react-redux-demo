import React from 'react'
import {buyCake} from '../redux'
//To connect the two function to react component use connect HOC
import {connect} from 'react-redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cakes</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(CakeContainer)
