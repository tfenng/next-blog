
export default function Footer() {
    return  <div class="container">
        <div className="text-xl font-bold">My favourites</div>
        <div className="space-x-3">
            <a href="https://vercel.com/">Vercel</a>
            <a href="https://aws.amazon.com/cn/">Amazon AWS</a>
            <a href="https://www.cloudflare-cn.com//">Cloud Flare</a>
        </div>
        <div className="text-xl font-bold">MCP Sites</div>
        <div className="space-x-3">
            <a href="https://mcpservers.org">MCP Servers</a>
            <a href="https://mcp.so">MCP so</a>
            <a href="https://glama.ai/mcp/servers">Glama MCP</a>
            <a href="https://www.pulsemcp.com">pulsemcp</a>
            <a href="https://modelscope.cn/mcp">ModelScope MCP</a>
        </div>
    </div>;
}