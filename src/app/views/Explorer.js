import React from "react";
import { Helmet } from "react-helmet";
import { withRouter, Link } from "react-router-dom";
import { TranslatedMessage } from "lib/TranslatedMessage";
import config from "client-config.json";

import ValidatedSearch from "app/partials/ValidatedSearch";
import ExplorerTopAccounts from "app/partials/explorer/ExplorerTopAccounts";
import RecentBlockStream from "app/partials/explorer/RecentBlockStream";

class Explorer extends React.PureComponent {
  state = {
    search: "",
    type: null,
    valid: false
  };

  handleSubmit(e) {
    e.preventDefault();
    const { history } = this.props;
    const { search, type, valid } = this.state;

    if (!valid) return;

    if (type === "account") {
      history.push(`/explorer/account/${search}`);
    } else if (type === "block") {
      history.push(`/explorer/block/${search}`);
    }
  }

  render() {
    const { search } = this.state;

    return (
      <div className="row justify-content-center my-5 mx-0">
        <Helmet title="Network Explorer" />

        <div className="col col-md-8">
          <h1>
            <TranslatedMessage id="explorer.title" />
          </h1>

          <hr />

          <form className="my-5" onSubmit={this.handleSubmit.bind(this)}>
            <label>
              <TranslatedMessage
                id="explorer.form.help"
                values={{ currency: config.currency.name }}
              />
            </label>

            <div className="form-row">
              <div className="col-md">
                <ValidatedSearch
                  size="lg"
                  onChange={({ search, type, valid }) =>
                    this.setState({ search, type, valid })
                  }
                />
              </div>
              <div className="col-auto mt-2 mt-md-0">
                <button className="btn btn-nano-primary btn-lg">
                  <TranslatedMessage id="search" />
                </button>
              </div>
            </div>
          </form>

          <div className="mt-5">
            <ExplorerTopAccounts count={10} />
          </div>

          <div className="mt-5">
            <RecentBlockStream count={10} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Explorer);
