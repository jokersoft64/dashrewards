function t(t) {
    return t && t.__esModule ? t.default : t
}
var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {},
    n = {},
    a = {},
    i = e.parcelRequiredcd5;
null == i && ((i = function(t) {
    if (t in n) return n[t].exports;
    if (t in a) {
        var e = a[t];
        delete a[t];
        var i = {
            id: t,
            exports: {}
        };
        return n[t] = i, e.call(i.exports, i, i.exports), i.exports
    }
    var o = new Error("Cannot find module '" + t + "'");
    throw o.code = "MODULE_NOT_FOUND", o
}).register = function(t, e) {
    a[t] = e
}, e.parcelRequiredcd5 = i);
var o = i("k5dJ4"),
    s = i("ecVD7");
let l;
const u = new(t(s))("https://bsc-dataseed1.binance.org:443");
window.addEventListener("DOMContentLoaded", (() => {
    let e = !1;
    const n = document.getElementById("connectButton"),
        a = document.getElementById("accountId"),
        i = document.getElementById("claimDividendButton"),
        s = document.getElementById("balanceShib"),
        r = document.getElementById("balanceMeta"),
        c = document.getElementById("dividendsToBeClaimed"),
        d = (document.getElementById("dividendsPerShare"), document.getElementById("myShares")),
        y = document.getElementById("totalShares"),
        p = (document.getElementById("marketingWalletBalanceBNB"), document.getElementById("marketingWalletBalanceSHIB"), document.getElementById("totalDistributedSHIB")),
        m = u.utils.BN;
    let h, f, b;
    async function w(t) {
        t ? (l = u.utils.toChecksumAddress(t), a.innerText = l.replace(l.substring(4, 38), "...") || "Not able to get accounts") : (l = null, a.innerText = "Not able to get accounts"), await I(), e && l && (D(), g(), i.disabled = !1)
    }
    async function g() {
        !async function() {
            if (l) try {
                await h.methods.shares(l).call().then((t => {
                    b = t.amount;
                    let e = k(parseFloat(u.utils.fromWei(b, "ether")).toFixed(2));
                    e *= 10 ** 9, d.innerHTML = e
                })).catch((t => {
                    alert(t)
                }))
            } catch (t) {
                alert(t)
            } else alert("Please connect to MetaMask")
        }(), D()
    }
    async function x(t, e) {
        const n = await async function(t) {
            const e = [{
                constant: !0,
                inputs: [{
                    name: "_owner",
                    type: "address"
                }],
                name: "balanceOf",
                outputs: [{
                    name: "balance",
                    type: "uint256"
                }],
                type: "function"
            }, {
                constant: !0,
                inputs: [],
                name: "decimals",
                outputs: [{
                    name: "",
                    type: "uint8"
                }],
                type: "function"
            }];
            return await new u.eth.Contract(e, t)
        }(e);
        return await n.methods.balanceOf(t).call()
    }
    n.disabled = !0, setTimeout((async () => {
        ethereum.request({
            method: "eth_accounts"
        }).then((t => {
            t.length > 0 ? (n.style.display = "none", a.style.display = "flex", s.style.display = "flex", r.style.display = "flex", w(t[0])) : n.disabled = !1
        }))
    }), 1e3), async function() {
        h = await async function(t, e) {
            return await new u.eth.Contract(e, t)
        }("0x9C5cc6560FB4d728043b50eF1E0Ed627E86E489F", [{
            inputs: [],
            name: "claimDividend",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, {
            inputs: [],
            name: "dividendsPerShare",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "dividendsPerShareAccuracyFactor",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "shareholder",
                type: "address"
            }],
            name: "getUnpaidEarnings",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "minDistribution",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "minPeriod",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [{
                internalType: "address",
                name: "",
                type: "address"
            }],
            name: "shares",
            outputs: [{
                internalType: "uint256",
                name: "amount",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "totalExcluded",
                type: "uint256"
            }, {
                internalType: "uint256",
                name: "totalRealised",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalDistributed",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalDividends",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }, {
            inputs: [],
            name: "totalShares",
            outputs: [{
                internalType: "uint256",
                name: "",
                type: "uint256"
            }],
            stateMutability: "view",
            type: "function"
        }])
    }().then((async t => {
        v(), await M(), E(), e = !0, e && l && g()
    }));
    async function T(t) {
        const e = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=shiba-inu&vs_currencies=usd");
        return t * (await e.json())["shiba-inu"].usd
    }
    ethereum.on("accountsChanged", (t => async function(t) {
        t.length > 0 ? w(t[0]) : w(null)
    }(t)));
    const B = new(t(o))({
        forwarderOrigin: "http://localhost:1234"
    });
    async function v() {
        try {
            await h.methods.totalDistributed().call().then((t => {
                let e = parseFloat(u.utils.fromWei(t, "ether"));
                T(e).then((t => {
                    p.innerText = k(e.toFixed(2)) + "\n USD: $" + k(t.toFixed(2))
                }))
            })).catch((t => {
                alert(t)
            }))
        } catch (t) {
            alert(t)
        }
    }
    async function M() {
        await h.methods.dividendsPerShare().call().then((t => {
            f = new m(t)
        }))
    }
    async function E() {
        await h.methods.totalShares().call().then((t => {
            let e = u.utils.fromWei(t, "ether");
            y.innerText = k((e * 10 ** 9).toFixed(2))
        }))
    }
    async function D() {
        l && await h.methods.getUnpaidEarnings(l).call().then((t => {
            let e = u.utils.fromWei(t, "ether");
            T(e).then((t => {
                c.innerText = "SHIB: " + k(parseFloat(e).toFixed(2)) + "\n USD: $" + k(t.toFixed(2))
            }))
        }))
    }
    const F = () => {
            n.innerText = "Onboarding in progress", n.disabled = !0, B.startOnboarding()
        },
        S = async () => {
            try {
                await ethereum.request({
                    method: "eth_requestAccounts"
                });
                w((await ethereum.request({
                    method: "eth_accounts"
                }))[0]), l && (n.style.display = "none", a.style.display = "flex", s.style.display = "flex", r.style.display = "flex")
            } catch (t) {
                console.error(t)
            }
        };
    async function I() {
        if (l) {
            let t = await x(l, "0x2859e4544C4bB03966803b044A93563Bd2D0DD4D"),
                e = await x(l, "0x26165a5a3Dd21FA528bECf3Ff7F114D00a517344");
            t = u.utils.fromWei(t, "ether"), e = u.utils.fromWei(e, "ether"), e *= 10 ** 9, t = parseFloat(t).toFixed(2).toString(), e = parseFloat(e).toFixed(2).toString(), s.innerHTML = k(t) + " USD: $" + k((await T(t)).toFixed(2)) || "Not able to get balance", r.innerHTML = k(e) || "Not able to get balance"
        } else s.innerHTML = "Not able to get balance", r.innerHTML = "Not able to get balance"
    }

    function k(t) {
        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }(() => {
        const {
            ethereum: t
        } = window;
        return Boolean(t && t.isMetaMask)
    })() || (() => {
        const {
            ethereum: t
        } = window;
        return Boolean(t && t.isTrust)
    })() ? (n.innerText = "Connect", n.onclick = S, n.disabled = !1) : (n.innerText = "Click here to install MetaMask!", n.onclick = F, n.disabled = !1), i.onclick = async function() {
        l ? e ? (u.setProvider(ethereum), h.methods.claimDividend().send({
            from: l
        }).then((async t => {
            alert("Dividends claimed"), I(), v(), await M(), E(), g()
        }))) : alert("Please wait for the contract to be processed") : alert("Please connect to MetaMask")
    }
}));