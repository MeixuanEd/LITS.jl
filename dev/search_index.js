var documenterSearchIndex = {"docs":
[{"location":"api/LITS/#LITS-1","page":"LITS","title":"LITS","text":"","category":"section"},{"location":"api/LITS/#","page":"LITS","title":"LITS","text":"CurrentModule = LITS\nDocTestSetup  = quote\n    using LITS\nend","category":"page"},{"location":"api/LITS/#","page":"LITS","title":"LITS","text":"API documentation","category":"page"},{"location":"api/LITS/#","page":"LITS","title":"LITS","text":"Pages = [\"LITS.md\"]","category":"page"},{"location":"api/LITS/#Index-1","page":"LITS","title":"Index","text":"","category":"section"},{"location":"api/LITS/#","page":"LITS","title":"LITS","text":"Pages = [\"LITS.md\"]","category":"page"},{"location":"api/LITS/#Exported-1","page":"LITS","title":"Exported","text":"","category":"section"},{"location":"api/LITS/#","page":"LITS","title":"LITS","text":"Modules = [LITS]\nPrivate = false","category":"page"},{"location":"api/LITS/#Internal-1","page":"LITS","title":"Internal","text":"","category":"section"},{"location":"api/LITS/#","page":"LITS","title":"LITS","text":"Modules = [LITS]\nPublic = false","category":"page"},{"location":"api/LITS/#LITS.AVRSimple","page":"LITS","title":"LITS.AVRSimple","text":"Parameters of a simple proportional AVR in the derivative of EMF i.e. an integrator controller on EMF\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.AndersonFouadMachine","page":"LITS","title":"LITS.AndersonFouadMachine","text":"Parameters of 6-states synchronous machine: Anderson-Fouad model\n\nConmutable structor\n\nAndersonFouadMachine(R, Xd, Xq, Xd_p, Xq_p, Xd_pp, Xq_pp, Td0_p, Tq0_p, Td0_pp, Tq0_pp, MVABase)\n\n#Arguments\n\nR::Float64 : Resistance after EMF in machine per unit\nXd::Float64 : Reactance after EMF in d-axis per unit\nXq::Float64 : Reactance after EMF in q-axis per unit\nXd_p::Float64 : Transient reactance after EMF in d-axis per unit\nXq_p::Float64 : Transient reactance after EMF in q-axis per unit\nXd_pp::Float64 : Subtransient reactance after EMF in d-axis per unit\nXq_pp::Float64 : Subtransient reactance after EMF in q-axis per unit\nTd0_p::Float64 : Time constant of transient d-axis voltage\nTq0_p::Float64 : Time constant of transient q-axis voltage\nTd0_pp::Float64 : Time constant of subtransient d-axis voltage\nTq0_pp::Float64 : Time constant of subtransient q-axis voltage\nMVABase::Float64 : Nominal Capacity in MVA\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.AvgCnvFixedDC","page":"LITS","title":"LITS.AvgCnvFixedDC","text":"v_rated::Float64 : rated voltage\ns_rated::Float64 : rated VA\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.CombinedVIwithVZ","page":"LITS","title":"LITS.CombinedVIwithVZ","text":"kpc::Float64 : current controller proportional gain\nkic::Float64 : current controller integral gain\nkpv::Float64 : voltage controller proportional gain\nkiv::Float64 : voltage controller integral gain\nω_ad::Float64 : active damping filter cutoff frequency (rad/sec)\nkad::Float64 : active damping gain\nlv::Float64 : virtual inductance\nrv::Float64 : virtual resistance\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.DirectControl","page":"LITS","title":"LITS.DirectControl","text":"kpc::Float64 : current controller proportional gain\nkic::Float64 : current controller integral gain\nkpv::Float64 : voltage controller proportional gain\nkiv::Float64 : voltage controller integral gain\nω_ad::Float64 : active damping filter cutoff frequency (rad/sec)\nkad::Float64 : active damping gain\nlv::Float64 : virtual inductance\nrv::Float64 : virtual resistance\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.DynGenerator","page":"LITS","title":"LITS.DynGenerator","text":"\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.LCFilter","page":"LITS","title":"LITS.LCFilter","text":"lf::Float64 : filter inductance\nrf::Float64 : filter resistance\ncf::Float64 : filter capacitance\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.MarconatoMachine","page":"LITS","title":"LITS.MarconatoMachine","text":"Parameters of 6-states synchronous machine: Marconato model\n\nConmutable structor\n\nMarconatoMachine(R, Xd, Xq, Xd_p, Xq_p, Xd_pp, Xq_pp, Td0_p, Tq0_p, Td0_pp, Tq0_pp, T_AA, MVABase)\n\n#Arguments\n\nR::Float64 : Resistance after EMF in machine per unit\nXd::Float64 : Reactance after EMF in d-axis per unit\nXq::Float64 : Reactance after EMF in q-axis per unit\nXd_p::Float64 : Transient reactance after EMF in d-axis per unit\nXq_p::Float64 : Transient reactance after EMF in q-axis per unit\nXd_pp::Float64 : Subtransient reactance after EMF in d-axis per unit\nXq_pp::Float64 : Subtransient reactance after EMF in q-axis per unit\nTd0_p::Float64 : Time constant of transient d-axis voltage\nTq0_p::Float64 : Time constant of transient q-axis voltage\nTd0_pp::Float64 : Time constant of subtransient d-axis voltage\nTq0_pp::Float64 : Time constant of subtransient q-axis voltage\nT_AA::Float64 : Time constant of d-axis additional leakage\nMVABase::Float64 : Nominal Capacity in MVA\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.OneDOneQMachine","page":"LITS","title":"LITS.OneDOneQMachine","text":"Parameters of 2-states synchronous machine: One d- and One q-Axis Model\n\nConmutable structor\n\nOneDOneQMachine(R, Xd, Xq, Xd_p, Xq_pp, Td0_p, Tq0_pp, MVABase)\n\n#Arguments\n\nR::Float64\nXd::Float64\nXq::Float64\nXd_p::Float64 : Reactance after EMF in machine per unit\nXq_pp::Float64\nTd0_p::Float64 : Time constant of transient d-axis voltage\nTq0_pp::Float64 : Time constant of subtransient q-axis voltage\nMVABase::Float64 : Nominal Capacity in MVA\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.PLL","page":"LITS","title":"LITS.PLL","text":"ω_lp::Float64 : PLL low-pass filter frequency (rad/sec)\nkp_pll::Float64 : PLL proportional gain\nki_pll::Float64 : PLL integral gain\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.ReactivePowerDrop","page":"LITS","title":"LITS.ReactivePowerDrop","text":"kq::Float64 : reactive power droop gain\nωf::Float64 : reactive power filter cutoff frequency (rad/sec)\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.SimpleAFMachine","page":"LITS","title":"LITS.SimpleAFMachine","text":"Parameters of 4-states simplified Anderson-Fouad (SimpleAFMachine) model. The derivative of stator fluxes (ψd and ψq) is neglected and ωψd = ψd and ωψq = ψq is assumed (i.e. ω=1.0). This is standard when transmission network dynamics is neglected. If transmission dynamics is considered use the full order Anderson Fouad model.\n\nConmutable structor\n\nSimpleAFMachine(R, Xd, Xq, Xd_p, Xq_p, Xd_pp, Xq_pp, Td0_p, Tq0_p, Td0_pp, Tq0_pp, MVABase)\n\n#Arguments\n\nR::Float64 : Resistance after EMF in machine per unit\nXd::Float64 : Reactance after EMF in d-axis per unit\nXq::Float64 : Reactance after EMF in q-axis per unit\nXd_p::Float64 : Transient reactance after EMF in d-axis per unit\nXq_p::Float64 : Transient reactance after EMF in q-axis per unit\nXd_pp::Float64 : Subtransient reactance after EMF in d-axis per unit\nXq_pp::Float64 : Subtransient reactance after EMF in q-axis per unit\nTd0_p::Float64 : Time constant of transient d-axis voltage\nTq0_p::Float64 : Time constant of transient q-axis voltage\nTd0_pp::Float64 : Time constant of subtransient d-axis voltage\nTq0_pp::Float64 : Time constant of subtransient q-axis voltage\nMVABase::Float64 : Nominal Capacity in MVA\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.SimpleMarconatoMachine","page":"LITS","title":"LITS.SimpleMarconatoMachine","text":"Parameters of 4-states synchronous machine: Simplified Marconato model The derivative of stator fluxes (ψd and ψq) is neglected and ωψd = ψd and ωψq = ψq is assumed (i.e. ω=1.0). This is standard when transmission network dynamics is neglected.\n\nConmutable structor\n\nSimpleMarconatoMachine(R, Xd, Xq, Xd_p, Xq_p, Xd_pp, Xq_pp, Td0_p, Tq0_p, Td0_pp, Tq0_pp, T_AA, MVABase)\n\n#Arguments\n\nR::Float64 : Resistance after EMF in machine per unit\nXd::Float64 : Reactance after EMF in d-axis per unit\nXq::Float64 : Reactance after EMF in q-axis per unit\nXd_p::Float64 : Transient reactance after EMF in d-axis per unit\nXq_p::Float64 : Transient reactance after EMF in q-axis per unit\nXd_pp::Float64 : Subtransient reactance after EMF in d-axis per unit\nXq_pp::Float64 : Subtransient reactance after EMF in q-axis per unit\nTd0_p::Float64 : Time constant of transient d-axis voltage\nTq0_p::Float64 : Time constant of transient q-axis voltage\nTd0_pp::Float64 : Time constant of subtransient d-axis voltage\nTq0_pp::Float64 : Time constant of subtransient q-axis voltage\nT_AA::Float64 : Time constant of d-axis additional leakage\nMVABase::Float64 : Nominal Capacity in MVA\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.StaticSource","page":"LITS","title":"LITS.StaticSource","text":"This struct acts as an infinity bus.\n\n\n\n\n\n","category":"type"},{"location":"api/LITS/#LITS.VirtualInertia","page":"LITS","title":"LITS.VirtualInertia","text":"Ta::Float64 : VSM interia constant\nkd::Float64 : VSM damping constant\nkw::Float64 : frequency droop gain\nωb::Float64 : rated angular frequency\n\n\n\n\n\n","category":"type"},{"location":"#Contents-1","page":"Home","title":"Contents","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Pages = [\n  \"man/guide.md\"\n]","category":"page"},{"location":"docs/#Documentation-1","page":"Documentation","title":"Documentation","text":"","category":"section"},{"location":"docs/#Requirements-1","page":"Documentation","title":"Requirements","text":"","category":"section"},{"location":"docs/#","page":"Documentation","title":"Documentation","text":"Pkg.add(\"Documenter\")","category":"page"},{"location":"docs/#","page":"Documentation","title":"Documentation","text":"pip install ghp-import","category":"page"},{"location":"docs/#Run-1","page":"Documentation","title":"Run","text":"","category":"section"},{"location":"docs/#","page":"Documentation","title":"Documentation","text":"cd docs\nmake html\nopen build/index.html","category":"page"}]
}
