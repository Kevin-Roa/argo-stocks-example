import { Layout, Model, TabNode } from 'flexlayout-react';
import type { IJsonModel } from 'flexlayout-react';
import './App.css';
import 'flexlayout-react/style/light.css';

let json : IJsonModel= {
    global: {"tabEnableFloat": true, "rootOrientationVertical": true, "tabSetMinHeight": 500},
    borders: [],
    layout: {
        type: "row",
        weight: 100,
        children: [
            {
                type: "row",
                weight: 100,
                children: [
                    {
                        type: "tabset",
                        weight: 50,
                        children: [
                            {
                                type: "tab",
                                name: "Time Series",
                                component: "button",
                            }
                        ]
                    },
                ]
            },
            {
                type: "row",
                weight: 100,
                children: [
                    {
                        type: "tabset",
                        weight: 50,
                        children: [
                            {
                                type: "tab",
                                name: "Diversification",
                                component: "button",
                            }
                        ]
                    },
                    {
                        type: "tabset",
                        weight: 50,
                        children: [
                            {
                                type: "tab",
                                name: "Details",
                                component: "button",
                            },
                            {
                                type: "tab",
                                name: "Watch List",
                                component: "button",
                            }
                        ]
                    },
                    {
                        type: "tabset",
                        weight: 50,
                        children: [
                            {
                                type: "tab",
                                name: "Account Summary",
                                component: "button",
                            },
                            {
                                type: "tab",
                                name: "Watch List",
                                component: "button",
                            }
                        ]
                    },
                ]
            }
        ]
    }
};

const model = Model.fromJson(json);

function App() {

    const factory = (node: TabNode) => {
        let component = node.getComponent();
        if (component === "button") {
            return <button>{node.getName()}</button>;
        }
    }

    return (
        <Layout
            model={model}
            factory={factory} />
    );
}

export default App;