import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import SiglarRData from "./components/SiglarRData";
import { Blocks } from "./components/Blocks";
import { Block } from "./components/Block";
import { Transactions } from "./components/Transactions";
import { Contract } from "./components/contract";
import { Contracts } from "./components/contracts";
import { ContractsTop } from "./components/contractsTop";
import { Transaction } from "./components/Transaction";
import { Address } from "./components/address";
import { Transfers } from "./components/transfers";
import { Tokens } from "./components/Tokens";
import { ContractVerification } from "./components/Verify";

import { Dashboard } from "./components/Dashboard";
import { DashHome } from "./components/DashHome";

import { DashboardSettings } from "./components/DashboardSettings";
import { DashSetting } from "./components/DashSetting";


import { DashboardApiKeys } from "./components/DashboardApiKeys";
import { DashAPiKeys } from "./components/DashAPiKeys";

import { Search } from "./components/search";

import { Accounts } from "./components/Accounts";
import { AccountsTop } from "./components/AccountsTop";
import { Nodes } from "./components/Nodes";
import { Staking } from "./components/Staking";
import Ecosystem from "./components/Ecosystem";
import Voting from "./components/Voting";
import Donation from "./components/Donation";

const AppRoutes = [
    {
        index: true,
        path: '/',
        element: <Home />
    }, {
        path: '/home',
        element: <Home />
    }, {
        path: '/contracts',
        element: <Contracts />
    }, {
        path: '/contractsTop',
        element: <ContractsTop />
    }, {
        path: '/counter',
        element: <Counter />
    }, {
        path: '/fetch-data',
        element: <FetchData />
    }, {
        path: '/signal-data',
        element: <SiglarRData />
    }, {
        path: '/search/*',
        element: <Search />
    }, {
        path: '/block/*',
        element: <Block />
    }, {
        path: '/blocks',
        element: <Blocks />
    }, {
        path: '/transaction/*',
        element: <Transaction />
    }, {
        path: '/transactions',
        element: <Transactions />
    }, {
        path: '/transfers',
        element: <Transfers />
    }, {
        path: '/address',
        element: <Address />
    }, {
        path: '/address/*',
        element: <Address />
    }, {
        path: '/contract',
        element: <Contract />
    }, {
        path: '/contract/*',
        element: <Contract />
    },    {
        path: '/verify',
        element: <ContractVerification />
    }, {
        path: '/verify/*',
        element: <ContractVerification />
    }, {
        path: '/dashboard',
        element: <Dashboard />
    }, {
        path: '/dashhome',
        element: <DashHome />
    }, {
        path: '/nodes',
        element: <Nodes />
    }, {
        path: '/accounts',
        element: <Accounts />
    }, {
        path: '/accountsTop',
        element: <AccountsTop />
    }, {
        path: '/DashboardSettings',
        element: <DashboardSettings />
    }, {
        path: '/DashSetting',
        element: <DashSetting />
    }, {
        path: '/DashAPiKeys',
        element: <DashAPiKeys />
    }, {
        path: '/DashboardApiKeys',
        element: <DashboardApiKeys />
    }, {
        path: '/staking',
        element: <Staking />
    }, {
        path: '/tokens',
        element: <Tokens />
    }, {
        path: '/ecosystem',
        element: <Ecosystem/>
    }, {
        path: '/voting',
        element: <Voting />
    }, {
        path: '/donation',
        element: <Donation />
    }


];

export default AppRoutes;
