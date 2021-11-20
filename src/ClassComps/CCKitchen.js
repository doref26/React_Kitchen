import React, { Component } from "react";
import FCRecipe from "../FunctionalComps/FCP";

export default class MyKitchen extends Component {
    constructor(props) {
        super(props);
        this.recMade = 0;
        this.state = {};
    }


    render() {
        return (
            <div>
                Ready to eat!
                Recipe made: {this.recMade}
                <FCRecipe />
            </div>
        )
    };

}