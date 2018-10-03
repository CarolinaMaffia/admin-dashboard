import React, { Component } from 'react';
import Select from 'react-select';
import { FaSearch } from 'react-icons/fa';
import './UserTable.css';

const options = [
    { value: 'User', label: 'User' },
    { value: 'Administrator', label: 'Administrator' },
    { value: 'Delete', label: 'Delete' }
  ];

export default class UserTable extends Component {
    state = {
        selectedOption: 'user',
      }
      handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      }
    render(){
        const { selectedOption } = this.state;
        return (
            <div className="projects-inner">
                <header className="projects-header">
                    <div className="user-title">
                        Users List
                    </div>
                    <div className="search-bar holaclase2">
                        <input className="search"/> 
                        <FaSearch 
                        className="search-icon"/>
                    </div>
                </header>
                <table className="projects-table">
                    <thead> 
                        <tr>
                            <th>User</th>
                            <th>User email</th>
                            <th>Token amount</th>
                            <th>User role</th>
                        </tr>
                    </thead>
                    <tr>
                        <td className="user">
                            <figure>
                                <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />
                            </figure>
                            <div className="user-info">
                                <p>Carolina Maffia</p>
                            </div>
                        </td>
                        <td>
                            <p>Carolina.maffia@truenorth.co</p>
                        </td>
                        <td>
                            123
                        </td>
                        <td>
                            <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="user">
                            <figure>
                                <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />
                            </figure>
                            <div className="user-info">
                                <p>Carolina Maffia</p>
                            </div>
                        </td>
                        <td>
                            <p>Carolina.maffia@truenorth.co</p>
                        </td>
                        <td>
                            123
                        </td>
                        <td>
                            <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="user">
                            <figure>
                                <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />
                            </figure>
                            <div className="user-info">
                                <p>Carolina Maffia</p>
                            </div>
                        </td>
                        <td>
                            <p>Carolina.maffia@truenorth.co</p>
                        </td>
                        <td>
                            123
                        </td>
                        <td>
                            <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="user">
                            <figure>
                                <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />
                            </figure>
                            <div className="user-info">
                                <p>Carolina Maffia</p>
                            </div>
                        </td>
                        <td>
                            <p>Carolina.maffia@truenorth.co</p>
                        </td>
                        <td>
                            123
                        </td>
                        <td>
                            <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className="user">
                            <figure>
                                <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1" />
                            </figure>
                            <div className="user-info">
                                <p>Carolina Maffia</p>
                            </div>
                        </td>
                        <td>
                            <p>Carolina.maffia@truenorth.co</p>
                        </td>
                        <td>
                            123
                        </td>
                        <td>
                            <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            />
                        </td>   
                    </tr>
                </table>
            </div>
        )
    }
}