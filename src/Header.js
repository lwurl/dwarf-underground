import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div class="expanded row header">
                <div class="clearfix">
                    <div class="float-left logo">
                        <img src="http://www.iconninja.com/files/409/4/1006/axe-icon.svg" alt="axe" />
                    </div>
                    <div class="float-right nav-links">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Log in</a>
                    </div>
                </div>
                <div class="headline text-center small-12 columns">
                    <h1>The Dwarf Underground</h1>
                    <h3>Delving deep for the <span class="gold">shiniest</span> news</h3>
                </div>
            </div>
        )
    }
}