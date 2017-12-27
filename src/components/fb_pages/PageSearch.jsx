import React, { Component } from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';
import { debounce } from 'throttle-debounce';

const Option = AutoComplete.Option;

class PageSearch extends Component {


    constructor(props) {
        super(props);
        this.handleSearch = debounce(750, this.handleSearch.bind(this));
    }

    renderOption = (item) => {
        return (
            <Option key={item.id} text={item.name}>
                <p>
                    <img src={`http://graph.facebook.com/${item.id}/picture`} width="25px" alt="{item.name}" /> - {item.name}
                </p>
            </Option>
        );
    };

    handleSearch(query) {
        if(!!query) {
            this.props.actions.pageSearch(query);
        }
    }

    render() {
        return(
            <AutoComplete
                className="global-search"
                size="large"

                style={{ width: '100%' }}
                dataSource={this.props.pages.map(this.renderOption)}
                onSearch={this.handleSearch}
                placeholder="Search for Pages"
                optionLabelProp="text"
                onSelect={this.props.onSelect}
            >
                <Input
                    suffix={(
                        <Button className="search-btn" size="large" type="primary" >
                            <Icon type="search" />
                        </Button>
                    )}
                />
            </AutoComplete>
        )
    }

}

export default PageSearch;