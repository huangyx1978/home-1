var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { observer } from 'mobx-react';
import { Button } from 'reactstrap';
import { nav, Page, isBridged } from 'tonva-tools';
import { List, LMR, Badge, DropdownActions } from 'tonva-react-form';
import consts from '../consts';
import { store } from '../store';
let TieApps = class TieApps extends React.Component {
    constructor(props) {
        super(props);
        this.rightMenu = [
            {
                caption: '取消关注',
                icon: 'trash',
                action: this.unleash,
            }
        ];
        this.appClick = this.appClick.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.unleash = this.unleash.bind(this);
    }
    unleash() {
        return __awaiter(this, void 0, void 0, function* () {
            if (confirm("真的要取消关注吗？") === false)
                return;
            yield store.unfollowUnit();
            nav.pop();
        });
    }
    appClick(app) {
        return __awaiter(this, void 0, void 0, function* () {
            let unitId = store.unit.id;
            let appId = app.id;
            if (appId === 0) {
                //nav.push(<Chat />);
                nav.navToApp('http://localhost:3016/', unitId);
            }
            else {
                let url = app.url;
                if (url === undefined) {
                    alert('APP: ' + app.name + '\n' + app.discription + '\n尚未绑定服务');
                }
                else {
                    nav.navToApp(url, unitId);
                }
            }
        });
    }
    renderRow(app, index) {
        let { id: appId, name, icon, discription } = app;
        let unread = undefined;
        if (appId === 0) {
            unread = store.unit.messages.unread;
            //let dict = store.messageUnreadDict;
            //unread = dict.get(unit);
        }
        return React.createElement(LMR, { className: "p-2", left: React.createElement(Badge, { badge: unread },
                React.createElement("img", { src: icon || consts.appItemIcon })) },
            React.createElement("b", null, name),
            React.createElement("small", { className: "text-muted" }, discription));
    }
    clickToAdmin() {
        return __awaiter(this, void 0, void 0, function* () {
            let adminApp = yield store.getAdminApp();
            //nav.push(<UnitMan {...this.props} />);
            let unitId = store.unit.id;
            isBridged();
            nav.navToApp(adminApp.url, unitId);
        });
    }
    render() {
        let { id, name, discription, apps, icon, ownerName, ownerNick, isOwner, isAdmin } = store.unit;
        if (ownerNick !== undefined)
            ownerNick = '- ' + ownerNick;
        let right;
        if (isOwner === 1 || isAdmin === 1) {
            right = React.createElement(Button, { color: "success", size: "sm", onClick: () => this.clickToAdmin() }, "\u8FDB\u5165\u7BA1\u7406");
        }
        else if (id > 0) {
            right = React.createElement(DropdownActions, { actions: this.rightMenu });
        }
        return React.createElement(Page, { header: name, right: right },
            React.createElement("div", { className: 'apps-list-top' },
                React.createElement("img", { src: icon || consts.appItemIcon }),
                React.createElement("div", null,
                    React.createElement("header", null, name),
                    React.createElement("div", null,
                        React.createElement("label", null, "\u7B80\u4ECB\uFF1A"),
                        React.createElement("span", null, discription)),
                    React.createElement("div", null,
                        React.createElement("label", null, "\u53D1\u5E03\u8005\uFF1A"),
                        React.createElement("span", null,
                            ownerName,
                            " ",
                            ownerNick)))),
            React.createElement(List, { items: apps, item: { render: this.renderRow, onClick: this.appClick } }));
        // <ListView items={apps} converter={this.appConverter} itemClick={this.appClick} />
    }
};
TieApps = __decorate([
    observer
], TieApps);
export { TieApps };
//# sourceMappingURL=tieApps.js.map