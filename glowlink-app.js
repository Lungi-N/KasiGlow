(function () {
  const PROVIDERS = [
    { id: 1, name: "Nomsa Khumalo", area: "Gugulethu", cat: "nails", svc: "Nail Technician", tags: ["Gel Nails", "Nail Art", "Extensions"], r: 4.9, rv: 312, p: 180, v: true, d: 10, mob: true, rate: 1.2 },
    { id: 2, name: "Thandi Dube", area: "Khayelitsha", cat: "braiding", svc: "Braiding Specialist", tags: ["Box Braids", "Knotless", "Twists"], r: 4.8, rv: 198, p: 250, v: true, d: 0, mob: false },
    { id: 3, name: "Lerato Mokoena", area: "Mitchells Plain", cat: "lashes", svc: "Lash Artist", tags: ["Lash Lift", "Extensions", "Tint"], r: 4.9, rv: 445, p: 220, v: true, d: 15, mob: true },
    { id: 4, name: "Zanele Sithole", area: "Nyanga", cat: "makeup", svc: "Makeup Artist", tags: ["Bridal", "Events", "Natural Glam"], r: 4.7, rv: 156, p: 350, v: false, d: 0, mob: true },
    { id: 5, name: "Precious Ndlovu", area: "Philippi", cat: "hair", svc: "Hair Stylist", tags: ["Relaxer", "Colour", "Blow-dry"], r: 4.8, rv: 223, p: 150, v: true, d: 0, mob: false },
    { id: 6, name: "Kefilwe Tau", area: "Kraaifontein", cat: "skincare", svc: "Skincare Specialist", tags: ["Facials", "Waxing", "Threading"], r: 4.6, rv: 89, p: 280, v: true, d: 20, mob: false },
    { id: 7, name: "Buhle Zuma", area: "Khayelitsha", cat: "braiding", svc: "Braiding Artist", tags: ["Goddess", "Cornrows", "Fulani"], r: 4.7, rv: 167, p: 300, v: true, d: 0, mob: true },
    { id: 8, name: "Ayanda Cele", area: "Gugulethu", cat: "nails", svc: "Nail Technician", tags: ["Acrylic", "Ombre", "French"], r: 4.5, rv: 89, p: 140, v: false, d: 10, mob: false },
    { id: 9, name: "Siyanda Ntuli", area: "Mitchells Plain", cat: "hair", svc: "Hair Colourist", tags: ["Bleach", "Balayage", "Ombre"], r: 4.9, rv: 334, p: 400, v: true, d: 0, mob: false },
    { id: 10, name: "Naledi Kgosi", area: "Kraaifontein", cat: "lashes", svc: "Lash & Brow Specialist", tags: ["Lash Lift", "Brow Tint", "Lamination"], r: 4.8, rv: 201, p: 200, v: true, d: 0, mob: true },
    { id: 11, name: "Mpho Dlamini", area: "Nyanga", cat: "makeup", svc: "Makeup Pro", tags: ["Party Glam", "Natural", "Editorial"], r: 4.6, rv: 123, p: 280, v: false, d: 10, mob: true },
    { id: 12, name: "Sonia Adams", area: "Philippi", cat: "skincare", svc: "Skincare & Wax", tags: ["Brazilian Wax", "Facials", "Peels"], r: 4.7, rv: 77, p: 190, v: true, d: 0, mob: false },
  ];

  const SERVICE_MENU = {
    braiding: [
      { name: "Knotless Braids — Small Short", price: 350 }, { name: "Knotless Braids — Small Medium", price: 450 }, { name: "Knotless Braids — Small Long", price: 550 },
      { name: "Knotless Braids — Medium Short", price: 300 }, { name: "Knotless Braids — Medium Medium", price: 400 }, { name: "Knotless Braids — Medium Long", price: 500 },
      { name: "Knotless Braids — Large Short", price: 250 }, { name: "Knotless Braids — Large Medium", price: 350 }, { name: "Knotless Braids — Large Long", price: 450 },
      { name: "Goddess Braids — Small Medium", price: 500 }, { name: "Goddess Braids — Small Long", price: 650 },
      { name: "Goddess Braids — Medium Medium", price: 450 }, { name: "Goddess Braids — Medium Long", price: 600 },
      { name: "Goddess Braids — Large Medium", price: 400 }, { name: "Goddess Braids — Large Long", price: 550 },
      { name: "French Curls — Short", price: 450 }, { name: "French Curls — Medium", price: 550 }, { name: "French Curls — Long", price: 650 },
      { name: "Wig Lines — Straight Back", price: 100 }, { name: "Wig Lines — Custom Pattern", price: 150 },
      { name: "Straight Back Cornrows — Simple", price: 120 }, { name: "Straight Back Cornrows — Intricate", price: 180 },
      { name: "Tribal Braids — Medium", price: 450 }, { name: "Tribal Braids — Long", price: 600 },
      { name: "Special Style Request — Custom Design (from)", price: 200 },
    ],
    lashes: [
      { name: "Classic Lashes — Doll Eye", price: 180 }, { name: "Classic Lashes — Cat Eye", price: 180 }, { name: "Classic Lashes — Natural Eye", price: 180 }, { name: "Classic Lashes — Wispy", price: 200 },
      { name: "Hybrid Lashes — Doll Eye", price: 220 }, { name: "Hybrid Lashes — Cat Eye", price: 220 }, { name: "Hybrid Lashes — Natural Eye", price: 220 }, { name: "Hybrid Lashes — Wispy", price: 250 },
      { name: "Volume Lashes — Doll Eye", price: 260 }, { name: "Volume Lashes — Cat Eye", price: 260 }, { name: "Volume Lashes — Natural Eye", price: 260 }, { name: "Volume Lashes — Wispy", price: 300 },
      { name: "Refill — Classic (2-3 weeks)", price: 120 }, { name: "Refill — Hybrid (2-3 weeks)", price: 150 }, { name: "Refill — Volume (2-3 weeks)", price: 180 },
    ],
    nails: [
      { name: "Manicure (clean, shape, polish)", price: 80 }, { name: "Pedicure", price: 100 }, { name: "Soak-off (gel/acrylic removal)", price: 50 },
      { name: "Gel Overlay (natural nails)", price: 120 }, { name: "Gel Tips (extensions)", price: 180 }, { name: "Gel Refill", price: 150 },
      { name: "Acrylic Full Set — Short", price: 180 }, { name: "Acrylic Full Set — Medium", price: 220 }, { name: "Acrylic Full Set — Long", price: 260 }, { name: "Acrylic Refill", price: 150 },
      { name: "Simple Nail Art Add-on", price: 20 }, { name: "Detailed Nail Art Add-on", price: 50 }, { name: "Ombre / French Tips Add-on", price: 40 }, { name: "Rhinestones / Gems Add-on", price: 30 },
      { name: "Mani + Pedi Combo", price: 240 }, { name: "Full Set + Simple Nail Art Package", price: 220 },
    ],
    hair: [
      { name: "Wash & Blow Dry", price: 100 }, { name: "Deep Conditioning Treatment", price: 150 }, { name: "Protein Treatment", price: 180 },
      { name: "Blowout (straight)", price: 120 }, { name: "Curls / Styling", price: 150 }, { name: "Upstyle (events/formal)", price: 200 },
      { name: "Ladies Cut", price: 120 }, { name: "Trim", price: 80 }, { name: "Children's Cut", price: 70 },
      { name: "Relaxer — Short", price: 150 }, { name: "Relaxer — Medium", price: 200 }, { name: "Relaxer — Long", price: 250 },
      { name: "Full Colour", price: 350 }, { name: "Root Touch-up", price: 200 }, { name: "Highlights", price: 400 },
      { name: "Hairline / Edges Styling Add-on", price: 30 }, { name: "Extra Length / Thickness Add-on", price: 50 }, { name: "Consultation", price: 0 },
    ],
    makeup: [
      { name: "Natural Glam", price: 180 }, { name: "Soft Glam", price: 220 }, { name: "Full Glam", price: 350 }, { name: "Full Glam with Lashes", price: 450 },
      { name: "Bridal Makeup", price: 700 }, { name: "Bridesmaid Makeup", price: 550 }, { name: "Matric Dance / Formal Makeup", price: 500 },
      { name: "Strip Lashes Add-on", price: 50 }, { name: "Travel Fee — Local Area", price: 50 }, { name: "Travel Fee — Outside Area (from)", price: 100 },
      { name: "Touch-up Session", price: 100 }, { name: "Early Morning Fee Add-on", price: 50 },
    ],
    skincare: [
      { name: "Basic Facial (cleanse, exfoliate, mask)", price: 150 }, { name: "Deep Cleansing Facial", price: 200 }, { name: "Acne Treatment Facial", price: 250 }, { name: "Brightening / Glow Facial", price: 220 },
      { name: "Waxing — Eyebrows", price: 40 }, { name: "Waxing — Upper Lip", price: 30 }, { name: "Waxing — Underarms", price: 60 }, { name: "Waxing — Half Arm", price: 80 }, { name: "Waxing — Full Arm", price: 120 },
      { name: "Waxing — Half Leg", price: 120 }, { name: "Waxing — Full Leg", price: 180 }, { name: "Waxing — Bikini Line", price: 100 },
      { name: "Threading — Eyebrows", price: 30 }, { name: "Threading — Upper Lip", price: 20 }, { name: "Threading — Full Face", price: 80 },
    ],
  };

  const GRADS = [
    "linear-gradient(135deg,#3E0D37,#8B2A7A)",
    "linear-gradient(135deg,#0D373E,#2A8B7A)",
    "linear-gradient(135deg,#37200D,#8B5A2A)",
    "linear-gradient(135deg,#1A0D37,#5A2A8B)",
    "linear-gradient(135deg,#370D1A,#8B2A4F)",
    "linear-gradient(135deg,#0D2037,#2A5A8B)",
  ];

  function grad(id) {
    return GRADS[(id - 1) % GRADS.length];
  }

  function initials(name) {
    return name
      .split(/\s+/)
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

  function photoUrl(id, w, h) {
    const p = PROVIDERS.find(function (x) {
      return x.id === id;
    });
    if (!p) return "";
    return "images-providers/" + encodeURIComponent(p.name) + ".jpg";
  }

  function providerPrice(p, base) {
    const rate = p.rate || 1;
    return Math.round((base * rate) / 10) * 10;
  }

  function providerServices(p) {
    const menu = SERVICE_MENU[p.cat] || [];
    return menu.map(function (s) {
      return { name: s.name, price: providerPrice(p, s.price) };
    });
  }

  function gc() {
    return JSON.parse(localStorage.getItem("glCart") || "[]");
  }
  function gs() {
    return JSON.parse(localStorage.getItem("glSaved") || "[]");
  }
  function sc(v) {
    localStorage.setItem("glCart", JSON.stringify(v));
  }
  function ss(v) {
    localStorage.setItem("glSaved", JSON.stringify(v));
  }

  function toast(m, d) {
    d = d || 2800;
    const t = document.getElementById("toast");
    if (!t) return;
    t.innerHTML = m;
    t.className = "show";
    clearTimeout(t._t);
    t._t = setTimeout(function () {
      t.className = "";
    }, d);
  }

  function updBadge() {
    const n = gc().length;
    const b = document.getElementById("cb");
    if (b) {
      b.textContent = n;
      b.style.display = n ? "flex" : "none";
    }
  }

  function toggleCart() {
    const dr = document.getElementById("dr");
    const ov = document.getElementById("ov");
    if (dr) dr.classList.toggle("open");
    if (ov) ov.classList.toggle("open");
    renderCart();
  }

  function renderCart() {
    const c = gc();
    const el = document.getElementById("di");
    if (!el) return;
    const dt = document.getElementById("dt");
    if (!c.length) {
      el.innerHTML =
        '<div class="d-empty"><p style="font-weight:700;color:var(--plum);margin-bottom:8px">Cart</p><p>Your cart is empty.<br>Find a service to book.</p></div>';
      if (dt) dt.textContent = "R0 | Deposit R0";
      return;
    }
    let tot = 0;
    el.innerHTML = c
      .map(function (it, i) {
        tot += it.price;
        const ini = initials(it.name);
        return (
          '<div class="ci"><div class="ci-av">' +
          ini +
          '</div><div class="ci-info"><div class="ci-name">' +
          escapeHtml(it.svc) +
          '</div><div class="ci-sub">' +
          escapeHtml(it.name) +
          " · " +
          escapeHtml(it.area) +
          '</div></div><div class="ci-price">R' +
          it.price +
          '</div><button type="button" class="ci-rm" onclick="window.rmCart(' +
          i +
          ')">Remove</button></div>'
        );
      })
      .join("");
    if (dt) dt.textContent = "R" + tot + " | Deposit R" + Math.round(tot * 0.3);
  }

  function rmCart(i) {
    const c = gc();
    c.splice(i, 1);
    sc(c);
    updBadge();
    renderCart();
  }

  function addCart(id) {
    const p = PROVIDERS.find(function (x) {
      return x.id === id;
    });
    if (!p) return;
    const c = gc();
    if (c.find(function (x) {
      return x.pid === id && x.svc === p.svc;
    })) {
      toast("Already in cart.");
      return;
    }
    const price = p.d ? Math.round(p.p * (1 - p.d / 100)) : p.p;
    c.push({ pid: id, name: p.name, area: p.area, svc: p.svc, price: price, orig: p.p, disc: p.d });
    sc(c);
    updBadge();
    toast("<b>" + escapeHtml(p.name) + "</b> added to cart.");
  }

  function addServiceCart(providerId, serviceIndex) {
    const p = PROVIDERS.find(function (x) {
      return x.id === providerId;
    });
    if (!p) return;
    const menu = providerServices(p);
    const s = menu[serviceIndex];
    if (!s) return;
    const c = gc();
    if (c.find(function (x) {
      return x.pid === providerId && x.svc === s.name;
    })) {
      toast("This service is already in cart.");
      return;
    }
    c.push({ pid: providerId, name: p.name, area: p.area, svc: s.name, price: s.price, orig: s.price, disc: 0 });
    sc(c);
    updBadge();
    toast("<b>" + escapeHtml(s.name) + "</b> added.");
  }

  function toggleSave(id, btn) {
    const s = gs();
    const i = s.indexOf(id);
    if (i === -1) {
      s.push(id);
      ss(s);
      if (btn) {
        btn.textContent = "Saved";
        btn.classList.add("on");
      }
      toast("Saved to your list.");
    } else {
      s.splice(i, 1);
      ss(s);
      if (btn) {
        btn.textContent = "Save";
        btn.classList.remove("on");
      }
      toast("Removed from saved.");
    }
    if (typeof window.renderSavedPage === "function") window.renderSavedPage();
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function starString(r) {
    const n = Math.floor(r);
    let out = "";
    for (let i = 0; i < n; i++) out += "★";
    return out;
  }

  function pCard(p) {
    const inS = gs().includes(p.id);
    const dp = p.d ? Math.round(p.p * (1 - p.d / 100)) : p.p;
    const ini = initials(p.name);
    const loc =
      p.area + (p.mob ? " · Mobile visits" : "");
    return (
      '<div class="pcard">' +
      '<div class="pb" style="background:' +
      grad(p.id) +
      '">' +
      '<div class="pb-pat"></div><img class="pb-img" src="' +
      photoUrl(p.id, 900, 520) +
      '" alt="' +
      escapeHtml(p.name) +
      '">' +
      (p.v ? '<span class="pv-badge">Verified</span>' : "") +
      (p.d ? '<span class="pd-badge">' + p.d + "% OFF</span>" : "") +
      '<button type="button" class="save-btn ' +
      (inS ? "on" : "") +
      '" onclick="event.stopPropagation();window.toggleSave(' +
      p.id +
      ",this)\" title=\"Save stylist\">" +
      (inS ? "Saved" : "Save") +
      "</button>" +
      '</div><div class="pb-body">' +
      '<div class="pb-av"><img class="avatar-img" src="' +
      photoUrl(p.id, 160, 160) +
      '" alt="' +
      escapeHtml(p.name) +
      '"></div><div class="pb-nm">' +
      escapeHtml(p.name) +
      '</div><div class="pb-loc">' +
      escapeHtml(loc) +
      "</div>" +
      '<div class="pb-tags">' +
      p.tags.map(function (t) {
        return '<span class="tag">' + escapeHtml(t) + "</span>";
      }).join("") +
      "</div>" +
      '<div class="pb-rat"><span class="stars">' +
      starString(p.r) +
      "</span><strong>" +
      p.r +
      '</strong><span class="rc">(' +
      p.rv +
      ")</span></div>" +
      '<div class="pb-ft"><div><div class="pf">From</div><div class="pv">' +
      (p.d ? "<s>R" + p.p + "</s> " : "") +
      "R" +
      dp +
      '</div></div><button type="button" class="book-btn" onclick="event.stopPropagation();window.addCart(' +
      p.id +
      ')">+ Book</button></div></div></div>'
    );
  }

  function toggleMob() {
    const m = document.getElementById("mob");
    if (m) m.classList.toggle("open");
  }

  function currentFile() {
    let f = (location.pathname || "").split("/").pop() || "index.html";
    f = f.split("?")[0].toLowerCase();
    if (!f) return "index.html";
    return f;
  }

  function setNavActive() {
    let cur = currentFile();
    if (cur === "provider-profile.html") cur = "providers.html";
    document.querySelectorAll(".nav .nl[href], .mob-menu .nl[href]").forEach(function (a) {
      if (a.classList.contains("nav-cta")) return;
      let h = a.getAttribute("href") || "";
      let file = h.split("?")[0].split("/").pop().toLowerCase();
      if (!file) file = "index.html";
      a.classList.toggle("active", file === cur);
    });
  }

  function filterProviders(opts) {
    opts = opts || {};
    let list = PROVIDERS.slice();
    if (opts.cat && opts.cat !== "all") {
      list = list.filter(function (p) {
        return p.cat === opts.cat;
      });
    }
    if (opts.q) {
      const q = opts.q.toLowerCase();
      list = list.filter(function (p) {
        return (
          p.name.toLowerCase().includes(q) ||
          p.svc.toLowerCase().includes(q) ||
          p.area.toLowerCase().includes(q) ||
          p.tags.some(function (t) {
            return t.toLowerCase().includes(q);
          })
        );
      });
    }
    if (opts.area) {
      const a = opts.area.toLowerCase();
      list = list.filter(function (p) {
        return p.area.toLowerCase().includes(a);
      });
    }
    return list;
  }

  function readQuery() {
    const u = new URLSearchParams(location.search);
    return {
      cat: (u.get("cat") || "").toLowerCase(),
      q: u.get("q") || "",
      area: u.get("area") || "",
    };
  }

  function doSearch() {
    const hq = document.getElementById("hq");
    const ha = document.getElementById("ha");
    const q = hq ? hq.value.trim() : "";
    const a = ha ? ha.value.trim() : "";
    const params = [];
    if (q) params.push("q=" + encodeURIComponent(q));
    if (a) params.push("area=" + encodeURIComponent(a));
    location.href = "services.html" + (params.length ? "?" + params.join("&") : "");
  }

  function initPage() {
    updBadge();
    setNavActive();
    const page = document.body.getAttribute("data-page");

    if (page === "home") {
      const g = document.getElementById("featGrid");
      if (g) {
        g.innerHTML = PROVIDERS.slice(0, 6)
          .map(function (p) {
            return (
              '<a href="provider-profile.html?id=' +
              p.id +
              '" style="text-decoration:none;display:block">' +
              pCard(p) +
              "</a>"
            );
          })
          .join("");
      }
    }

    if (page === "services") {
      const qy = readQuery();
      const sel = document.getElementById("svcCat");
      if (sel && qy.cat) sel.value = qy.cat;
      const iq = document.getElementById("svcQ");
      if (iq && qy.q) iq.value = qy.q;
      const ia = document.getElementById("svcArea");
      if (ia && qy.area) ia.value = qy.area;
      function run() {
        const cat = document.getElementById("svcCat") ? document.getElementById("svcCat").value : "all";
        const q = document.getElementById("svcQ") ? document.getElementById("svcQ").value.trim() : "";
        const area = document.getElementById("svcArea") ? document.getElementById("svcArea").value.trim() : "";
        const list = filterProviders({ cat: cat, q: q, area: area });
        const grid = document.getElementById("svcGrid");
        const info = document.getElementById("svcInfo");
        if (info) info.textContent = list.length + " provider" + (list.length === 1 ? "" : "s") + " match your filters.";
        if (grid) {
          grid.innerHTML = list.length
            ? list
                .map(function (p) {
                  return (
                    '<a href="provider-profile.html?id=' +
                    p.id +
                    '" style="text-decoration:none;display:block">' +
                    pCard(p) +
                    "</a>"
                  );
                })
                .join("")
            : '<div class="empty">No providers match. Try clearing filters.</div>';
        }
      }
      window.applySvcFilters = run;
      run();
    }

    if (page === "providers") {
      const grid = document.getElementById("allGrid");
      if (grid) {
        grid.innerHTML = PROVIDERS.map(function (p) {
          return (
            '<a href="provider-profile.html?id=' +
            p.id +
            '" style="text-decoration:none;display:block">' +
            pCard(p) +
            "</a>"
          );
        }).join("");
      }
    }

    if (page === "saved") {
      window.renderSavedPage = function () {
        const grid = document.getElementById("savedGrid");
        const ids = gs();
        const list = ids
          .map(function (id) {
            return PROVIDERS.find(function (p) {
              return p.id === id;
            });
          })
          .filter(Boolean);
        if (grid) {
          grid.innerHTML = list.length
            ? list
                .map(function (p) {
                  return (
                    '<a href="provider-profile.html?id=' +
                    p.id +
                    '" style="text-decoration:none;display:block">' +
                    pCard(p) +
                    "</a>"
                  );
                })
                .join("")
            : '<div class="empty">You have not saved any stylists yet. Browse <a href="providers.html" style="color:var(--plum);font-weight:700">providers</a> and tap Save.</div>';
        }
      };
      window.renderSavedPage();
    }

    if (page === "profile") {
      const u = new URLSearchParams(location.search);
      const id = parseInt(u.get("id") || "0", 10);
      const p = PROVIDERS.find(function (x) {
        return x.id === id;
      });
      const root = document.getElementById("profileRoot");
      if (!root) return;
      if (!p) {
        root.innerHTML =
          '<div class="empty">Provider not found. <a href="providers.html" style="color:var(--plum);font-weight:700">Back to providers</a></div>';
        return;
      }
      localStorage.setItem("kasiLastProviderId", String(p.id));
      const dp = p.d ? Math.round(p.p * (1 - p.d / 100)) : p.p;
      const menu = providerServices(p);
      const servicesHtml = menu.map(function (s, i) {
        return '<div class="svc-item"><div class="svc-meta"><strong>' +
          escapeHtml(s.name) +
          '</strong><span>R' +
          s.price +
          '</span></div><button type="button" class="book-btn" onclick="window.addServiceCart(' +
          p.id +
          "," +
          i +
          ')">Add</button></div>';
      }).join("");
      root.innerHTML =
        '<div class="panel profile-head">' +
        '<div class="profile-hero"><img class="avatar-img" src="' +
        photoUrl(p.id, 360, 360) +
        '" alt="' +
        escapeHtml(p.name) +
        '"></div>' +
        '<div class="profile-meta"><h2>' +
        escapeHtml(p.name) +
        "</h2>" +
        '<p class="meta">' +
        escapeHtml(p.svc) +
        " · " +
        escapeHtml(p.area) +
        (p.mob ? " · Mobile visits available" : "") +
        "</p>" +
        '<span class="price-badge ' + ((p.rate || 1) > 1 ? "premium" : "standard") + '">' +
        ((p.rate || 1) > 1 ? "Premium pricing provider" : "Standard pricing provider") +
        "</span>" +
        '<div class="profile-actions">' +
        '<button type="button" class="btn btn-primary" onclick="window.addCart(' +
        p.id +
        ')">Add booking to cart</button> ' +
        '<button type="button" class="btn btn-secondary" id="profSave" onclick="window.toggleSave(' +
        p.id +
        ',document.getElementById(\'profSave\'))">' +
        (gs().includes(p.id) ? "Saved" : "Save") +
        "</button> " +
        '<a class="btn btn-secondary" href="providers.html">All providers</a></div></div></div>' +
        '<div class="panel"><h3>Services & specialties</h3><p style="color:var(--mid);font-size:14px;line-height:1.7">' +
        p.tags.map(function (t) {
          return escapeHtml(t);
        }).join(" · ") +
        "</p></div>" +
        '<div class="panel"><h3>Select a service</h3><p style="color:var(--mid);font-size:13px;margin-bottom:12px">Choose a service below. The cart calculates the 30% deposit automatically.</p><div class="svc-list">' +
        servicesHtml +
        "</div></div>" +
        '<div class="panel"><h3>Pricing</h3><p style="font-size:18px;font-weight:700;color:var(--plum)">From ' +
        (p.d ? "<s style=\"color:var(--lt);font-weight:400\">R" + p.p + "</s> " : "") +
        "R" +
        dp +
        "</p>" +
        '<p style="color:var(--mid);font-size:13px;margin-top:8px">Deposits and travel fees may apply. Final price confirmed on checkout.</p>' +
        '<p style="color:var(--mid);font-size:12px;margin-top:8px">Price level multiplier: x' + (p.rate || 1).toFixed(2) + ' compared to standard providers.</p></div>' +
        '<div class="panel"><h3>Ratings</h3><p><span class="stars" style="font-size:18px">' +
        starString(p.r) +
        "</span> <strong>" +
        p.r +
        "</strong> <span class=\"rc\">(" +
        p.rv +
        " reviews)</span></p></div>";
    }

    if (page === "checkout") {
      function renderChk() {
        const c = gc();
        const box = document.getElementById("chkLines");
        const sum = document.getElementById("chkSum");
        if (!box) return;
        if (!c.length) {
          box.innerHTML =
            '<div class="empty">Your cart is empty. <a href="services.html" style="color:var(--plum);font-weight:700">Browse services</a></div>';
          if (sum) sum.textContent = "R0";
          const depEl = document.getElementById("chkDep");
          if (depEl) depEl.textContent = "R0";
          return;
        }
        let tot = 0;
        box.innerHTML = c
          .map(function (it) {
            tot += it.price;
            return (
              '<div class="ci" style="border:0;padding:12px 0"><div class="ci-av">' +
              initials(it.name) +
              '</div><div class="ci-info"><div class="ci-name">' +
              escapeHtml(it.svc) +
              '</div><div class="ci-sub">' +
              escapeHtml(it.name) +
              "</div></div><div class=\"ci-price\">R" +
              it.price +
              "</div></div>"
            );
          })
          .join("");
        if (sum) sum.textContent = "R" + tot;
        const depEl = document.getElementById("chkDep");
        if (depEl) depEl.textContent = "R" + Math.round(tot * 0.3);
      }
      window.renderCheckout = renderChk;
      renderChk();
    }

    if (page === "safety") {
      const verifySelect = document.getElementById("verifyProvider");
      if (verifySelect) {
        verifySelect.innerHTML = PROVIDERS.map(function (p) {
          return '<option value="' + p.id + '">' + escapeHtml(p.name) + "</option>";
        }).join("");
        const params = new URLSearchParams(location.search);
        const fromQuery = parseInt(params.get("providerId") || "0", 10);
        const fromStorage = parseInt(localStorage.getItem("kasiLastProviderId") || "0", 10);
        const chosen = fromQuery || fromStorage;
        if (chosen && PROVIDERS.find(function (p) { return p.id === chosen; })) {
          verifySelect.value = String(chosen);
        }
        checkProviderVerification();
      }
    }
  }

  let safetyTimerHandle = null;
  let safetyTimerEnd = 0;
  function formatDuration(ms) {
    const s = Math.max(0, Math.floor(ms / 1000));
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return m + "m " + (sec < 10 ? "0" : "") + sec + "s";
  }

  function sendTrustedContact() {
    const input = document.getElementById("trustedNumber");
    const status = document.getElementById("trustedStatus");
    if (!input || !status) return;
    const number = input.value.trim();
    if (!/^[0-9+\\s-]{8,15}$/.test(number)) {
      status.textContent = "Enter a valid phone number first.";
      return;
    }
    status.textContent = "Booking details sent to " + number + " via WhatsApp (demo).";
    toast("Trusted contact notified.");
  }

  function safetyCheckIn() {
    const status = document.getElementById("timerStatus");
    if (!status) return;
    if (safetyTimerHandle) clearInterval(safetyTimerHandle);
    safetyTimerEnd = Date.now() + 15 * 60 * 1000;
    status.textContent = "Check-in active. Time left: 15m 00s";
    safetyTimerHandle = setInterval(function () {
      const left = safetyTimerEnd - Date.now();
      if (left <= 0) {
        clearInterval(safetyTimerHandle);
        safetyTimerHandle = null;
        status.textContent = "Timer expired. Auto-alert would be sent to trusted contact (demo).";
        toast("Check-in timer expired.");
        return;
      }
      status.textContent = "Check-in active. Time left: " + formatDuration(left);
    }, 1000);
  }

  function safetyCheckOut() {
    const status = document.getElementById("timerStatus");
    if (!status) return;
    if (safetyTimerHandle) {
      clearInterval(safetyTimerHandle);
      safetyTimerHandle = null;
      status.textContent = "Checked out successfully. No auto-alert needed.";
      toast("Checked out safely.");
    } else {
      status.textContent = "No active timer to stop.";
    }
  }

  function checkProviderVerification() {
    const sel = document.getElementById("verifyProvider");
    const status = document.getElementById("verifyStatus");
    const text = document.getElementById("verifyText");
    if (!sel || !status || !text) return;
    const id = parseInt(sel.value || "0", 10);
    const p = PROVIDERS.find(function (x) { return x.id === id; });
    if (!p) return;
    text.textContent = p.name + " — rating " + p.r + " · bookings " + p.rv + ".";
    status.textContent = p.v ? "Verified: ID checks completed." : "Not verified yet: ID checks still pending.";
    toast(p.v ? "Provider is verified." : "Provider not verified.");
  }

  document.addEventListener("DOMContentLoaded", function () {
    try {
      initPage();
    } catch (err) {
      console.error("KasiGlow init:", err);
    }
  });

  window.rmCart = rmCart;
  window.addCart = addCart;
  window.toggleSave = toggleSave;
  window.toggleCart = toggleCart;
  window.toggleMob = toggleMob;
  window.doSearch = doSearch;
  window.toast = toast;
  window.sendTrustedContact = sendTrustedContact;
  window.safetyCheckIn = safetyCheckIn;
  window.safetyCheckOut = safetyCheckOut;
  window.checkProviderVerification = checkProviderVerification;
  window.PROVIDERS = PROVIDERS;
  window.addServiceCart = addServiceCart;
  window.initKasiGlowPage = initPage;
  window.renderCart = renderCart;
  window.updBadge = updBadge;
})();


