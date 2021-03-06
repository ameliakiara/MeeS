import Lava from "../../structures/Lava";
import MeeS from "../../structures/Client";
import { Node } from "erela.js";
import Logger from "../../classes/Logger";

export default class NodeDisconnect extends Lava {
    constructor(client: MeeS) {
        super(client, {
            name: 'nodeDisconnect'
        })
    }

    async run(node: Node) {
        Logger.log("ERROR", `Node Disconnected: ${node.options.identifier}`);
    }
}