(function(j, i, g, m, k, n, o) {
    function q(b) {
        var e, f, a = this,
            c = b.length,
            d = 0,
            h = a.i = a.j = a.m = 0;
        a.S = [];
        a.c = [];
        for (c || (b = [c++]); d < g;) a.S[d] = d++;
        for (d = 0; d < g; d++) e = a.S[d], h = h + e + b[d % c] & g - 1, f = a.S[h], a.S[d] = f, a.S[h] = e;
        a.g = function(b) {
            var c = a.S,
                d = a.i + 1 & g - 1,
                e = c[d],
                f = a.j + e & g - 1,
                h = c[f];
            c[d] = h;
            c[f] = e;
            for (var i = c[e + h & g - 1]; --b;) d = d + 1 & g - 1, e = c[d], f = f + e & g - 1, h = c[f], c[d] = h, c[f] = e, i = i * g + c[e + h & g - 1];
            a.i = d;
            a.j = f;
            return i
        };
        a.g(g)
    }

    function p(b, e, f, a, c) {
        f = [];
        c = typeof b;
        if (e && c == "object")
            for (a in b)
                if (a.indexOf("S") < 5) try {
                    f.push(p(b[a], e - 1))
                } catch (d) {}
        return f.length ? f : b + (c != "string" ? "\0" : "")
    }

    function l(b, e, f, a) {
        b += "";
        for (a = f = 0; a < b.length; a++) {
            var c = e,
                d = a & g - 1,
                h = (f ^= e[a & g - 1] * 19) + b.charCodeAt(a);
            c[d] = h & g - 1
        }
        b = "";
        for (a in e) b += String.fromCharCode(e[a]);
        return b
    }
    i.seedrandom = function(b, e) {
        var f = [],
            a;
        b = l(p(e ? [b, j] : arguments.length ? b : [(new Date).getTime(), j, window], 3), f);
        a = new q(f);
        l(a.S, j);
        i.random = function() {
            for (var c = a.g(m), d = o, b = 0; c < k;) c = (c + b) * g, d *= g, b = a.g(1);
            for (; c >= n;) c /= 2, d /= 2, b >>>= 1;
            return (c + b) / d
        };
        return b
    };
    o = i.pow(g, m);
    k = i.pow(2, k);
    n = k * 2;
    l(i.random(), j)
})([], Math, 256, 6, 52);

function hasDuplicateStrings(e) {
    for (var s = {}, t = 0; t < e.length; t++) {
        var o = e[t];
        if (o in s) return !0;
        s[o] = !0
    }
    return !1
}

function invertObject(e) {
    var s = {};
    return Object.keys(e).forEach(function(t) {
        e[t].forEach(function(e) {
            s[e] || (s[e] = []), s[e].push(t)
        })
    }), s
}
var TOO_MUCH_SYNERGY = 100,
    SQUARES_PER_ROW = 5,
    DEFAULT_PROFILE = {
        defaultMinimumSynergy: -3,
        defaultMaximumSynergy: 7,
        defaultMaximumIndividualSynergy: 4.5,
        defaultMaximumSpill: 2,
        defaultInitialOffset: 1,
        defaultMaximumOffset: 2,
        baselineTime: 28.25,
        timePerDifficulty: .75
    },
    NORMAL_PROFILE = {
        defaultMinimumSynergy: DEFAULT_PROFILE.defaultMinimumSynergy,
        defaultMaximumSynergy: DEFAULT_PROFILE.defaultMaximumSynergy,
        defaultMaximumIndividualSynergy: DEFAULT_PROFILE.defaultMaximumIndividualSynergy,
        defaultMaximumSpill: DEFAULT_PROFILE.defaultMaximumSpill,
        defaultInitialOffset: DEFAULT_PROFILE.defaultInitialOffset,
        defaultMaximumOffset: DEFAULT_PROFILE.defaultMaximumOffset,
        baselineTime: DEFAULT_PROFILE.baselineTime,
        timePerDifficulty: DEFAULT_PROFILE.timePerDifficulty
    },
    SHORT_PROFILE = {
        defaultMinimumSynergy: DEFAULT_PROFILE.defaultMinimumSynergy,
        defaultMaximumSynergy: 3,
        defaultMaximumIndividualSynergy: DEFAULT_PROFILE.defaultMaximumIndividualSynergy,
        defaultMaximumSpill: DEFAULT_PROFILE.defaultMaximumSpill,
        defaultInitialOffset: DEFAULT_PROFILE.defaultInitialOffset,
        defaultMaximumOffset: DEFAULT_PROFILE.defaultMaximumOffset,
        baselineTime: 12,
        timePerDifficulty: .5
    },
    BLACKOUT_PROFILE = {
        defaultMinimumSynergy: -10,
        defaultMaximumSynergy: 10,
        defaultMaximumIndividualSynergy: DEFAULT_PROFILE.defaultMaximumIndividualSynergy,
        defaultMaximumSpill: DEFAULT_PROFILE.defaultMaximumSpill,
        defaultInitialOffset: 2,
        defaultMaximumOffset: 6,
        baselineTime: DEFAULT_PROFILE.baselineTime,
        timePerDifficulty: DEFAULT_PROFILE.timePerDifficulty
    },
    SHORTBLACKOUT_PROFILE = {
        defaultMinimumSynergy: -4,
        defaultMaximumSynergy: 4,
        defaultMaximumIndividualSynergy: DEFAULT_PROFILE.defaultMaximumIndividualSynergy,
        defaultMaximumSpill: DEFAULT_PROFILE.defaultMaximumSpill,
        defaultInitialOffset: 2,
        defaultMaximumOffset: 6,
        baselineTime: 12,
        timePerDifficulty: .5
    };
Array.prototype.sortNumerically = function() {
    return this.sort(function(e, s) {
        return e - s
    })
}, Array.prototype.shuffled = function() {
    for (var e = this.slice(), s = 0; s < e.length; s++) {
        var t = Math.floor(Math.random() * (s + 1)),
            o = e[s];
        e[s] = e[t], e[t] = o
    }
    return e
};
var INDICES_PER_ROW = {
        row1: [1, 2, 3, 4, 5],
        row2: [6, 7, 8, 9, 10],
        row3: [11, 12, 13, 14, 15],
        row4: [16, 17, 18, 19, 20],
        row5: [21, 22, 23, 24, 25],
        col1: [1, 6, 11, 16, 21],
        col2: [2, 7, 12, 17, 22],
        col3: [3, 8, 13, 18, 23],
        col4: [4, 9, 14, 19, 24],
        col5: [5, 10, 15, 20, 25],
        tlbr: [1, 7, 13, 19, 25],
        bltr: [5, 9, 13, 17, 21]
    },
    ROWS_PER_INDEX = invertObject(INDICES_PER_ROW),
    BingoGenerator = function(e, s) {
        s || (s = {}), this.language = s.lang || "name", this.mode = "blackout", this.seed = s.seed || Math.ceil(999999 * Math.random()).toString(), e.info && "true" === e.info.combined && (e[this.mode] ? e = e[this.mode] : e.normal ? e = e.normal : console.log("bingoList doesn't contain a valid sub goal list for mode: \"" + this.mode + '"')), this.goalsByDifficulty = e, this.rowtypeTimeSave = e.rowtypes, this.synergyFilters = e.synfilters || {}, this.goalsList = [];
        for (var t = 1; 25 >= t; t++) this.goalsList = this.goalsList.concat(e[t]);
        this.goalsList.sort(function(e, s) {
            var t = e.time - s.time;
            return 0 !== t ? t : e.id > s.id ? 1 : e.id < s.id ? -1 : 0
        }), this.goalsByName = {};
        for (var t = 0; t < this.goalsList.length; t++) {
            var o = this.goalsList[t];
            this.goalsByName[o.name] = o
        }
        this.profile = NORMAL_PROFILE, "short" === this.mode ? this.profile = SHORT_PROFILE : "blackout" === this.mode && (this.profile = BLACKOUT_PROFILE), this.baselineTime = s.baselineTime || this.profile.baselineTime, this.timePerDifficulty = s.timePerDifficulty || this.profile.timePerDifficulty, this.minimumSynergy = s.minimumSynergy || this.profile.defaultMinimumSynergy, this.maximumSynergy = s.maximumSynergy || this.profile.defaultMaximumSynergy, this.maximumIndividualSynergy = s.maximumIndividualSynergy || this.profile.defaultMaximumIndividualSynergy, this.maximumSpill = s.maximumSpill || this.profile.defaultMaximumSpill, this.initialOffset = s.initialOffset || this.profile.defaultInitialOffset, this.maximumOffset = s.maximumOffset || this.profile.defaultMaximumOffset, Math.seedrandom(this.seed)
    };
BingoGenerator.prototype.makeCard = function() {
    this.bingoBoard = this.generateMagicSquare();
    for (var e = this.generatePopulationOrder(), s = 1; 25 >= s; s++) {
        var t = e[s],
            o = this.chooseGoalForPosition(t);
        if (!o.goal) return !1;
        this.bingoBoard[t].types = o.goal.types, this.bingoBoard[t].subtypes = o.goal.subtypes, this.bingoBoard[t].rowtypes = o.goal.rowtypes, this.bingoBoard[t].name = o.goal[this.language] || o.goal.name, this.bingoBoard[t].id = o.goal.id, this.bingoBoard[t].time = o.goal.time, this.bingoBoard[t].goal = o.goal, this.bingoBoard[t].synergy = o.synergy
    }
    return this.bingoBoard
}, BingoGenerator.prototype.generateMagicSquare = function() {
    for (var e = [], s = 1; 25 >= s; s++) {
        var t = this.difficulty(s);
        e[s] = {
            difficulty: t,
            desiredTime: t * this.timePerDifficulty
        }
    }
    return e
}, BingoGenerator.prototype.chooseGoalForPosition = function(e) {
    for (var s = this.bingoBoard[e].difficulty, t = s * this.timePerDifficulty, o = this.initialOffset; o <= this.maximumOffset; o++) {
        var l = t - o,
            i = t + o,
            a = this.getGoalsInTimeRange(l, i);
        a = a.shuffled();
        for (var r = 0; r < a.length; r++) {
            var n = a[r];
            if (!(this.hasGoalOnBoard(n) || "blackout" === this.mode && this.hasConflictsOnBoard(n))) {
                var y = this.checkLine(e, n);
                if (this.maximumSynergy >= y.maxSynergy && y.minSynergy >= this.minimumSynergy) return {
                    goal: n,
                    synergy: y.maxSynergy
                }
            }
        }
    }
    return !1
}, BingoGenerator.prototype.generatePopulationOrder = function() {
    var e = [];
    e[1] = 13;
    var s = [1, 7, 19, 25, 5, 9, 17, 21].shuffled();
    e = e.concat(s);
    var t = [2, 3, 4, 6, 8, 10, 11, 12, 14, 15, 16, 18, 20, 22, 23, 24].shuffled();
    e = e.concat(t);
    for (var o = 23; 25 >= o; o++) {
        var l = this.getDifficultyIndex(o);
        if (0 !== l) {
            for (var i = 1; 25 > i; i++)
                if (e[i] == l) {
                    e.splice(i, 1);
                    break
                }
            e.splice(1, 0, l)
        }
    }
    return e
}, BingoGenerator.prototype.difficulty = function(e) {
    var s = this.seed % 1e3,
        t = s % 8,
        o = Math.floor(t / 2),
        l = t % 2,
        i = s % 5,
        a = s % 3,
        r = Math.floor(s / 120),
        n = [0];
    n.splice(l, 0, 1), n.splice(a, 0, 2), n.splice(o, 0, 3), n.splice(i, 0, 4), s = Math.floor(this.seed / 1e3), s %= 1e3, t = s % 8, o = Math.floor(t / 2), l = t % 2, i = s % 5, a = s % 3, r = 8 * r + Math.floor(s / 120);
    var p = [0];
    p.splice(l, 0, 1), p.splice(a, 0, 2), p.splice(o, 0, 3), p.splice(i, 0, 4), e--, r %= 5, x = (e + r) % 5, y = Math.floor(e / 5);
    var h = n[(x + 3 * y) % 5],
        c = p[(3 * x + y) % 5];
    return value = 5 * h + c, "long" == this.mode && (value = Math.floor((value + 25) / 2)), value++, value
}, BingoGenerator.prototype.getShuffledGoals = function(e) {
    return this.goalsByDifficulty[e].shuffled()
}, BingoGenerator.prototype.getDifficultyIndex = function(e) {
    for (var s = 1; 25 >= s; s++)
        if (this.bingoBoard[s].difficulty == e) return s;
    return 0
}, BingoGenerator.prototype.getGoalsInTimeRange = function(e, s) {
    return this.goalsList.filter(function(t) {
        return e <= t.time && t.time <= s
    })
}, BingoGenerator.prototype.hasGoalOnBoard = function(e) {
    for (var s = 1; 25 >= s; s++)
        if (this.bingoBoard[s].id === e.id) return !0;
    return !1
}, BingoGenerator.prototype.hasConflictsOnBoard = function(e) {
    for (var s = 1; 25 >= s; s++) {
        var t = this.bingoBoard[s];
        if (t.goal) {
            var o = [e, t.goal],
                l = this.evaluateSquares(o);
            if (l >= TOO_MUCH_SYNERGY) return !0
        }
    }
    return !1
}, BingoGenerator.prototype.getOtherSquares = function(e, s) {
    var t = INDICES_PER_ROW[e].filter(function(e) {
            return e != s
        }),
        o = this;
    return t.map(function(e) {
        return o.bingoBoard[e]
    })
}, BingoGenerator.prototype.checkLine = function(e, s) {
    for (var t = ROWS_PER_INDEX[e], o = 0, l = TOO_MUCH_SYNERGY, i = 0; i < t.length; i++) {
        var a = t[i],
            r = JSON.parse(JSON.stringify(s));
        r.desiredTime = this.bingoBoard[e].desiredTime;
        var n = this.getOtherSquares(a, e);
        n.push(r);
        var y = this.evaluateSquares(n);
        o = Math.max(o, y), l = Math.min(l, y)
    }
    return {
        minSynergy: l,
        maxSynergy: o
    }
}, BingoGenerator.prototype.evaluateRow = function(e) {
    return this.evaluateSquares(this.getOtherSquares(e))
}, BingoGenerator.prototype.getEffectiveTypeSynergiesForRow = function(e) {
    var s = this.calculateSynergiesForSquares(this.getOtherSquares(e)),
        t = this.calculateEffectiveTypeSynergies(this.calculateCombinedTypeSynergies(s)),
        o = this.filterRowtypeSynergies(s);
    return [t, o]
}, BingoGenerator.prototype.evaluateSquares = function(e) {
    var s = e.map(function(e) {
        return e.id
    }).filter(function(e) {
        return e
    });
    if (hasDuplicateStrings(s)) return TOO_MUCH_SYNERGY;
    var t = this.calculateSynergiesForSquares(e);
    return this.calculateEffectiveSynergyForSquares(t)
}, BingoGenerator.prototype.calculateSynergiesForSquares = function(e) {
    for (var s = {}, t = {}, o = {}, l = [], i = 0; i < e.length; i++) {
        var a = e[i];
        this.mergeTypeSynergies(s, a.types), this.mergeTypeSynergies(t, a.subtypes), this.mergeTypeSynergies(o, a.rowtypes), void 0 !== a.time && void 0 !== a.desiredTime && l.push(a.desiredTime - a.time)
    }
    return {
        typeSynergies: s,
        subtypeSynergies: t,
        rowtypeSynergies: o,
        goals: e,
        timeDifferences: l
    }
}, BingoGenerator.prototype.mergeTypeSynergies = function(e, s) {
    for (var t in s) e[t] || (e[t] = []), e[t].push(s[t])
}, BingoGenerator.prototype.calculateCombinedTypeSynergies = function(e) {
    var s = e.typeSynergies,
        t = e.subtypeSynergies,
        o = {};
    for (var l in s) l in t ? o[l] = s[l].concat(t[l]) : o[l] = s[l];
    return o
}, BingoGenerator.prototype.filterRowtypeSynergies = function(e) {
    var s = {};
    for (var t in e.rowtypeSynergies) {
        var o = e.rowtypeSynergies[t];
        if (!(o.length < SQUARES_PER_ROW)) {
            for (var l = 0, i = 0; i < o.length; i++) l += o[i];
            this.rowtypeTimeSave[t] > l && (s[t] = this.rowtypeTimeSave[t] - l)
        }
    }
    return s
}, BingoGenerator.prototype.calculateEffectiveTypeSynergies = function(e) {
    var s = {};
    for (var t in e) {
        var o = e[t],
            l = this.filterSynergyValuesForType(t, o);
        l.length > 0 && (s[t] = l)
    }
    return s
}, BingoGenerator.prototype.filterSynergyValuesForType = function(e, s) {
    s.sortNumerically();
    var t = this.synergyFilters[e] || "";
    if (/^min/.test(t)) {
        var o = Number(t.split(" ")[1]);
        return s.slice(0, o)
    }
    if (/^max/.test(t)) {
        var o = Number(t.split(" ")[1]);
        return s.reverse(), s.slice(0, o)
    }
    return s.slice(0, -1)
}, BingoGenerator.prototype.calculateEffectiveSynergyForSquares = function(e) {
    var s = this.calculateCombinedTypeSynergies(e),
        t = this.filterRowtypeSynergies(e),
        o = this.calculateEffectiveTypeSynergies(s),
        l = 0;
    for (var i in o)
        for (var a = o[i], r = 0; r < a.length; r++) {
            if (a[r] > this.maximumIndividualSynergy) return TOO_MUCH_SYNERGY;
            l += a[r]
        }
    for (var n in t) l += t[n];
    for (var y = e.timeDifferences, r = 0; r < y.length; r++) {
        var p = y[r];
        l += p
    }
    return l
}, bingoGenerator = function(e, s) {
    for (var t = new BingoGenerator(e, s), o = !1, l = 0; !o && 10 > l;) o = t.makeCard(), l++;
    return o.meta = {
        iterations: l
    }, o
};
var bingoList = {
    0: [],
    1: [{
        difficulty: 1,
        id: "30-deku-nuts",
        jp: "デクの実30個以上",
        name: "30 Deku Nuts",
        rowtypes: {
            bottle: 0,
            gclw: .5,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            songs5: .5
        },
        time: 1,
        types: {
            forest: .5,
            selfsynergy: 0
        }
    }, {
        difficulty: 1,
        id: "bomb-bag-30-",
        jp: "ボム袋(30)",
        name: "Bomb Bag (30)",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 0,
            ms: 3
        },
        skill: 0,
        subtypes: {
            bbprize: 100,
            childchu: -2.5,
            quiver: -1
        },
        time: 0,
        types: {
            bombbag: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 1,
        id: "bottled-fairy",
        jp: "ビン(妖精)",
        name: "Bottled Fairy",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        time: .5,
        types: {
            selfsynergy: 0
        }
    }, {
        difficulty: 1,
        id: "bullet-bag-50-",
        jp: "デクのタネ袋(50)",
        name: "Bullet Bag (50)",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            hearts4: 1
        },
        time: .5,
        types: {
            bulletbag: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 1,
        id: "defeat-a-skull-kid",
        jp: "スタルキッド撃破",
        name: "Defeat a Skull Kid",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        time: .75,
        types: {
            forest: .25,
            selfsynergy: 0
        }
    }, {
        difficulty: 1,
        id: "exactly-20-deku-sticks",
        jp: "デクの棒20本",
        name: "Exactly 20 Deku Sticks",
        rowtypes: {
            bottle: 1,
            gclw: 0,
            hookshot: 0,
            ms: 1
        },
        skill: 0,
        time: .75,
        types: {
            selfsynergy: 0,
            sticks: 100
        }
    }, {
        difficulty: 1,
        id: "giant-s-knife",
        jp: "巨人のナイフ",
        name: "Giant's Knife",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 0,
            ms: 100
        },
        skill: 0,
        subtypes: {
            bulletbag: -3
        },
        time: 1,
        types: {
            incsword: 100,
            selfsynergy: 0,
            swords: 3
        }
    }, {
        difficulty: 1,
        id: "lens-of-truth",
        jp: "まことのメガネ",
        name: "Lens of Truth",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        time: .25,
        types: {
            childchu: 0,
            selfsynergy: 0
        }
    }, {
        difficulty: 1,
        id: "map-compass-in-bottom-of-the-well",
        jp: "井戸の底のマップとコンパス",
        name: "Map & Compass in Bottom of the Well",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            compass: 1,
            map: 1
        },
        time: 1,
        types: {
            childchu: 0,
            selfsynergy: 0
        }
    }],
    10: [{
        difficulty: 10,
        id: "5-maps",
        jp: "マップ5つ",
        name: "5 Maps",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: .5,
            ms: 1.5
        },
        skill: .25,
        subtypes: {
            bosskey2: 2,
            compass: 9,
            hearts3: 1,
            hearts4: 1,
            wallet: .5
        },
        time: 7.75,
        types: {
            hovers: 3,
            incmc: 100,
            map: 9,
            selfsynergy: -3
        }
    }, {
        difficulty: 10,
        id: "7-songs",
        jp: "歌7つ以上",
        name: "7 Songs",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: 0,
        subtypes: {
            aganon: .25,
            bosskey: 1.5,
            child2: 2,
            childchu: -2.5,
            hearts3: .5,
            wallet: .5
        },
        time: 7.25,
        types: {
            incsongs: 100,
            poachers: 4.25,
            selfsynergy: 0,
            songs5: 3.25
        }
    }, {
        difficulty: 10,
        id: "all-4-lon-lon-ranch-area-skulltulas",
        jp: "ロンロン牧場エリアの黄金のスタルチュラ4匹",
        name: "All 4 Lon-Lon Ranch area Skulltulas",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .5,
        subtypes: {
            hearts4: .25,
            jabu: 4.75,
            wallet: 2.5
        },
        time: 7.75,
        types: {
            childchu: 0,
            lonlon: 1.75,
            selfsynergy: 0
        }
    }, {
        difficulty: 10,
        id: "all-4-skulltulas-in-deku-tree",
        jp: "デクの樹様の中の黄金のスタルチュラ4匹",
        name: "All 4 Skulltulas in Deku Tree",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 1,
            ms: 0
        },
        skill: .25,
        subtypes: {
            compass: 3,
            hearts3: .5,
            hearts4: 1,
            map: 2,
            wallet: 2
        },
        time: 7.25,
        types: {
            deku: 3,
            quiver: 1,
            selfsynergy: 0
        }
    }, {
        difficulty: 10,
        id: "all-4-skulltulas-in-jabu-jabu",
        jp: "ジャブジャブ様のお腹の黄金のスタルチュラ4匹",
        name: "All 4 Skulltulas in Jabu-Jabu",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .5,
        subtypes: {
            childreset: .5,
            compass: 2,
            hearts3: 2,
            hearts4: 1,
            hovers: .75,
            wallet: 2.25
        },
        time: 7.5,
        types: {
            fountain: 2,
            gtg: 1,
            jabu: 3,
            selfsynergy: 0
        }
    }, {
        difficulty: 10,
        id: "both-hyrule-field-area-skulltulas",
        jp: "ハイラル平原エリアの黄金ノスタルチュラ2匹",
        name: "Both Hyrule Field area Skulltulas",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 2,
            ms: 6
        },
        skill: 1,
        subtypes: {
            dmc: 1,
            firearrow: 1,
            gtunic: .25,
            hearts4: .5,
            magic: 2,
            wallet: 1
        },
        time: 7.5,
        types: {
            hovers: 3,
            selfsynergy: 0
        }
    }, {
        difficulty: 10,
        id: "defeat-big-octo",
        jp: "大オクタ撃破",
        name: "Defeat Big Octo",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: .5,
            ms: 0
        },
        skill: .5,
        subtypes: {
            childreset: 1.25,
            compass: 2,
            hearts3: .5,
            wallet: .75
        },
        time: 7.75,
        types: {
            fountain: 2,
            gtg: 1,
            jabu: 5,
            selfsynergy: 0
        }
    }, {
        difficulty: 10,
        id: "get-to-the-end-of-fire-trial",
        jp: "炎の結界の最後の部屋に到達",
        name: "Get to the end of Fire Trial",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: .5,
            ms: 3
        },
        skill: .25,
        subtypes: {
            bosskey: 3.5,
            hearts4: 1.5,
            wallet: .25
        },
        time: 7.75,
        types: {
            aganon: 3,
            endon: -.5,
            gtunic: 1,
            hovers: 3,
            selfsynergy: 0
        }
    }, {
        difficulty: 10,
        id: "requiem-of-spirit",
        jp: "魂のレクイエム",
        name: "Requiem of Spirit",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 1.5,
            ms: .5
        },
        skill: .25,
        subtypes: {
            bosskey: 2,
            compass: 1,
            hearts4: .25,
            hovers: 1,
            map: 2,
            poachers: -.25,
            songs5: 3,
            wallet: .75
        },
        time: 7.25,
        types: {
            endon: -.25,
            fortress: 2.5,
            selfsynergy: 0,
            spirit: 2.5
        }
    }],
    11: [{
        difficulty: 11,
        id: "3-boots",
        jp: "靴3種",
        name: "3 Boots",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: .5,
            ms: 1.5
        },
        skill: .25,
        subtypes: {
            compass: 3,
            hearts3: 1,
            hearts4: .25,
            map: 3,
            songs4: 1.5,
            wallet: 1
        },
        time: 8.5,
        types: {
            endon: -.5,
            fountain: 2,
            hovers: 3,
            ice: 1.5,
            incboot: 100,
            irons: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 11,
        id: "500-rupees",
        jp: "500ルピー",
        name: "500 Rupees",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 2,
            ms: 7
        },
        skill: .25,
        subtypes: {
            bulletbag: 100,
            childchu: -2.5
        },
        time: 8.25,
        types: {
            selfsynergy: 0,
            wallet: 100
        }
    }, {
        difficulty: 11,
        id: "7-hearts",
        jp: "ハート7つ",
        name: "7 Hearts",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: .5,
            ms: 4
        },
        skill: .5,
        time: 8.5,
        types: {
            hearts3: 10,
            hearts4: .5,
            inchearts: 100,
            selfsynergy: -3
        }
    }, {
        difficulty: 11,
        id: "8-songs",
        jp: "歌8つ以上",
        name: "8 Songs",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: 0,
        subtypes: {
            aganon: .25,
            bosskey: 1.5,
            childchu: -2.5,
            hearts3: 1.5,
            wallet: .5
        },
        time: 8.5,
        types: {
            incsongs: 100,
            poachers: 4.25,
            selfsynergy: 0,
            songs5: 5.5
        }
    }, {
        difficulty: 11,
        id: "all-8-death-mountain-area-skulltulas",
        jp: "デスマウンテンエリアの黄金のスタルチュラ8匹",
        name: "All 8 Death Mountain area Skulltulas",
        rowtypes: {
            bottle: 100,
            gclw: .75,
            hookshot: .25,
            ms: 100
        },
        skill: 0,
        subtypes: {
            child2: 3,
            czl: .5,
            hearts3: .5,
            wallet: 4
        },
        time: 8.25,
        types: {
            childchu: 0,
            dmc: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 11,
        id: "boomerang",
        jp: "ブーメラン",
        name: "Boomerang",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .25,
        subtypes: {
            compass: 2.5,
            hearts3: 1,
            hearts4: 1,
            map: 3,
            wallet: .5
        },
        time: 8.5,
        types: {
            childchu: 0,
            fountain: 2,
            gtg: 1,
            incbarinade: 100,
            jabu: 5,
            selfsynergy: 0
        }
    }, {
        difficulty: 11,
        id: "bronze-gauntlets",
        jp: "銅のグローブ",
        name: "Bronze Gauntlets",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 2.5,
            ms: 100
        },
        skill: .75,
        subtypes: {
            bombbag: 100,
            bulletbag: 100,
            hovers: 1.5,
            wallet: .5
        },
        time: 8.5,
        types: {
            aganon: 3,
            bganon: -3,
            cganon: 3,
            childchu: 0,
            endon: -.5,
            incshtrial: 100,
            selfsynergy: 0,
            strength: 100
        }
    }, {
        difficulty: 11,
        id: "fire-arrows",
        jp: "炎の矢",
        name: "Fire Arrows",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: .5,
            ms: 100
        },
        skill: .5,
        subtypes: {
            bosskey: 2,
            childchu: -2.5,
            incarrows: 100,
            map: 3,
            poachers: 1.5,
            wallet: .25
        },
        time: 8.5,
        types: {
            firearrow: 8,
            fortress: 3,
            gtg: 1,
            quiver: 4.5,
            selfsynergy: 0,
            water: 1.5
        }
    }, {
        difficulty: 11,
        id: "get-to-the-end-of-light-trial",
        jp: "光の結界の最後の部屋に到達",
        name: "Get to the end of Light Trial",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 100,
            ms: 3
        },
        skill: .25,
        subtypes: {
            bosskey: 2.5,
            childchu: -2.5,
            chuczl: 2,
            hearts3: 1,
            wallet: .25
        },
        time: 8.25,
        types: {
            aganon: 3,
            bganon: -2,
            bothzl: -4.25,
            cganon: 2,
            czl: 4.25,
            endon: -.5,
            poachers: 4.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 11,
        id: "stone-of-agony",
        jp: "もだえ石",
        name: "Stone of Agony",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 100,
            ms: 7
        },
        skill: .5,
        subtypes: {
            wallet: 5
        },
        time: 8.25,
        types: {
            forest: .5,
            selfsynergy: 0
        }
    }],
    12: [{
        difficulty: 12,
        id: "5-zora-area-hps",
        jp: "ゾーラエリアのハートのかけら5つ以上",
        name: "5 Zora area HPs",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: .5,
        subtypes: {
            beans: .5,
            compass: 3,
            hearts3: 3,
            hearts4: .25,
            hovers: 1,
            incirons: 100,
            map: 3
        },
        time: 9,
        types: {
            fountain: 2,
            ice: 1.5,
            irons: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 12,
        id: "7-different-unused-keys-in-gerudo-training-grounds",
        jp: "ゲルドの修練場の未使用の鍵7つ(増殖禁止)",
        name: "7 Different Unused Keys in Gerudo Training Grounds",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 100,
            ms: 3
        },
        skill: .5,
        subtypes: {
            bosskey: 3,
            hearts4: .25,
            hovers: .75,
            map: 3,
            wallet: .5
        },
        time: 8.75,
        types: {
            endon: -.5,
            fortress: 3,
            gtg: 3,
            incgtgkey: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 12,
        id: "beat-the-shadow-temple",
        jp: "闇の神殿クリア",
        name: "Beat the Shadow Temple",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 100,
            ms: 5
        },
        skill: .75,
        subtypes: {
            bosskey2: 2,
            hearts3: 3,
            hearts4: 1,
            wallet: .25
        },
        time: 9.25,
        types: {
            deku: 2,
            endon: -1,
            hovers: 3,
            incshboss: 100,
            legitlacs: 100,
            selfsynergy: 0,
            shadow: 5
        }
    }, {
        difficulty: 12,
        id: "defeat-amy-green-poe-",
        jp: "エイミー撃破(緑のポウ)ｴ",
        name: "Defeat Amy (Green Poe)",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: 0,
        subtypes: {
            bosskey: 2,
            bosskey2: 5,
            childchu: -2.5,
            compass: 2,
            hearts4: 1,
            hovers: 1,
            map: 4,
            songs5: 1.75,
            wallet: .5
        },
        time: 9.25,
        types: {
            forest: 3,
            fortress: 3,
            gtg: 1,
            incforest: 100,
            meg: 4.25,
            quiver: 4.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 12,
        id: "defeat-bongo-bongo",
        jp: "ボンゴボンゴ撃破",
        name: "Defeat Bongo-Bongo",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 100,
            ms: 5
        },
        skill: .75,
        subtypes: {
            bosskey2: 2,
            hearts3: 3,
            hearts4: 1,
            wallet: .25
        },
        time: 8.75,
        types: {
            deku: 2,
            endon: -.25,
            hovers: 3,
            incshboss: 100,
            legitlacs: 100,
            selfsynergy: 0,
            shadow: 5
        }
    }, {
        difficulty: 12,
        id: "fairy-bow",
        jp: "妖精の弓",
        name: "Fairy Bow",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 4
        },
        skill: .25,
        subtypes: {
            bosskey: 2,
            bosskey2: 6,
            compass: 3,
            hearts3: .25,
            hearts4: 1,
            map: 2.5,
            quiver: 4.5,
            songs5: 1.75,
            wallet: 1
        },
        time: 9.25,
        types: {
            forest: 3,
            hovers: 2,
            incforest: 100,
            meg: 4.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 12,
        id: "gerudo-s-card",
        jp: "ゲルドの会員証",
        name: "Gerudo's Card",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: .75,
            ms: 2.5
        },
        skill: 0,
        subtypes: {
            bosskey: 2.5,
            hearts4: .25,
            hovers: .5,
            map: 2.5,
            wallet: .5
        },
        time: 9,
        types: {
            fortress: 2.5,
            gerudo: 6,
            selfsynergy: 0,
            spirit: .5
        }
    }, {
        difficulty: 12,
        id: "map-compass-in-fire-temple",
        jp: "炎の神殿のマップとコンパス",
        name: "Map & Compass in Fire Temple",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: .25,
            ms: 4
        },
        skill: 0,
        subtypes: {
            bosskey: 2,
            compass: 4,
            hearts3: .5,
            hovers: .25,
            map: 3,
            songs5: 1.25,
            wallet: .25
        },
        time: 9,
        types: {
            dmc: 1,
            fire: 5,
            gtunic: 1,
            selfsynergy: 0
        }
    }, {
        difficulty: 12,
        id: "shadow-temple-boss-key",
        jp: "闇の神殿のボス部屋の鍵",
        name: "Shadow Temple Boss Key",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 1,
            ms: 3
        },
        skill: .25,
        subtypes: {
            aganon: .25,
            bosskey: 4.25,
            bosskey2: 5.75,
            childchu: -2.5,
            chuczl: 2,
            compass: 1,
            hearts3: 2.5,
            wallet: .25
        },
        time: 9.25,
        types: {
            bothzl: -4.25,
            czl: 4.25,
            hovers: 1.5,
            poachers: 4.25,
            selfsynergy: 0,
            shadow: 6
        }
    }],
    13: [{
        difficulty: 13,
        id: "3-skulltulas-in-water-temple",
        jp: "水の神殿の黄金のスタルチュラ3匹以上",
        name: "3 Skulltulas in Water Temple",
        rowtypes: {
            bottle: 100,
            gclw: .5,
            hookshot: 100,
            ms: 7
        },
        skill: .5,
        subtypes: {
            aganon: .25,
            bbprize: -4,
            childchu: -2.5,
            compass: 2.5,
            hearts3: 1.5,
            hearts4: 2.5,
            hovers: .5,
            map: 2.5,
            wallet: 1.5
        },
        time: 9.75,
        types: {
            dc: 2,
            ice: 1.5,
            incwskull: 100,
            irons: 2,
            longshot: 2,
            selfsynergy: 0,
            water: 3
        }
    }, {
        difficulty: 13,
        id: "3-swords-3-boots",
        jp: "剣3種、靴3種",
        name: "3 Swords & 3 Boots",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bulletbag: -3,
            childchu: -1,
            compass: 3,
            hearts3: 1,
            hearts4: .25,
            map: 3,
            songs4: 1.5,
            wallet: 1
        },
        time: 9.75,
        types: {
            endon: -.5,
            fountain: 2,
            hovers: 3,
            ice: 1.5,
            incboot: 100,
            incsword: 100,
            irons: 2,
            selfsynergy: 0,
            swords: 3
        }
    }, {
        difficulty: 13,
        id: "4-skulltulas-in-shadow-temple",
        jp: "闇の神殿の黄金のスタルチュラ4匹以上",
        name: "4 Skulltulas in Shadow Temple",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey2: 2,
            compass: 1,
            wallet: 2
        },
        time: 9.75,
        types: {
            hovers: 3,
            selfsynergy: 0,
            shadow: 6
        }
    }, {
        difficulty: 13,
        id: "double-defense",
        jp: "防御力2倍",
        name: "Double Defense",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: 0,
        subtypes: {
            aganon: .5,
            childchu: -2.5,
            chuczl: 2,
            gtunic: .25,
            hearts3: 1.5,
            wallet: .25
        },
        time: 10,
        types: {
            bothzl: -4.25,
            czl: 4.25,
            dmc: 1,
            magic: 2,
            poachers: 4.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 13,
        id: "double-magic",
        jp: "魔力2倍",
        name: "Double Magic",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 3
        },
        skill: 0,
        subtypes: {
            aganon: .25,
            bosskey: 1,
            childchu: -2.5,
            chuczl: 2,
            gtunic: .25,
            hearts3: 1.5,
            songs5: 1
        },
        time: 9.5,
        types: {
            bothzl: -4.25,
            czl: 4.25,
            dmc: 1,
            magic: 2,
            poachers: 4.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 13,
        id: "map-compass-in-jabu-jabu",
        jp: "ジャブジャブ様のお腹のマップとコンパス",
        name: "Map & Compass in Jabu-Jabu",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            child2: 2,
            childreset: 1.25,
            compass: 4,
            hearts3: 1,
            hearts4: 1,
            hovers: .5,
            map: 3,
            wallet: .5
        },
        time: 9.75,
        types: {
            childchu: 0,
            fountain: 2,
            jabu: 5,
            selfsynergy: 0
        }
    }, {
        difficulty: 13,
        id: "obtain-all-8-small-keys-in-fire-temple",
        jp: "炎の神殿の小さな鍵の宝箱を８つ全て開ける",
        name: "Obtain all 8 Small Keys in Fire Temple",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey: 2,
            compass: 4,
            hearts3: .5,
            hovers: .25,
            map: 2,
            songs5: 1.5,
            wallet: .5
        },
        time: 10,
        types: {
            dmc: 1,
            fire: 5,
            gtunic: 1,
            selfsynergy: 0
        }
    }],
    14: [{
        difficulty: 14,
        id: "1-skulltula-from-each-child-dungeon",
        jp: "全ての子供ダンジョンからスタルチュラ最低1匹ずつ",
        name: "1 Skulltula from each Child Dungeon",
        rowtypes: {
            bottle: 0,
            gclw: .5,
            hookshot: .5,
            ms: 0
        },
        skill: .5,
        subtypes: {
            compass: 4,
            hearts4: 1.5,
            jabu: 3,
            map: 4,
            wallet: 2
        },
        time: 10.25,
        types: {
            dc: 2,
            deku: 3,
            fountain: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 14,
        id: "3-boss-keys",
        jp: "ボス部屋の鍵3つ",
        name: "3 Boss Keys",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            compass: 2,
            hearts3: 2,
            hearts4: 1,
            map: 4
        },
        time: 10.25,
        types: {
            aganon: 3,
            bganon: -3,
            bosskey: 12,
            cganon: 3,
            incbk: 100,
            selfsynergy: -2
        }
    }, {
        difficulty: 14,
        id: "8-different-unused-keys-in-gerudo-training-grounds",
        jp: "ゲルドの修練場の未使用の鍵8つ(増殖禁止)",
        name: "8 Different Unused Keys in Gerudo Training Grounds",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 100,
            ms: 100
        },
        skill: .5,
        subtypes: {
            bosskey: 3,
            bulletbag: 100,
            childchu: -2.5,
            hearts4: .25,
            hovers: .75,
            map: 3,
            wallet: .25
        },
        time: 10.25,
        types: {
            endon: -.25,
            fortress: 3,
            gtg: 5,
            incgtgkey: 100,
            quiver: 4.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 14,
        id: "all-8-zora-s-domain-area-skulltulas",
        jp: "ゾーラの里エリアの黄金のスタルチュラ8匹",
        name: "All 8 Zora's Domain area Skulltulas",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .5,
        subtypes: {
            childreset: 1.25,
            compass: 2,
            hearts3: 1,
            jabu: .5,
            map: 2,
            wallet: 4
        },
        time: 10.5,
        types: {
            childchu: 0,
            fountain: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 14,
        id: "defeat-both-flare-dancers",
        jp: "フレアダンサー2体撃破",
        name: "Defeat both Flare Dancers",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: .25,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey: 2,
            compass: 4,
            hovers: .25,
            incgorons: 100,
            map: 2.5,
            songs5: 1.25,
            wallet: .5
        },
        time: 10.75,
        types: {
            dmc: 1,
            fire: 8,
            gtunic: 1,
            incflare: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 14,
        id: "forest-temple-boss-key",
        jp: "森の神殿のボス部屋の鍵",
        name: "Forest Temple Boss Key",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey: 4.25,
            bosskey2: 5.75,
            compass: 3.5,
            hearts4: 1,
            lightarrow: 3,
            map: 2.5,
            quiver: 4.5,
            songs5: 1.75,
            wallet: 1
        },
        time: 10.75,
        types: {
            claimcheck: 10,
            forest: 4,
            hovers: 2,
            incforest: 100,
            meg: 4.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 14,
        id: "keaton-mask",
        jp: "キータンのお面",
        name: "Keaton Mask",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            cganon: 2,
            hearts3: 3,
            hearts4: 1,
            songs4: 1.75
        },
        time: 10.25,
        types: {
            childchu: 0,
            childtrade: 2.75,
            chuczl: 2,
            czl: 5,
            incctrade: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 14,
        id: "megaton-hammer",
        jp: "メガトンハンマー",
        name: "Megaton Hammer",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: .25,
            ms: 4
        },
        skill: .25,
        subtypes: {
            bosskey: 2,
            compass: 4,
            hearts3: 1.5,
            hearts4: 1,
            hovers: .25,
            incgorons: 100,
            map: 2,
            songs5: 1.25,
            wallet: .25
        },
        time: 10.25,
        types: {
            dmc: 1,
            fire: 7,
            gtunic: 1,
            selfsynergy: 0
        }
    }],
    15: [{
        difficulty: 15,
        id: "5-compasses",
        jp: "コンパス5つ",
        name: "5 Compasses",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: .5,
            ms: 2
        },
        skill: .25,
        subtypes: {
            bosskey2: 2,
            hearts3: 1.5,
            hearts4: 1,
            map: 10,
            wallet: 1
        },
        time: 11.25,
        types: {
            compass: 10,
            hovers: 3,
            incmc: 100,
            selfsynergy: -3
        }
    }, {
        difficulty: 15,
        id: "9-songs",
        jp: "歌9つ以上",
        name: "9 Songs",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: 0,
        subtypes: {
            aganon: .25,
            bosskey: 1.5,
            childchu: -2.5,
            hearts3: 1.5,
            wallet: .75
        },
        time: 11.5,
        types: {
            incsongs: 100,
            poachers: 4.25,
            selfsynergy: 0,
            songs5: 8.75
        }
    }, {
        difficulty: 15,
        id: "all-5-skulltulas-in-fire-temple",
        jp: "炎の神殿の黄金のスタルチュラ5匹",
        name: "All 5 Skulltulas in Fire Temple",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .5,
        subtypes: {
            bosskey: 2,
            compass: 2,
            hearts3: .5,
            hearts4: 1,
            hovers: .25,
            map: 3,
            songs5: 1.25,
            wallet: 2.5
        },
        time: 11.5,
        types: {
            dmc: 1,
            fire: 4.75,
            gtunic: 1,
            selfsynergy: 0
        }
    }, {
        difficulty: 15,
        id: "defeat-barinade",
        jp: "バリネード撃破",
        name: "Defeat Barinade",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .25,
        subtypes: {
            child2: 2,
            childreset: 1.25,
            compass: 2.5,
            hearts3: 4,
            hearts4: 1,
            map: 3,
            wallet: .5
        },
        time: 11,
        types: {
            childchu: 0,
            endon: -.25,
            fountain: 2,
            incbarinade: 100,
            jabu: 8,
            selfsynergy: 0
        }
    }, {
        difficulty: 15,
        id: "farore-s-wind",
        jp: "フロルの風",
        name: "Farore's Wind",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: .5,
            ms: 3
        },
        skill: 0,
        subtypes: {
            aganon: .25,
            childchu: -2.5,
            chuczl: 2,
            compass: 2,
            gtunic: .25,
            hearts3: 2.5,
            incfairy: 100,
            map: 2,
            wallet: .5
        },
        time: 11.5,
        types: {
            bothzl: -4.25,
            czl: 4.25,
            dmc: 1,
            fountain: 2,
            magic: 2,
            poachers: 4.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 15,
        id: "map-compass-in-forest-temple",
        jp: "森の神殿のマップとコンパス",
        name: "Map & Compass in Forest Temple",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey: 2,
            bosskey2: 6,
            compass: 4,
            hearts4: 1,
            map: 3,
            quiver: 4.5,
            songs5: 1.75,
            wallet: 1
        },
        time: 11.25,
        types: {
            forest: 3,
            hovers: 2,
            incforest: 100,
            meg: 5,
            selfsynergy: 0
        }
    }, {
        difficulty: 15,
        id: "mirror-shield",
        jp: "ミラーシールド",
        name: "Mirror Shield",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 100,
            ms: 6
        },
        skill: .5,
        subtypes: {
            bosskey: 3,
            bosskey2: 5,
            compass: 1,
            hearts3: .5,
            hearts4: .5,
            map: 3,
            songs5: 1,
            wallet: .75
        },
        time: 11.25,
        types: {
            fortress: 2.5,
            gtg: 1,
            hovers: 3,
            incmirror: 100,
            incshield: 100,
            incspboss: 100,
            selfsynergy: 0,
            spirit: 3.5
        }
    }, {
        difficulty: 15,
        id: "silver-gauntlets",
        jp: "銀のグローブ",
        name: "Silver Gauntlets",
        rowtypes: {
            bottle: .5,
            gclw: 0,
            hookshot: 100,
            ms: 3.5
        },
        skill: .5,
        subtypes: {
            bombbag: 100,
            bosskey: 3,
            bosskey2: 4.5,
            compass: 1,
            hearts3: .5,
            hearts4: .25,
            map: 3,
            songs5: 1,
            wallet: .75
        },
        time: 11,
        types: {
            endon: -1,
            fortress: 3,
            hovers: 3,
            selfsynergy: 0,
            spirit: 3.25,
            strength: 100
        }
    }],
    16: [{
        difficulty: 16,
        id: "3-shields",
        jp: "盾3種",
        name: "3 Shields",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 100,
            ms: 6
        },
        skill: .5,
        subtypes: {
            bosskey: 3,
            bosskey2: 5,
            compass: 1,
            hearts3: .5,
            hearts4: .5,
            map: 3
        },
        time: 11.75,
        types: {
            fortress: 2.5,
            hovers: 3,
            incshield: 100,
            selfsynergy: 0,
            spirit: 3.5
        }
    }, {
        difficulty: 16,
        id: "3-tunics-3-boots",
        jp: "服3種、靴3種",
        name: "3 Tunics & 3 Boots",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey: .25,
            compass: 3,
            dmc: .25,
            hearts3: 1,
            hearts4: .25,
            map: 3,
            songs4: 1.5,
            wallet: 1
        },
        time: 11.75,
        types: {
            endon: -.5,
            fountain: 2,
            gtunic: 1.75,
            hovers: 3,
            ice: 1.5,
            incboot: 100,
            inctunic: 100,
            irons: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 16,
        id: "6-maps",
        jp: "マップ6つ",
        name: "6 Maps",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: .5,
            ms: 2.5
        },
        skill: .5,
        subtypes: {
            bosskey2: 2,
            claimcheck: 3,
            compass: 15,
            hearts3: 1,
            hearts4: 1.5,
            poachers: .5,
            songs5: 1.5,
            wallet: .75
        },
        time: 12,
        types: {
            childchu: 0,
            hovers: 3,
            incmc: 100,
            map: 15,
            selfsynergy: -3
        }
    }, {
        difficulty: 16,
        id: "all-4-wasteland-colossus-area-skulltulas",
        jp: "幻影の砂漠・巨大邪神像エリアの黄金のスタルチュラ4匹",
        name: "All 4 Wasteland/ Colossus area Skulltulas",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey: 2,
            bosskey2: 4,
            child2: 5,
            childreset: 1.25,
            hearts4: .25,
            map: 1.5,
            songs5: 3,
            wallet: 2.25
        },
        time: 12,
        types: {
            childchu: 0,
            fortress: 2.5,
            selfsynergy: 0,
            spirit: 2.5
        }
    }, {
        difficulty: 16,
        id: "get-bombchu-chest-in-spirit-temple",
        jp: "魂の神殿のボムチュウ取得",
        name: "Get Bombchu chest in Spirit Temple",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 2,
            ms: 1
        },
        skill: .5,
        subtypes: {
            bosskey: 2,
            compass: 1,
            hearts4: .25,
            map: 2,
            wallet: .75
        },
        time: 12,
        types: {
            fortress: 2.5,
            hovers: 3,
            selfsynergy: 0,
            spirit: 5
        }
    }],
    17: [{
        difficulty: 17,
        id: "3-swords-3-shields",
        jp: "剣3種、盾3種",
        name: "3 Swords & 3 Shields",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .5,
        subtypes: {
            bosskey: 3,
            bosskey2: 5,
            bulletbag: -3,
            childchu: -1,
            compass: 1,
            hearts3: .5,
            hearts4: .5,
            map: 3,
            songs5: 1,
            wallet: .75
        },
        time: 12.75,
        types: {
            fortress: 2.5,
            gtg: 1,
            hovers: 3,
            incshield: 100,
            incsword: 100,
            selfsynergy: 0,
            spirit: 3.5,
            swords: 3
        }
    }, {
        difficulty: 17,
        id: "8-hearts",
        jp: "ハート8つ",
        name: "8 Hearts",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 1,
            ms: 6
        },
        skill: .75,
        time: 12.75,
        types: {
            childtrade: 1,
            hearts3: 13,
            hearts4: 2,
            inchearts: 100,
            saria: 1,
            selfsynergy: -3
        }
    }, {
        difficulty: 17,
        id: "all-5-lake-hylia-skulltulas",
        jp: "ハイリア湖畔エリアの黄金のスタルチュラ5匹",
        name: "All 5 Lake Hylia Skulltulas",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .5,
        subtypes: {
            bottleslot: 2,
            child2: 3,
            compass: 4,
            hearts3: 1,
            hearts4: .25,
            hovers: .5,
            incirons: 100,
            map: 4,
            wallet: 3
        },
        time: 12.5,
        types: {
            fountain: 2,
            ice: 1.5,
            inclhskull: 100,
            irons: 2,
            selfsynergy: 0,
            water: 1
        }
    }, {
        difficulty: 17,
        id: "beat-jabu-jabu-s-belly",
        jp: "ジャブジャブ様のお腹クリア",
        name: "Beat Jabu-Jabu's Belly",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .25,
        subtypes: {
            child2: 3.5,
            childreset: 1.25,
            compass: 2.5,
            hearts3: 4,
            hearts4: 1,
            map: 3,
            wallet: .5
        },
        time: 12.5,
        types: {
            childchu: 0,
            fountain: 2,
            incbarinade: 100,
            jabu: 8,
            selfsynergy: 0
        }
    }, {
        difficulty: 17,
        id: "blue-gauntlets",
        jp: "青のグローブ",
        name: "Blue Gauntlets",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 100,
            ms: 100
        },
        skill: .5,
        subtypes: {
            bombbag: 100,
            bosskey: 3,
            bosskey2: 5,
            bulletbag: 100,
            compass: 1,
            hearts3: .25,
            hearts4: .5,
            map: 3,
            songs5: 1,
            wallet: .75
        },
        time: 13,
        types: {
            childchu: 0,
            fortress: 2.5,
            gtg: 1,
            hovers: 3,
            selfsynergy: 0,
            spirit: 3.25,
            strength: 100
        }
    }, {
        difficulty: 17,
        id: "defeat-nabooru-knuckle",
        jp: "アイアンナック(ナボール)撃破",
        name: "Defeat Nabooru-Knuckle",
        rowtypes: {
            bottle: .5,
            gclw: 0,
            hookshot: 100,
            ms: 100
        },
        skill: 1,
        subtypes: {
            bosskey: 6,
            bosskey2: 6,
            compass: 1,
            hearts4: .25,
            map: 3,
            songs5: 1,
            wallet: .5
        },
        time: 13,
        types: {
            endon: -.5,
            fortress: 2.5,
            gtg: 1,
            hovers: 3,
            incspboss: 100,
            selfsynergy: 0,
            spirit: 8
        }
    }, {
        difficulty: 17,
        id: "defeat-volvagia",
        jp: "ヴァルバジア撃破",
        name: "Defeat Volvagia",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .25,
            ms: 100
        },
        skill: .25,
        subtypes: {
            aganon: 1,
            bosskey: 2,
            compass: 4,
            hearts3: 3.5,
            hearts4: 2,
            hovers: .25,
            lightarrow: 3.5,
            map: 2.5,
            pg: 1,
            songs5: 1.25,
            wallet: .25
        },
        time: 12.5,
        types: {
            dmc: 1,
            endon: -.5,
            fire: 9,
            forest: 1,
            gtunic: 1.75,
            incvolvagia: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 17,
        id: "frog-s-hp",
        jp: "カエルのハートのかけら(嵐の歌)",
        name: "Frog's HP",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey2: 3,
            compass: 1,
            hearts3: 4,
            hearts4: 1.25,
            map: 2,
            songs4: 1.5,
            songs5: 2,
            wallet: 1
        },
        time: 12.5,
        types: {
            child2: 5,
            endon: 0,
            forest: 3,
            hovers: 3,
            incfboss: 100,
            pg: 2.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 17,
        id: "obtain-all-5-small-keys-in-forest-temple",
        jp: "森の神殿の小さな鍵の宝箱を5つ全て開ける",
        name: "Obtain all 5 Small Keys in Forest Temple",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey: 2,
            bosskey2: 6,
            compass: 4,
            hearts4: 1,
            map: 3,
            quiver: 4.5,
            songs5: 1.75,
            wallet: 1
        },
        time: 12.75,
        types: {
            forest: 3,
            hovers: 2,
            incforest: 100,
            meg: 5,
            selfsynergy: 0
        }
    }, {
        difficulty: 17,
        id: "saria-s-song",
        jp: "サリアの歌",
        name: "Saria's Song",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            cganon: 2,
            child2: 2.5,
            hearts3: 3,
            hearts4: 1,
            songs4: 3,
            wallet: .25
        },
        time: 12.5,
        types: {
            childchu: 0,
            childreset: 1.25,
            childtrade: 2.75,
            chuczl: 2,
            czl: 5,
            incsaria: 100,
            saria: 3,
            selfsynergy: 0
        }
    }],
    18: [{
        difficulty: 18,
        id: "beat-the-fire-temple",
        jp: "炎の神殿クリア",
        name: "Beat the Fire Temple",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .25,
            ms: 100
        },
        skill: .25,
        subtypes: {
            aganon: 2,
            bosskey: 2,
            compass: 4,
            hearts3: 2.5,
            hearts4: 2,
            hovers: .25,
            lightarrow: 3,
            map: 2.5,
            pg: 1,
            songs5: 1.25,
            wallet: .25
        },
        time: 13.25,
        types: {
            dmc: 1,
            endon: -1,
            fire: 10,
            forest: 2,
            gtunic: 1.75,
            incvolvagia: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 18,
        id: "light-arrows",
        jp: "光の矢",
        name: "Light Arrows",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: 0,
        subtypes: {
            aganon: 1,
            bosskey: 3,
            bosskey2: 6,
            childchu: -2.5,
            hearts3: 1.5,
            hearts4: .75,
            hovers: .25,
            incarrows: 100,
            map: 3,
            quiver: 4.5,
            wallet: .25
        },
        time: 13.5,
        types: {
            endon: -1,
            fortress: 2,
            inclacs: 100,
            legitlacs: 100,
            lightarrow: 6.5,
            poachers: 4.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 18,
        id: "spooky-mask",
        jp: "こわそなお面",
        name: "Spooky Mask",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: .75,
            ms: 7
        },
        skill: .5,
        subtypes: {
            bosskey: 2.5,
            hearts4: .5,
            map: 2.5,
            wallet: .25
        },
        time: 13.5,
        types: {
            beans: 15,
            childtrade: 6.5,
            czl: 2.5,
            fortress: 3,
            gerudo: 7,
            incctrade: 100,
            saria: 3,
            selfsynergy: 0
        }
    }],
    19: [{
        difficulty: 19,
        id: "defeat-meg-purple-poe-",
        jp: "メグ撃破(紫のポウ)",
        name: "Defeat Meg (purple Poe)",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey2: 3,
            compass: 4,
            hearts3: .25,
            hearts4: 1,
            map: 2.5,
            quiver: 4.5,
            songs5: 1.75,
            wallet: 1
        },
        time: 14.25,
        types: {
            forest: 3,
            hovers: 2,
            incforest: 100,
            meg: 8.75,
            selfsynergy: 0
        }
    }, {
        difficulty: 19,
        id: "din-s-fire",
        jp: "ディンの炎",
        name: "Din's Fire",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            cganon: 2,
            child2: 5.5,
            childreset: 1.25,
            compass: 2,
            hearts3: 3.5,
            hearts4: 1,
            incfairy: 100,
            map: 2,
            songs4: 1.75,
            wallet: .5
        },
        time: 14.25,
        types: {
            childchu: 0,
            childtrade: 2.75,
            chuczl: 2,
            czl: 5,
            dins: 3,
            dmc: 1.5,
            magic: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 19,
        id: "fire-medallion",
        jp: "炎のメダル",
        name: "Fire Medallion",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey: 2,
            compass: 4,
            hearts3: 2.5,
            hearts4: 2,
            hovers: .25,
            lightarrow: 3,
            map: 2,
            pg: 1,
            songs5: 2.5,
            wallet: .25
        },
        time: 14.25,
        types: {
            dmc: 1,
            fire: 10,
            forest: 2,
            gtunic: 1.75,
            incvolvagia: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 19,
        id: "quiver-50-",
        jp: "矢立て(50)",
        name: "Quiver (50)",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 0,
            ms: 100
        },
        skill: 0,
        subtypes: {
            bosskey: 2.5,
            childchu: -2.5,
            hearts4: .5,
            map: 2,
            wallet: .25
        },
        time: 14.25,
        types: {
            beans: 10,
            bombbag: 100,
            fortress: 3,
            gerudo: 7,
            quiver: 1,
            selfsynergy: 0,
            spirit: .5
        }
    }, {
        difficulty: 19,
        id: "spirit-temple-boss-key",
        jp: "魂の神殿のボス部屋の鍵",
        name: "Spirit Temple Boss Key",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 0,
            ms: 8
        },
        skill: 0,
        subtypes: {
            aganon: 1,
            bosskey: 6,
            bosskey2: 5.75,
            childchu: -2.5,
            chuczl: 2,
            compass: 1,
            hearts3: 1,
            hearts4: .75,
            map: 4.5,
            wallet: .25
        },
        time: 14.5,
        types: {
            bothzl: -4.25,
            czl: 4.25,
            fortress: 3,
            hovers: 3,
            inclacs: 100,
            legitlacs: 100,
            lightarrow: 7,
            poachers: 4.25,
            selfsynergy: 0,
            spirit: 5
        }
    }],
    2: [{
        difficulty: 2,
        id: "bolero-of-fire",
        jp: "炎のボレロ",
        name: "Bolero of Fire",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: .25,
            ms: 100
        },
        skill: 0,
        subtypes: {
            bosskey: 1.5,
            gtunic: .25,
            hearts3: .5,
            songs5: 1.25
        },
        time: 1.5,
        types: {
            dmc: .75,
            selfsynergy: 0
        }
    }, {
        difficulty: 2,
        id: "exactly-30-deku-sticks",
        jp: "デクの棒30本",
        name: "Exactly 30 Deku Sticks",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 0,
            ms: 2
        },
        skill: 0,
        subtypes: {
            bulletbag: 100,
            childchu: -.5
        },
        time: 1.5,
        types: {
            selfsynergy: 0,
            sticks: 100
        }
    }, {
        difficulty: 2,
        id: "goron-tunic",
        jp: "ゴロンの服",
        name: "Goron Tunic",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 0,
            ms: 100
        },
        skill: 0,
        subtypes: {
            bosskey: .5,
            songs5: .25
        },
        time: 1.75,
        types: {
            gtunic: 1.75,
            inctunic: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 2,
        id: "minuet-of-forest",
        jp: "森のメヌエット",
        name: "Minuet of Forest",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 0,
            ms: 100
        },
        skill: 0,
        subtypes: {
            bosskey2: 1.75,
            lightarrow: -1.5,
            songs5: 1.75,
            wallet: .5
        },
        time: 1.75,
        types: {
            forest: 1.75,
            incforest: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 2,
        id: "quiver-40-",
        jp: "矢立て(40)",
        name: "Quiver (40)",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 0,
            ms: 100
        },
        skill: 0,
        subtypes: {
            childchu: -2.5
        },
        time: 1.5,
        types: {
            bombbag: 100,
            quiver: .5,
            selfsynergy: 0
        }
    }, {
        difficulty: 2,
        id: "zora-tunic",
        jp: "ゾーラの服",
        name: "Zora Tunic",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 0,
            ms: 100
        },
        skill: 0,
        subtypes: {
            compass: 1.5,
            hearts3: .5,
            map: 1.5,
            wallet: .25
        },
        time: 1.5,
        types: {
            fountain: 1.5,
            inctunic: 100,
            selfsynergy: 0
        }
    }],
    20: [{
        difficulty: 20,
        id: "3-shields-3-tunics",
        jp: "盾3種、服3種",
        name: "3 Shields & 3 Tunics",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .5,
        subtypes: {
            bosskey: 3.25,
            bosskey2: 5,
            compass: 2.5,
            dmc: .25,
            hearts3: .5,
            hearts4: .5,
            map: 4.5,
            songs5: 1,
            wallet: 1
        },
        time: 15,
        types: {
            fortress: 2.5,
            fountain: 1.5,
            gtg: 1,
            gtunic: 1.75,
            hovers: 3,
            incshield: 100,
            inctunic: 100,
            selfsynergy: 0,
            spirit: 3.5
        }
    }, {
        difficulty: 20,
        id: "6-compasses",
        jp: "コンパス6つ",
        name: "6 Compasses",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: .5,
            ms: 3
        },
        skill: .5,
        subtypes: {
            bosskey2: 2,
            hearts3: 1.5,
            hearts4: 1,
            map: 15,
            poachers: .5,
            wallet: 1
        },
        time: 14.75,
        types: {
            compass: 15,
            hovers: 3,
            incmc: 100,
            selfsynergy: -3
        }
    }, {
        difficulty: 20,
        id: "all-5-skulltulas-in-spirit-temple",
        jp: "魂の神殿の黄金のスタルチュラ5匹",
        name: "All 5 Skulltulas in Spirit Temple",
        rowtypes: {
            bottle: .5,
            gclw: 0,
            hookshot: 100,
            ms: 4
        },
        skill: .75,
        subtypes: {
            bosskey: 2,
            bosskey2: 5,
            compass: 2.5,
            hearts4: .5,
            map: 3,
            songs5: 1,
            wallet: 2.5
        },
        time: 14.75,
        types: {
            fortress: 2.5,
            hovers: 3,
            selfsynergy: 0,
            spirit: 5
        }
    }, {
        difficulty: 20,
        id: "free-all-9-gorons-in-fire-temple",
        jp: "炎の神殿で９人のゴロンを全員救う",
        name: "Free all 9 Gorons in Fire Temple",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey: 2.25,
            compass: 4,
            hearts3: .5,
            hearts4: 1,
            hovers: .25,
            map: 2,
            songs5: 1.25,
            wallet: .5
        },
        time: 14.75,
        types: {
            dmc: 1,
            fire: 8,
            gtunic: 1,
            incflare: 100,
            incgorons: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 20,
        id: "get-to-the-end-of-spirit-trial",
        jp: "魂の結界の最後の部屋に到達",
        name: "Get to the end of Spirit Trial",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 100,
            ms: 100
        },
        skill: .75,
        subtypes: {
            bosskey: 4.5,
            bosskey2: 5,
            compass: 1,
            hearts3: .5,
            hearts4: .5,
            map: 3,
            wallet: 1
        },
        time: 15,
        types: {
            aganon: 3,
            endon: -.5,
            fortress: 2.5,
            gtg: 1,
            hovers: 3,
            incmirror: 100,
            quiver: 1.5,
            selfsynergy: 0,
            spirit: 3.5
        }
    }, {
        difficulty: 20,
        id: "get-to-the-end-of-water-trial",
        jp: "水の結界の最後の部屋に到達",
        name: "Get to the end of Water Trial",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: .5,
        subtypes: {
            bosskey: 4.5,
            compass: 4,
            hearts3: 2.5,
            hearts4: 1,
            hovers: .25,
            map: 2,
            pg: 2,
            poachers: 3,
            songs5: 1.25,
            wallet: .5
        },
        time: 15,
        types: {
            aganon: 3,
            dmc: 1,
            endon: -.5,
            fire: 7,
            gtunic: 1,
            lightarrow: 10,
            selfsynergy: 0
        }
    }, {
        difficulty: 20,
        id: "obtain-all-5-small-keys-in-shadow-temple",
        jp: "闇の神殿の小さな鍵５つ取得",
        name: "Obtain all 5 Small Keys in Shadow Temple",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey: 3.5,
            bosskey2: 6,
            childchu: -2.5,
            chuczl: 2,
            compass: 1,
            hearts3: 2,
            hearts4: 1,
            wallet: 1.5
        },
        time: 15.25,
        types: {
            bothzl: -4.25,
            czl: 4.25,
            hovers: 3,
            poachers: 4.25,
            selfsynergy: 0,
            shadow: 8
        }
    }],
    21: [{
        difficulty: 21,
        id: "7-maps",
        jp: "マップ7つ",
        name: "7 Maps",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 1,
            ms: 4
        },
        skill: .5,
        subtypes: {
            bosskey2: 2,
            claimcheck: 6,
            compass: 20,
            hearts3: 1,
            hearts4: 2.5,
            poachers: 1.25,
            songs5: 1.5,
            wallet: .75
        },
        time: 16,
        types: {
            childchu: 0,
            hovers: 3,
            incmc: 100,
            map: 20,
            selfsynergy: -3
        }
    }, {
        difficulty: 21,
        id: "goron-bracelet",
        jp: "ゴロンの腕輪",
        name: "Goron Bracelet",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            bombbag: 100,
            cganon: 2,
            child2: 2.5,
            hearts3: 3,
            hearts4: 1,
            incsaria: 100,
            songs4: 3,
            wallet: 100
        },
        time: 15.5,
        types: {
            childchu: 0,
            childreset: 1.25,
            childtrade: 2.75,
            chuczl: 2,
            czl: 5,
            saria: 5,
            selfsynergy: 0,
            strength: 100
        }
    }, {
        difficulty: 21,
        id: "nayru-s-love",
        jp: "ネールの愛",
        name: "Nayru's Love",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 2.5,
            ms: 4
        },
        skill: .25,
        subtypes: {
            aganon: .25,
            bosskey: 2,
            bottleslot: 4,
            childchu: -2.5,
            chuczl: 2,
            compass: 2.5,
            hearts3: 1,
            hearts4: .25,
            incfairy: 100,
            map: 2,
            wallet: .5
        },
        time: 15.5,
        types: {
            bothzl: -4.25,
            czl: 4.25,
            dmc: 1,
            endon: -.25,
            fortress: 2.5,
            hovers: 2,
            magic: 2,
            poachers: 4.25,
            selfsynergy: 0,
            spirit: 2
        }
    }],
    22: [{
        difficulty: 22,
        id: "1-unused-small-key-in-each-adult-dungeon",
        jp: "全ての大人のダンジョンから未使用の鍵最低１つずつ",
        name: "1 Unused Small Key in each Adult Dungeon",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .75,
        subtypes: {
            bosskey: 4,
            bosskey2: 3,
            compass: 6,
            hearts3: .5,
            hearts4: 2.25,
            map: 6,
            songs5: 5,
            wallet: 4.5
        },
        time: 16.25,
        types: {
            dc: 2,
            dmc: 1,
            fire: 1,
            forest: 2.75,
            fortress: 2.5,
            gtg: 1,
            hovers: 3,
            selfsynergy: -3,
            shadow: 2,
            spirit: 3,
            water: 2
        }
    }, {
        difficulty: 22,
        id: "all-5-skulltulas-in-shadow-temple",
        jp: "闇の神殿の黄金のスタルチュラ5匹",
        name: "All 5 Skulltulas in Shadow Temple",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            aganon: .25,
            bosskey: 3.5,
            bosskey2: 6,
            childchu: -2.5,
            chuczl: 2,
            compass: 1,
            hearts3: 2,
            hearts4: 1,
            wallet: 2.5
        },
        time: 16.25,
        types: {
            bothzl: -4.25,
            czl: 4.25,
            hovers: 3,
            poachers: 4.25,
            selfsynergy: 0,
            shadow: 8
        }
    }, {
        difficulty: 22,
        id: "all-5-skulltulas-in-water-temple",
        jp: "水の神殿の黄金のスタルチュラ5匹",
        name: "All 5 Skulltulas in Water Temple",
        rowtypes: {
            bottle: 100,
            gclw: .5,
            hookshot: 100,
            ms: 100
        },
        skill: .75,
        subtypes: {
            aganon: .25,
            bbprize: -6,
            bosskey: 3.75,
            childchu: -2.5,
            chuczl: 2,
            compass: 3.5,
            hearts3: 1.5,
            hearts4: 2.5,
            hovers: .5,
            map: 3.5,
            spirit: -1,
            wallet: 2.5
        },
        time: 16.5,
        types: {
            bothzl: -4.25,
            czl: 4.25,
            dc: 2,
            ice: 1.5,
            inclong: 100,
            incwskull: 100,
            irons: 2,
            longshot: 4,
            poachers: 4.25,
            selfsynergy: 0,
            water: 4
        }
    }, {
        difficulty: 22,
        id: "get-to-the-end-of-shadow-trial",
        jp: "闇の結界の最後の部屋に到達",
        name: "Get to the end of Shadow Trial",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 1,
            ms: 100
        },
        skill: .75,
        subtypes: {
            bosskey: 4.5,
            compass: 4,
            hearts3: 2.5,
            hearts4: 1,
            map: 2,
            pg: 2,
            poachers: 3,
            songs5: 1.25,
            wallet: .5
        },
        time: 16.25,
        types: {
            aganon: 3,
            dmc: 1,
            endon: -.5,
            fire: 7,
            gtunic: 1,
            hovers: 1.5,
            incshtrial: 100,
            lightarrow: 10,
            selfsynergy: 0
        }
    }],
    23: [{
        difficulty: 23,
        id: "3-shields-3-boots",
        jp: "盾3種、靴3種",
        name: "3 Shields & 3 Boots",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 7.5
        },
        skill: .75,
        subtypes: {
            bosskey: 3,
            bosskey2: 5,
            compass: 4,
            hearts3: 1.5,
            hearts4: .75,
            map: 6,
            songs4: 1.5,
            songs5: 1,
            wallet: 1.5
        },
        time: 17,
        types: {
            endon: -.5,
            fortress: 2.5,
            fountain: 2,
            gtg: 1,
            hovers: 3,
            ice: 1.5,
            incboot: 100,
            incshield: 100,
            irons: 2,
            selfsynergy: 0,
            spirit: 3.5
        }
    }, {
        difficulty: 23,
        id: "9-hearts",
        jp: "ハート9つ",
        name: "9 Hearts",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 1,
            ms: 4
        },
        skill: 1,
        time: 17,
        types: {
            childtrade: 2.75,
            hearts3: 16,
            hearts4: 3,
            inchearts: 100,
            saria: 3,
            selfsynergy: -3
        }
    }, {
        difficulty: 23,
        id: "all-4-market-area-skulltulas",
        jp: "城下町エリアの黄金のスタルチュラ4匹",
        name: "All 4 Market area Skulltulas",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .5,
        subtypes: {
            bosskey2: 2,
            compass: 1,
            hearts3: 3,
            hearts4: 1,
            map: 2,
            songs4: 1.5,
            songs5: 2,
            wallet: 2.75
        },
        time: 17,
        types: {
            child2: 5,
            dins: 1,
            endon: 0,
            forest: 3,
            hovers: 3,
            incfboss: 100,
            pg: 2.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 23,
        id: "both-hps-in-lost-woods",
        jp: "迷いの森のハートのかけら２つ",
        name: "Both HPs in Lost Woods",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            cganon: 2,
            child2: 2.5,
            hearts3: 4.5,
            hearts4: 1.5,
            incsaria: 100,
            songs4: 3,
            wallet: .25
        },
        time: 17,
        types: {
            childchu: 0,
            childreset: 1.25,
            childtrade: 2.75,
            chuczl: 2,
            czl: 5,
            saria: 3,
            selfsynergy: -1
        }
    }, {
        difficulty: 23,
        id: "defeat-4-different-iron-knuckles",
        jp: "アイアンナックを4体撃破",
        name: "Defeat 4 Different Iron Knuckles",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 100,
            ms: 8
        },
        skill: .5,
        subtypes: {
            bosskey: 7.25,
            bosskey2: 5,
            childtrade: 1.5,
            compass: 1,
            czl: 1.5,
            hearts3: 2,
            hearts4: 1.5,
            map: 3,
            songs5: 1,
            wallet: 1
        },
        time: 17,
        types: {
            aganon: 3,
            bganon: -3,
            cganon: 3,
            endon: -.5,
            fortress: 2.5,
            gtg: 1,
            hovers: 3,
            selfsynergy: 0,
            spirit: 4
        }
    }],
    24: [{
        difficulty: 24,
        id: "1-skulltula-from-each-adult-dungeon",
        jp: "全ての大人ダンジョンからスタルチュラ最低1匹ずつ",
        name: "1 Skulltula from each Adult Dungeon",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: 1,
        subtypes: {
            bosskey: 4,
            bosskey2: 3,
            childchu: -2.5,
            compass: 6,
            hearts3: 1,
            hearts4: 2.25,
            map: 6,
            songs5: 5,
            wallet: 4.5
        },
        time: 18,
        types: {
            dmc: 1,
            fire: 1.5,
            forest: 2.75,
            fortress: 2.5,
            gtg: 1,
            hovers: 3,
            selfsynergy: -3,
            shadow: 2,
            spirit: 3,
            water: 3
        }
    }, {
        difficulty: 24,
        id: "7-compasses",
        jp: "コンパス7つ",
        name: "7 Compasses",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 5
        },
        skill: 1,
        subtypes: {
            bosskey2: 2,
            hearts3: 1.5,
            hearts4: 2,
            map: 22,
            poachers: 1.25,
            wallet: 1
        },
        time: 18.25,
        types: {
            compass: 22,
            hovers: 3,
            incmc: 100,
            selfsynergy: -3
        }
    }, {
        difficulty: 24,
        id: "green-gauntlets",
        jp: "緑のグローブ",
        name: "Green Gauntlets",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 0,
            ms: 100
        },
        skill: 0,
        subtypes: {
            bombbag: 100,
            bulletbag: 100,
            cganon: 2,
            hearts3: 3,
            hearts4: 1,
            incsaria: 100,
            songs4: 3,
            wallet: .5
        },
        time: 17.75,
        types: {
            childchu: 0,
            childreset: 1.25,
            childtrade: 2.75,
            chuczl: 2,
            czl: 5,
            saria: 5,
            selfsynergy: -1,
            strength: 100
        }
    }, {
        difficulty: 24,
        id: "map-compass-in-spirit-temple",
        jp: "魂の神殿のマップとコンパス",
        name: "Map & Compass in Spirit Temple",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 100,
            ms: 5
        },
        skill: 1,
        subtypes: {
            aganon: .25,
            bosskey: 2,
            bosskey2: 4,
            childchu: -2.5,
            chuczl: 2,
            compass: 4,
            hearts3: 1,
            hearts4: .25,
            map: 3,
            songs5: 1,
            wallet: 1
        },
        time: 17.75,
        types: {
            bothzl: -4.25,
            czl: 4.25,
            fortress: 3,
            hovers: 3,
            poachers: 4.25,
            quiver: 1.5,
            selfsynergy: 0,
            spirit: 5
        }
    }],
    25: [{
        difficulty: 25,
        id: "10-songs",
        jp: "歌10つ以上",
        name: "10 Songs",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 2,
            ms: 100
        },
        skill: .25,
        subtypes: {
            aganon: .25,
            bosskey: 3.5,
            child2: 3,
            childchu: -2.5,
            compass: 1,
            hearts3: 1.5,
            hearts4: .25,
            hovers: 1,
            map: 2,
            wallet: 1.5
        },
        time: 18.75,
        types: {
            endon: -.25,
            fortress: 2.5,
            incsongs: 100,
            poachers: 4.25,
            selfsynergy: 0,
            songs5: 15,
            spirit: 2.5
        }
    }, {
        difficulty: 25,
        id: "3-swords-tunics-boots-and-shields",
        jp: "剣3種、服3種、靴3種、盾3種",
        name: "3 Swords, Tunics, Boots, and Shields",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: .75,
        subtypes: {
            bosskey: 3.25,
            bosskey2: 5,
            compass: 4,
            hearts3: 1.5,
            hearts4: .75,
            map: 6,
            songs4: 1.5,
            songs5: 1,
            wallet: 1.5
        },
        time: 19,
        types: {
            fortress: 2.5,
            gtg: 1,
            hovers: 3,
            incboot: 100,
            incshield: 100,
            incsword: 100,
            inctunic: 100,
            selfsynergy: -1,
            spirit: 3.5,
            swords: 3
        }
    }, {
        difficulty: 25,
        id: "all-3-elemental-arrows",
        jp: "魔法矢3つ",
        name: "All 3 Elemental Arrows",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 1.5,
            ms: 100
        },
        skill: .5,
        subtypes: {
            aganon: 1,
            bosskey: 10,
            bosskey2: 10,
            childchu: -2.5,
            hearts3: 1.5,
            hearts4: .75,
            hovers: .5,
            kd: 2,
            map: 3,
            quiver: 4.5,
            wallet: .25
        },
        time: 19,
        types: {
            endon: -1,
            firearrow: 8,
            fortress: 3,
            gtg: 1,
            incarrows: 100,
            inclacs: 100,
            legitlacs: 100,
            lightarrow: 6.5,
            poachers: 4.25,
            selfsynergy: -.5
        }
    }, {
        difficulty: 25,
        id: "beat-the-spirit-temple",
        jp: "魂の神殿クリア",
        name: "Beat the Spirit Temple",
        rowtypes: {
            bottle: 1,
            gclw: 0,
            hookshot: 100,
            ms: 100
        },
        skill: 1,
        subtypes: {
            bosskey: 6,
            bosskey2: 6,
            compass: 1,
            hearts3: 3,
            hearts4: 1.5,
            map: 3,
            songs5: 1,
            wallet: .5
        },
        time: 19,
        types: {
            endon: -1,
            fortress: 2.5,
            gtg: 1,
            hovers: 3,
            incspboss: 100,
            legitlacs: 100,
            selfsynergy: -1,
            spirit: 8
        }
    }, {
        difficulty: 25,
        id: "defeat-twinrova",
        jp: "ツインローバ撃破",
        name: "Defeat Twinrova",
        rowtypes: {
            bottle: .5,
            gclw: 0,
            hookshot: 100,
            ms: 100
        },
        skill: 1,
        subtypes: {
            bosskey: 6,
            bosskey2: 6,
            compass: 1,
            hearts3: 3,
            hearts4: 1.5,
            map: 3,
            songs5: 1,
            wallet: .5
        },
        time: 19,
        types: {
            endon: -1,
            fortress: 2.5,
            gtg: 1,
            hovers: 3,
            incspboss: 100,
            legitlacs: 100,
            selfsynergy: 0,
            spirit: 8
        }
    }, {
        difficulty: 25,
        id: "get-to-the-end-of-forest-trial",
        jp: "森の結界の最後の部屋に到達",
        name: "Get to the end of Forest Trial",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 100,
            ms: 6
        },
        skill: .5,
        subtypes: {
            bosskey: 1,
            childchu: -2.5,
            chuczl: 2,
            gtunic: .25,
            hearts3: 1,
            hearts4: .5,
            songs5: 1
        },
        time: 18.5,
        types: {
            aganon: 3,
            bothzl: -4.25,
            czl: 4.25,
            dins: 3,
            dmc: 1,
            endon: -.5,
            firearrow: 8,
            fortress: 2,
            hovers: 1.5,
            lightarrow: 10,
            magic: 2,
            poachers: 4.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 25,
        id: "two-fairy-spells",
        jp: "魔法のアイテム２つ",
        name: "Two Fairy Spells",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 1,
            ms: 0
        },
        skill: .25,
        subtypes: {
            aganon: .25,
            bosskey: 3,
            bottleslot: 4,
            child2: 5.5,
            childchu: -2.5,
            chuczl: 2,
            compass: 4,
            gtunic: .25,
            hearts3: 2.25,
            hearts4: .5,
            map: 4,
            wallet: .75
        },
        time: 19,
        types: {
            bothzl: -4.25,
            childtrade: 2.75,
            czl: 7,
            dmc: 1,
            endon: -.25,
            fortress: 2.5,
            fountain: 2,
            hovers: 2,
            incfairy: 100,
            magic: 2,
            poachers: 4.25,
            selfsynergy: -.5,
            spirit: 2
        }
    }],
    26: [],
    27: [],
    28: [],
    29: [],
    3: [{
        difficulty: 3,
        id: "5-hearts",
        jp: "ハート5つ",
        name: "5 Hearts",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 1
        },
        skill: 0,
        time: 2.5,
        types: {
            hearts3: 4,
            inchearts: 100,
            selfsynergy: -1
        }
    }, {
        difficulty: 3,
        id: "5-magic-beans",
        jp: "魔法のマメ5つ以上",
        name: "5 Magic Beans",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            child2: 3,
            wallet: .25
        },
        time: 2.5,
        types: {
            beans: 3,
            childreset: .5,
            incbeans: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 3,
        id: "both-hps-in-death-mountain-crater",
        jp: "デスマウンテン火口のハートのかけら２つ",
        name: "Both HPs in Death Mountain Crater",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 0,
            ms: 1
        },
        skill: 0,
        subtypes: {
            bosskey: 1,
            hearts3: 1.5,
            hovers: .25,
            songs5: 1.5
        },
        time: 2,
        types: {
            dmc: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 3,
        id: "fire-temple-boss-key",
        jp: "炎の神殿のボス部屋の鍵",
        name: "Fire Temple Boss Key",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 100
        },
        skill: 0,
        subtypes: {
            bosskey: 2.5,
            gtunic: .25,
            hearts3: .5,
            songs5: 1
        },
        time: 2.5,
        types: {
            dmc: 1,
            fire: .25,
            firearrow: 2.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 3,
        id: "lon-lon-ranch-hp",
        jp: "ロンロン牧場のハートのかけら",
        name: "Lon Lon Ranch HP",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            hearts3: .75,
            hearts4: .25
        },
        time: 2.25,
        types: {
            lonlon: 1.75,
            selfsynergy: 0
        }
    }, {
        difficulty: 3,
        id: "map-compass-in-dodongo-s-cavern",
        jp: "ドドンゴの洞窟のマップとコンパス",
        name: "Map & Compass in Dodongo's Cavern",
        rowtypes: {
            bottle: 0,
            gclw: .5,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            compass: 1.75,
            map: 1
        },
        time: 2,
        types: {
            dc: 1,
            selfsynergy: 0
        }
    }],
    30: [],
    31: [],
    32: [],
    33: [],
    34: [],
    35: [],
    36: [],
    37: [],
    38: [],
    39: [],
    4: [{
        difficulty: 4,
        id: "3-tunics",
        jp: "服3種",
        name: "3 Tunics",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 0,
            ms: 100
        },
        skill: 0,
        subtypes: {
            bosskey: .25,
            compass: 1.5,
            dmc: .25,
            hearts3: .5,
            map: 1.5,
            wallet: .5
        },
        time: 3.25,
        types: {
            fountain: 1.5,
            gtunic: 1.75,
            inctunic: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 4,
        id: "silver-scale",
        jp: "銀のウロコ",
        name: "Silver Scale",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            bottleslot: 4,
            strength: 100,
            wallet: 100
        },
        time: 3,
        types: {
            fountain: 1,
            inclhskull: 2,
            selfsynergy: 0
        }
    }],
    40: [],
    41: [],
    42: [],
    43: [],
    44: [],
    45: [],
    46: [],
    47: [],
    48: [],
    49: [],
    5: [{
        difficulty: 5,
        id: "all-3-skulltulas-in-bottom-of-the-well",
        jp: "井戸の底の黄金のスタルチュラ3匹",
        name: "All 3 Skulltulas in Bottom of the Well",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .25,
        subtypes: {
            wallet: 1.5
        },
        time: 3.5,
        types: {
            childchu: 0,
            selfsynergy: 0
        }
    }, {
        difficulty: 5,
        id: "blue-fire",
        jp: "青い炎",
        name: "Blue Fire",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            bosskey: 2.5,
            compass: 3,
            hearts3: 1,
            map: 3,
            wallet: .75
        },
        time: 3.5,
        types: {
            aganon: 2.5,
            bganon: -2.5,
            cganon: 2.5,
            fountain: 2,
            ice: 1.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 5,
        id: "both-gerudo-valley-hps",
        jp: "ゲルドの谷のハートのかけら2つ",
        name: "Both Gerudo Valley HPs",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            bosskey: 1,
            hearts3: 1.5,
            hearts4: .5,
            hovers: .25,
            map: 1,
            wallet: .25
        },
        time: 3.5,
        types: {
            fortress: 1.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 5,
        id: "defeat-king-dodongo",
        jp: "キングドドンゴ撃破",
        name: "Defeat King Dodongo",
        rowtypes: {
            bottle: .5,
            gclw: .5,
            hookshot: 0,
            ms: 1
        },
        skill: 0,
        subtypes: {
            compass: 2,
            hearts3: 3,
            hearts4: 1,
            map: 2,
            wallet: .5
        },
        time: 4,
        types: {
            dc: 3,
            endon: -.5,
            incdodongo: 100,
            kd: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 5,
        id: "fairy-slingshot",
        jp: "妖精のパチンコ",
        name: "Fairy Slingshot",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            bulletbag: 1,
            compass: 2,
            czl: 3,
            hearts4: 1,
            map: 2
        },
        time: 4,
        types: {
            deku: 2.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 5,
        id: "ice-arrows",
        jp: "氷の矢",
        name: "Ice Arrows",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 1,
            ms: 0
        },
        skill: .25,
        subtypes: {
            bosskey: 3.5,
            hearts3: .5,
            hearts4: .25,
            hovers: .5,
            incarrows: 100,
            kd: 2,
            map: 3,
            quiver: 4.5,
            wallet: .25
        },
        time: 4,
        types: {
            fortress: 3,
            gtg: 1,
            selfsynergy: 0
        }
    }, {
        difficulty: 5,
        id: "ice-cavern-hp",
        jp: "氷の洞窟のハートのかけら",
        name: "Ice Cavern HP",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 0,
            ms: 1
        },
        skill: 0,
        subtypes: {
            compass: 3,
            hearts3: 1.5,
            map: 3,
            wallet: 1
        },
        time: 3.5,
        types: {
            fountain: 2,
            ice: 1.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 5,
        id: "map-compass-in-deku-tree",
        jp: "デクの樹様の中のマップとコンパス",
        name: "Map & Compass in Deku Tree",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .25,
        subtypes: {
            compass: 3,
            czl: 3,
            hearts4: 1,
            hovers: .5,
            map: 3,
            wallet: .5
        },
        time: 4,
        types: {
            deku: 3,
            selfsynergy: 0
        }
    }],
    50: [],
    6: [{
        difficulty: 6,
        id: "2-boss-keys",
        jp: "ボス部屋の鍵2つ",
        name: "2 Boss Keys",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 2,
            ms: 100
        },
        skill: 0,
        subtypes: {
            compass: 2,
            hearts3: 1,
            hearts4: 1,
            map: 3
        },
        time: 4.75,
        types: {
            aganon: 3,
            bganon: -3,
            bosskey: 6.75,
            cganon: 3,
            incbk: 100,
            selfsynergy: -2
        }
    }, {
        difficulty: 6,
        id: "3-songs",
        jp: "歌3つ以上",
        name: "3 Songs",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: .5,
            ms: 3
        },
        skill: 0,
        subtypes: {
            czl: 1,
            hearts3: .5,
            saria: 2,
            wallet: .25
        },
        time: 4.25,
        types: {
            bothzl: -4.25,
            incsongs: 100,
            poachers: 4.25,
            selfsynergy: 0,
            songs4: 3,
            songs5: 2
        }
    }, {
        difficulty: 6,
        id: "3-swords-3-tunics",
        jp: "剣3種、服3種",
        name: "3 Swords & 3 Tunics",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 0,
            ms: 100
        },
        skill: 0,
        subtypes: {
            bosskey: .25,
            bulletbag: -3,
            childchu: -1,
            compass: 1,
            dmc: .25,
            hearts3: .5,
            wallet: .5
        },
        time: 4.25,
        types: {
            fountain: 1.5,
            gtunic: 1.75,
            incsword: 100,
            inctunic: 100,
            selfsynergy: 0,
            swords: 3
        }
    }, {
        difficulty: 6,
        id: "3-unused-keys-in-gerudo-training-grounds",
        jp: "ゲルドの修練場の未使用の鍵3つ",
        name: "3 Unused Keys in Gerudo Training Grounds",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 1,
            ms: 0
        },
        skill: .25,
        subtypes: {
            bosskey: 3,
            hearts4: .25,
            hovers: .5,
            map: 3,
            wallet: .25
        },
        time: 4.5,
        types: {
            endon: -.25,
            fortress: 3,
            gtg: 2,
            incgtgkey: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "4-maps",
        jp: "マップ4つ",
        name: "4 Maps",
        rowtypes: {
            bottle: 0,
            gclw: .5,
            hookshot: .5,
            ms: .5
        },
        skill: 0,
        subtypes: {
            bosskey2: 2,
            compass: 6,
            hearts4: 1
        },
        time: 4.25,
        types: {
            hovers: 3,
            incmc: 100,
            map: 6,
            selfsynergy: -3
        }
    }, {
        difficulty: 6,
        id: "4-songs",
        jp: "歌4つ以上",
        name: "4 Songs",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 6
        },
        skill: 0,
        subtypes: {
            aganon: .25,
            childchu: -2.5,
            czl: 1,
            hearts3: 1,
            saria: 2
        },
        time: 4.25,
        types: {
            incsongs: 100,
            poachers: 4.25,
            selfsynergy: 0,
            songs4: 3,
            songs5: 2
        }
    }, {
        difficulty: 6,
        id: "all-3-kokiri-forest-area-skulltulas",
        jp: "コキリの森エリアの黄金のスタルチュラ３匹",
        name: "All 3 Kokiri Forest area Skulltulas",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: 0,
        subtypes: {
            child2: 1,
            wallet: 1.5
        },
        time: 4.5,
        types: {
            childreset: 1.25,
            forest: .25,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "all-3-skulltulas-in-ice-cavern",
        jp: "氷の洞窟の黄金のスタルチュラ3匹",
        name: "All 3 Skulltulas in Ice Cavern",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 1.5,
            ms: 1
        },
        skill: .25,
        subtypes: {
            compass: 3,
            hearts3: 1,
            hovers: .5,
            map: 3,
            wallet: 1.75
        },
        time: 4.25,
        types: {
            fountain: 2,
            ice: 1.5,
            irons: .5,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "blue-potion",
        jp: "青いクスリ",
        name: "Blue Potion",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 5
        },
        skill: 0,
        subtypes: {
            aganon: .25,
            childchu: -2.5,
            hearts3: 1
        },
        time: 4.5,
        types: {
            poachers: 4.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "both-gerudo-s-fortress-area-skulltulas",
        jp: "ゲルドの砦の黄金のスタルチュラ2匹",
        name: "Both Gerudo's Fortress area Skulltulas",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 100,
            ms: 100
        },
        skill: .25,
        subtypes: {
            hearts4: .5,
            hovers: .5,
            map: 2,
            wallet: 1.25
        },
        time: 4.5,
        types: {
            fortress: 2.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "cow-in-house",
        jp: "牛(リンクの家)",
        name: "Cow in House",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 100
        },
        skill: 0,
        time: 4.5,
        types: {
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "defeat-a-white-wolfos",
        jp: "ホワイトウルフォス撃破",
        name: "Defeat a White Wolfos",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: .5,
            ms: 0
        },
        skill: .25,
        subtypes: {
            compass: 3,
            hearts3: .5,
            hovers: .5,
            map: 3,
            wallet: .25
        },
        time: 4.75,
        types: {
            fortress: 3,
            fountain: 2,
            gtg: 1.5,
            ice: 1.5,
            irons: 1.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "defeat-all-lizalfos-in-dodongo-s-cavern",
        jp: "ドドンゴの洞窟のリザルフォス全て撃破",
        name: "Defeat all Lizalfos in Dodongo's Cavern",
        rowtypes: {
            bottle: 0,
            gclw: .5,
            hookshot: 0,
            ms: 1
        },
        skill: 0,
        subtypes: {
            compass: 2,
            hearts4: 1,
            map: 2,
            wallet: .5
        },
        time: 4.5,
        types: {
            dc: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "defeat-phantom-ganon",
        jp: "ファントムガノン撃破",
        name: "Defeat Phantom Ganon",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 3
        },
        skill: 0,
        subtypes: {
            bosskey2: 3,
            compass: 1,
            hearts3: 3,
            hearts4: 1,
            map: 2,
            songs5: 1.75,
            wallet: .75
        },
        time: 4.5,
        types: {
            endon: -.5,
            forest: 3,
            incfboss: 100,
            pg: 1.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "ganon-s-castle-boss-key",
        jp: "ガノン城のボス部屋の鍵",
        name: "Ganon's Castle Boss Key",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            bosskey: 4.25,
            childtrade: 1.5,
            czl: 1.5,
            hearts3: 2,
            hearts4: 1,
            wallet: .25
        },
        time: 4.25,
        types: {
            aganon: 3,
            bganon: -3,
            cganon: 3,
            endon: -.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "map-compass-in-ice-cavern",
        jp: "氷の洞窟のマップとコンパス",
        name: "Map & Compass in Ice Cavern",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 0,
            ms: 1
        },
        skill: .25,
        subtypes: {
            compass: 3,
            hearts3: 1.5,
            map: 3,
            wallet: 1
        },
        time: 4.75,
        types: {
            fountain: 2,
            ice: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "plant-bean-in-death-mountain-crater",
        jp: "デスマウンテン火口の土にマメを植える",
        name: "Plant bean in Death Mountain Crater",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .25,
        subtypes: {
            beans: -1,
            child2: 5,
            childreset: 1.25,
            hearts3: .5,
            wallet: .5
        },
        time: 4.5,
        types: {
            childchu: 0,
            dmc: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "ruto-s-letter",
        jp: "ルトの手紙",
        name: "Ruto's Letter",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            bottleslot: 4.5,
            jabu: 1.5,
            wallet: .5
        },
        time: 4.5,
        types: {
            inclhskull: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 6,
        id: "water-temple-boss-key",
        jp: "水の神殿のボス部屋のカギ",
        name: "Water Temple Boss Key",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 1,
            ms: 5
        },
        skill: .25,
        subtypes: {
            bosskey: 4.25,
            hearts3: .5,
            hearts4: .25,
            hovers: .5,
            incarrows: 100,
            map: 3,
            wallet: .25
        },
        time: 4.5,
        types: {
            fortress: 3,
            selfsynergy: 0,
            water: 1
        }
    }],
    7: [{
        difficulty: 7,
        id: "3-lake-hylia-skulltulas",
        jp: "ハイリア湖畔エリアの黄金のスタルチュラ3匹以上",
        name: "3 Lake Hylia Skulltulas",
        rowtypes: {
            bottle: 1.5,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .25,
        subtypes: {
            bottleslot: 2,
            child2: 2,
            wallet: 1.5
        },
        time: 5.5,
        types: {
            fountain: .5,
            inclhskull: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 7,
        id: "4-unused-keys-in-gerudo-training-grounds",
        jp: "ゲルドの修練場の未使用の鍵4つ",
        name: "4 Unused Keys in Gerudo Training Grounds",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 1,
            ms: 0
        },
        skill: .25,
        subtypes: {
            bosskey: 3,
            hearts4: .25,
            hovers: .5,
            map: 3,
            wallet: .25
        },
        time: 5.25,
        types: {
            endon: -.25,
            fortress: 3,
            gtg: 3,
            incgtgkey: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 7,
        id: "6-songs",
        jp: "歌6つ以上",
        name: "6 Songs",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: .5,
            ms: 100
        },
        skill: 0,
        subtypes: {
            aganon: .25,
            childchu: -2.5,
            hearts3: 1.5,
            wallet: .25
        },
        time: 5.5,
        types: {
            incsongs: 100,
            poachers: 4.25,
            selfsynergy: 0,
            songs5: 1.25
        }
    }, {
        difficulty: 7,
        id: "all-4-lost-woods-area-skulltulas",
        jp: "迷いの森エリアの黄金のスタルチュラ4匹",
        name: "All 4 Lost Woods area Skulltulas",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 2,
            ms: 100
        },
        skill: 0,
        subtypes: {
            songs5: 1,
            wallet: 2
        },
        time: 5.25,
        types: {
            childreset: 1.25,
            forest: 1,
            saria: .25,
            selfsynergy: 0
        }
    }, {
        difficulty: 7,
        id: "beat-the-deku-tree",
        jp: "デクの樹様の中クリア",
        name: "Beat the Deku Tree",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .25,
        subtypes: {
            cganon: 2,
            childtrade: 1.5,
            compass: 2.5,
            czl: 3,
            hearts3: 3,
            hearts4: 1,
            map: 2,
            wallet: .25
        },
        time: 5.5,
        types: {
            chuczl: 2,
            deku: 5,
            endon: -1,
            incgohma: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 7,
        id: "beat-the-forest-temple",
        jp: "森の神殿クリア",
        name: "Beat the Forest Temple",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 3
        },
        skill: 0,
        subtypes: {
            bosskey2: 2,
            compass: 1,
            hearts3: 3,
            hearts4: 1,
            map: 2,
            songs5: 1.75,
            wallet: .75
        },
        time: 5,
        types: {
            endon: -1,
            forest: 3,
            incfboss: 100,
            pg: 2.25,
            selfsynergy: 0
        }
    }, {
        difficulty: 7,
        id: "bullet-bag-40-",
        jp: "デクのタネ袋(40)",
        name: "Bullet Bag (40)",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            czl: 3,
            hearts4: 1
        },
        time: 5,
        types: {
            bulletbag: 100,
            childreset: .5,
            deku: 3,
            selfsynergy: 0
        }
    }, {
        difficulty: 7,
        id: "defeat-queen-gohma",
        jp: "ゴーマ撃破",
        name: "Defeat Queen Gohma",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            cganon: 1.5,
            compass: 2,
            czl: 3,
            hearts3: 3,
            hearts4: 1,
            map: 2,
            wallet: .25
        },
        time: 5.25,
        types: {
            chuczl: 2,
            deku: 5,
            endon: -.5,
            incgohma: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 7,
        id: "fill-all-4-bottle-slots",
        jp: "4つの空きビンスロットを全て埋める",
        name: "Fill all 4 Bottle Slots",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 0,
            ms: .5
        },
        skill: 0,
        subtypes: {
            jabu: 1.5
        },
        time: 5,
        types: {
            bottleslot: 4.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 7,
        id: "forest-medallion",
        jp: "森のメダル",
        name: "Forest Medallion",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 1,
            ms: 4
        },
        skill: 0,
        subtypes: {
            bosskey2: 2,
            childchu: -1,
            compass: 1,
            hearts3: 2,
            hearts4: 1,
            map: 3,
            songs5: 1.75,
            wallet: .75
        },
        time: 5.5,
        types: {
            endon: -1,
            forest: 4,
            fortress: 2,
            incfboss: 100,
            inclacs: 100,
            pg: 4,
            poachers: 4,
            selfsynergy: 0
        }
    }, {
        difficulty: 7,
        id: "iron-boots",
        jp: "ヘビーブーツ",
        name: "Iron Boots",
        rowtypes: {
            bottle: 0,
            gclw: 1,
            hookshot: 0,
            ms: 1
        },
        skill: .25,
        subtypes: {
            compass: 3,
            hearts3: 1,
            hearts4: .25,
            hovers: .5,
            map: 3,
            songs4: 1.5,
            wallet: 1
        },
        time: 5.5,
        types: {
            endon: -.5,
            fountain: 2,
            ice: 1.5,
            incboot: 100,
            incirons: 100,
            irons: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 7,
        id: "map-compass-in-shadow-temple",
        jp: "闇の神殿のマップとコンパス",
        name: "Map & Compass in Shadow Temple",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: .75,
            ms: .5
        },
        skill: 0,
        subtypes: {
            bosskey2: 3,
            compass: 3,
            map: 3
        },
        time: 5,
        types: {
            hovers: 3,
            selfsynergy: 0,
            shadow: 1
        }
    }],
    8: [{
        difficulty: 8,
        id: "37th-heart-piece-child-fortress-",
        jp: "37番目のハートのかけら(子供のゲルドの砦)",
        name: "37th Heart Piece (Child Fortress)",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .25,
        subtypes: {
            bosskey: 2,
            child2: 2,
            hearts3: .75,
            hearts4: .5,
            kd: 2,
            map: 2,
            poachers: 3
        },
        time: 6,
        types: {
            childchu: 0,
            childreset: 1.25,
            fortress: 2.5,
            selfsynergy: 0
        }
    }, {
        difficulty: 8,
        id: "5-unused-keys-in-gerudo-training-grounds",
        jp: "ゲルドの修練場の未使用の鍵5つ",
        name: "5 Unused Keys in Gerudo Training Grounds",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 1,
            ms: 0
        },
        skill: .25,
        subtypes: {
            bosskey: 3,
            hearts4: .25,
            hovers: .5,
            map: 3,
            wallet: .25
        },
        time: 6,
        types: {
            endon: -.25,
            fortress: 3,
            gtg: 4,
            incgtgkey: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 8,
        id: "6-hearts",
        jp: "ハート6つ",
        name: "6 Hearts",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 2
        },
        skill: .25,
        time: 6.25,
        types: {
            hearts3: 7,
            inchearts: 100,
            selfsynergy: -1
        }
    }, {
        difficulty: 8,
        id: "7-magic-beans",
        jp: "魔法のマメ7つ以上",
        name: "7 Magic Beans",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .25,
        subtypes: {
            child2: 3,
            gerudo: .5,
            wallet: .25
        },
        time: 6.25,
        types: {
            beans: 6,
            childreset: .5,
            incbeans: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 8,
        id: "all-5-skulltulas-in-dodongo-s-cavern",
        jp: "ドドンゴの洞窟の黄金のスタルチュラ5匹",
        name: "All 5 Skulltulas in Dodongo's Cavern",
        rowtypes: {
            bottle: 0,
            gclw: .5,
            hookshot: .25,
            ms: 1.5
        },
        skill: 0,
        subtypes: {
            compass: 2,
            hearts3: 1,
            hearts4: 1,
            hovers: .25,
            map: 1,
            wallet: 2.5
        },
        time: 5.75,
        types: {
            dc: 4,
            selfsynergy: 0
        }
    }, {
        difficulty: 8,
        id: "all-8-kakariko-area-skulltulas",
        jp: "カカリコ村エリアの黄金のスタルチュラ8匹",
        name: "All 8 Kakariko area Skulltulas",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 1.5,
            ms: 100
        },
        skill: .25,
        subtypes: {
            jabu: .5,
            wallet: 4
        },
        time: 6.25,
        types: {
            childchu: 0,
            selfsynergy: 0
        }
    }, {
        difficulty: 8,
        id: "beat-dodongo-s-cavern",
        jp: "ドドンゴの洞窟クリア",
        name: "Beat Dodongo's Cavern",
        rowtypes: {
            bottle: .5,
            gclw: .5,
            hookshot: 0,
            ms: 1
        },
        skill: .25,
        subtypes: {
            compass: 2,
            hearts3: 3,
            hearts4: 1,
            map: 2,
            wallet: .5
        },
        time: 6.25,
        types: {
            dc: 3,
            fortress: 2,
            incdodongo: 100,
            kd: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 8,
        id: "beat-the-water-temple",
        jp: "水の神殿クリア",
        name: "Beat the Water Temple",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 100,
            ms: 1
        },
        skill: .25,
        subtypes: {
            compass: 2.5,
            hearts3: 3,
            hearts4: 1,
            map: 2.5,
            poachers: 1.25
        },
        time: 6.25,
        types: {
            endon: -1,
            hovers: 1,
            incwboss: 100,
            selfsynergy: 0,
            water: 7
        }
    }, {
        difficulty: 8,
        id: "defeat-morpha",
        jp: "モーファ撃破",
        name: "Defeat Morpha",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 100,
            ms: 1
        },
        skill: .25,
        subtypes: {
            compass: 2.5,
            hearts3: 3,
            hearts4: 1,
            map: 2.5,
            poachers: 1.25
        },
        time: 5.75,
        types: {
            endon: -.5,
            hovers: 1,
            incwboss: 100,
            selfsynergy: 0,
            water: 7
        }
    }, {
        difficulty: 8,
        id: "giant-s-wallet",
        jp: "巨人のサイフ",
        name: "Giant's Wallet",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 2,
            ms: 6
        },
        skill: .25,
        subtypes: {
            bulletbag: 100,
            childchu: -2.5
        },
        time: 6.25,
        types: {
            incbeans: 100,
            selfsynergy: 0,
            wallet: 100
        }
    }, {
        difficulty: 8,
        id: "golden-gauntlets",
        jp: "金のグローブ",
        name: "Golden Gauntlets",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 2.5,
            ms: 0
        },
        skill: .75,
        subtypes: {
            bombbag: 100,
            bosskey: 2.5,
            hovers: 1,
            wallet: .25
        },
        time: 5.75,
        types: {
            aganon: 3,
            bganon: -3,
            cganon: 3,
            endon: -.5,
            incshtrial: 100,
            selfsynergy: 0,
            strength: 100
        }
    }, {
        difficulty: 8,
        id: "milk",
        jp: "ロンロン牛乳",
        name: "Milk",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            bottleslot: 4.5,
            childreset: 1,
            czl: 2,
            songs4: .5,
            wallet: .5
        },
        time: 6.25,
        types: {
            lonlon: 4,
            selfsynergy: 0
        }
    }],
    9: [{
        difficulty: 9,
        id: "15-different-skulltulas",
        jp: "スタルチュラのしるし15個(増殖禁止)",
        name: "15 Different Skulltulas",
        rowtypes: {
            bottle: 1,
            gclw: .5,
            hookshot: 2,
            ms: 2
        },
        skill: .5,
        time: 6.5,
        types: {
            selfsynergy: -2,
            wallet: 8
        }
    }, {
        difficulty: 9,
        id: "4-compasses",
        jp: "コンパス4つ",
        name: "4 Compasses",
        rowtypes: {
            bottle: 0,
            gclw: .5,
            hookshot: .5,
            ms: .75
        },
        skill: 0,
        subtypes: {
            bosskey2: 2,
            hearts4: 1,
            map: 7
        },
        time: 7,
        types: {
            compass: 7,
            hovers: 3,
            incmc: 100,
            selfsynergy: -3
        }
    }, {
        difficulty: 9,
        id: "4-unused-keys-in-forest-temple",
        jp: "森の神殿の未使用の小さな鍵4つ",
        name: "4 Unused Keys in Forest Temple",
        rowtypes: {
            bottle: .5,
            gclw: 1,
            hookshot: 100,
            ms: 4
        },
        skill: 0,
        subtypes: {
            bosskey2: 3,
            hearts4: 1,
            irons: .75,
            map: 3,
            songs5: 1.75,
            wallet: 1.5
        },
        time: 6.5,
        types: {
            forest: 3,
            incforest: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 9,
        id: "6-unused-keys-in-gerudo-training-grounds",
        jp: "ゲルドの修練場の未使用の鍵6つ",
        name: "6 Unused Keys in Gerudo Training Grounds",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 1,
            ms: 0
        },
        skill: .5,
        subtypes: {
            bosskey: 3,
            hearts4: .25,
            hovers: .5,
            map: 3,
            wallet: .25
        },
        time: 7,
        types: {
            endon: -.25,
            fortress: 3,
            gtg: 5,
            incgtgkey: 100,
            selfsynergy: 0
        }
    }, {
        difficulty: 9,
        id: "all-4-gerudo-valley-area-skulltulas",
        jp: "ゲルドの谷エリアの黄金のスタルチュラ4匹",
        name: "All 4 Gerudo Valley area Skulltulas",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: 2,
            ms: 100
        },
        skill: .25,
        subtypes: {
            bosskey: 1.5,
            child2: 1.5,
            hearts3: .5,
            hearts4: .25,
            hovers: .25,
            jabu: .5,
            map: 1.5,
            wallet: 2
        },
        time: 7,
        types: {
            childchu: 0,
            fortress: 2,
            selfsynergy: 0
        }
    }, {
        difficulty: 9,
        id: "all-5-skulltulas-in-forest-temple",
        jp: "森の神殿の黄金のスタルチュラ5匹",
        name: "All 5 Skulltulas in Forest Temple",
        rowtypes: {
            bottle: 100,
            gclw: 1,
            hookshot: 100,
            ms: 5
        },
        skill: .25,
        subtypes: {
            bosskey2: 5,
            compass: 1,
            hearts4: 1,
            hovers: .5,
            map: 2.75,
            songs5: 1.75,
            wallet: 2.75
        },
        time: 6.75,
        types: {
            forest: 3,
            meg: 1,
            selfsynergy: 0
        }
    }, {
        difficulty: 9,
        id: "defeat-dark-link",
        jp: "ダークリンク撃破",
        name: "Defeat Dark Link",
        rowtypes: {
            bottle: 100,
            gclw: .5,
            hookshot: 100,
            ms: 10
        },
        skill: .25,
        subtypes: {
            bbprize: -6,
            childchu: -2.5,
            compass: 3.5,
            hearts4: 1,
            hovers: .5,
            map: 3.5,
            poachers: 1.25,
            wallet: .25
        },
        time: 7,
        types: {
            dc: 2,
            inclong: 100,
            longshot: 4,
            selfsynergy: 0,
            water: 3
        }
    }, {
        difficulty: 9,
        id: "epona-s-song",
        jp: "エポナの歌",
        name: "Epona's Song",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: 0,
        subtypes: {
            bottleslot: 3,
            childreset: 1,
            czl: 2,
            poachers: -100,
            songs4: 1.75,
            wallet: .5
        },
        time: 6.75,
        types: {
            lonlon: 4,
            selfsynergy: 0
        }
    }, {
        difficulty: 9,
        id: "longshot",
        jp: "ロングフック",
        name: "Longshot",
        rowtypes: {
            bottle: 100,
            gclw: .5,
            hookshot: 100,
            ms: 10
        },
        skill: 0,
        subtypes: {
            bbprize: -6,
            childchu: -2.5,
            compass: 3.5,
            hearts4: 1,
            hovers: .25,
            map: 3.5,
            poachers: 1.25,
            wallet: .25
        },
        time: 7,
        types: {
            dc: 2,
            inclong: 100,
            longshot: 5,
            selfsynergy: 0,
            water: 3
        }
    }, {
        difficulty: 9,
        id: "map-compass-in-water-temple",
        jp: "水の神殿のマップとコンパス",
        name: "Map & Compass in Water Temple",
        rowtypes: {
            bottle: 0,
            gclw: .5,
            hookshot: 0,
            ms: 1
        },
        skill: .5,
        subtypes: {
            compass: 3,
            hearts4: 1,
            map: 3,
            poachers: 1.25
        },
        time: 7,
        types: {
            gtg: 1,
            selfsynergy: 0,
            water: 3
        }
    }, {
        difficulty: 9,
        id: "water-medallion",
        jp: "水のメダル",
        name: "Water Medallion",
        rowtypes: {
            bottle: 100,
            gclw: 0,
            hookshot: .5,
            ms: 1.5
        },
        skill: 0,
        subtypes: {
            childchu: -1,
            compass: 2.5,
            hearts3: 3,
            hearts4: 1,
            hovers: .5,
            map: 2.5
        },
        time: 6.5,
        types: {
            fortress: 2,
            inclacs: 100,
            poachers: 4,
            selfsynergy: 0,
            water: 6.5
        }
    }, {
        difficulty: 9,
        id: "win-bombchu-bowling-prize",
        jp: "ボムチュウボウリングの景品を何か1つ入手",
        name: "Win Bombchu Bowling Prize",
        rowtypes: {
            bottle: 0,
            gclw: 0,
            hookshot: 0,
            ms: 0
        },
        skill: .5,
        subtypes: {
            child2: 3,
            compass: 2,
            hearts3: 3,
            hearts4: 1,
            map: 2,
            wallet: .5
        },
        time: 6.75,
        types: {
            bbprize: 100,
            childchu: 0,
            dc: 3,
            fortress: 1,
            gtg: 1,
            incdodongo: 100,
            kd: 3,
            selfsynergy: 0
        }
    }],
    info: {
        version: "v9 beta"
    },
    rowtypes: {
        bottle: 2,
        gclw: 1,
        hookshot: 3,
        ms: 12
    },
    synfilters: {
        childchu: "min 1",
        endon: "max -1",
        legitlacs: "min -2"
    }
};