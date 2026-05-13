Var njMathsTheory = {
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 1: સંમેય સંખ્યાઓ
    // ------------------------------------
    "1": {
        "chapterName": "પ્રકરણ 1",
        "chapterTitle": "સંમેય સંખ્યાઓ",
        "qa_list": [
            { 
                question: "સંખ્યાઓનું પુનરાવર્તન અને સંમેય સંખ્યાનો પરિચય", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <ul style='line-height:1.8; color:#1e3a8a;'>
                        <li><b>પ્રાકૃતિક સંખ્યાઓ (N):</b> 1, 2, 3, ...</li>
                        <li><b>પૂર્ણ સંખ્યાઓ (W):</b> 0, 1, 2, 3, ...</li>
                        <li><b>પૂર્ણાંક સંખ્યાઓ (Z):</b> ..., -3, -2, -1, 0, 1, 2, 3, ...</li>
                        <li><b style='color:#ea580c; font-size:16px;'>સંમેય સંખ્યાઓ (Rational Numbers - Q):</b> 
                        <br>જે સંખ્યાને <b>p/q</b> સ્વરૂપમાં દર્શાવી શકાય, જ્યાં <b>p</b> અને <b>q</b> પૂર્ણાંક સંખ્યાઓ હોય અને છેદ <b>q ≠ 0</b> (શૂન્ય ન હોય).
                        <br><i>ઉદાહરણ:</i> 2/3, -5/7, 4 (કારણ કે 4/1 લખાય), 0 (કારણ કે 0/1 લખાય).</li>
                    </ul>
                </div>`
            },
            { 
                question: "સંમેય સંખ્યાઓના ગુણધર્મો - ૧ (સંવૃતતા - Closure Property)", 
                answer: `
                <p style='color:#1e3a8a; font-weight:bold;'>જ્યારે બે સંમેય સંખ્યાઓ પર ગાણિતિક પ્રક્રિયા કરવામાં આવે અને જવાબ પણ સંમેય સંખ્યા જ મળે, તો તે પ્રક્રિયા માટે સંવૃતતા છે તેમ કહેવાય.</p>
                <div style='overflow-x:auto;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:300px;'>
                        <tr style='background-color:#ea580c; color:white;'>
                            <th style='padding:8px; border:1px solid #cbd5e1;'>ગાણિતિક પ્રક્રિયા</th>
                            <th style='padding:8px; border:1px solid #cbd5e1;'>શું સંમેય સંખ્યાઓ સંવૃત છે?</th>
                            <th style='padding:8px; border:1px solid #cbd5e1;'>ઉદાહરણ</th>
                        </tr>
                        <tr>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>સરવાળો (+)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#16a34a;'>હા</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>1/2 + 1/3 = 5/6 (સંમેય સંખ્યા છે)</td>
                        </tr>
                        <tr style='background-color:#fef3c7;'>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>બાદબાકી (-)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#16a34a;'>હા</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>5/7 - 2/7 = 3/7 (સંમેય સંખ્યા છે)</td>
                        </tr>
                        <tr>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>ગુણાકાર (×)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#16a34a;'>હા</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>-2/3 × 4/5 = -8/15 (સંમેય સંખ્યા છે)</td>
                        </tr>
                        <tr style='background-color:#fee2e2;'>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>ભાગાકાર (÷)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;'>ના</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>કોઈપણ સંખ્યાનો 0 વડે ભાગાકાર વ્યાખ્યાયિત નથી. (દા.ત. 5 ÷ 0)</td>
                        </tr>
                    </table>
                </div>` 
            },
            { 
                question: "સંમેય સંખ્યાઓના ગુણધર્મો - ૨ (ક્રમનો અને જૂથનો ગુણધર્મ)", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='border:2px dashed #1e3a8a; padding:12px; border-radius:8px; background-color:#f8fafc;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>🔹 ક્રમનો ગુણધર્મ (Commutative Property):</h4>
                        <p style='margin:0; font-size:14px;'>ગમે તે ક્રમમાં પ્રક્રિયા કરવાથી પરિણામ બદલાતું નથી.</p>
                        <ul style='margin-top:5px; margin-bottom:0; color:#ea580c; font-weight:bold;'>
                            <li>સરવાળા માટે: a + b = b + a</li>
                            <li>ગુણાકાર માટે: a × b = b × a</li>
                        </ul>
                        <p style='margin:5px 0 0 0; font-size:13px; color:#dc2626;'><i>(નોંધ: બાદબાકી અને ભાગાકારમાં ક્રમનો ગુણધર્મ જળવાતો નથી.)</i></p>
                    </div>
                    
                    <div style='border:2px dashed #ea580c; padding:12px; border-radius:8px; background-color:#fff7ed;'>
                        <h4 style='color:#ea580c; margin:0 0 8px 0;'>🔸 જૂથનો ગુણધર્મ (Associative Property):</h4>
                        <p style='margin:0; font-size:14px;'>ત્રણ કે તેથી વધુ સંખ્યાઓમાં ગમે તે બે સંખ્યાઓનું જૂથ બનાવી પ્રક્રિયા કરી શકાય છે.</p>
                        <ul style='margin-top:5px; margin-bottom:0; color:#1e3a8a; font-weight:bold;'>
                            <li>સરવાળા માટે: a + (b + c) = (a + b) + c</li>
                            <li>ગુણાકાર માટે: a × (b × c) = (a × b) × c</li>
                        </ul>
                        <p style='margin:5px 0 0 0; font-size:13px; color:#dc2626;'><i>(નોંધ: બાદબાકી અને ભાગાકારમાં જૂથનો ગુણધર્મ જળવાતો નથી.)</i></p>
                    </div>
                </div>` 
            },
            { 
                question: "શૂન્ય (0) અને એક (1) ની ભૂમિકા (તટસ્થ ઘટકો)", 
                answer: `
                <div style='display:flex; flex-wrap:wrap; gap:10px; justify-content:center;'>
                    <div style='flex:1; min-width:140px; background-color:#dbeafe; padding:15px; border-radius:10px; text-align:center; border:1px solid #3b82f6;'>
                        <h3 style='color:#1d4ed8; margin-top:0;'>શૂન્ય (0)</h3>
                        <p style='font-size:14px; margin-bottom:5px;'><b>સરવાળા માટે તટસ્થ સંખ્યા</b></p>
                        <p style='font-size:13px; color:#4b5563;'>કોઈપણ સંખ્યામાં 0 ઉમેરતાં તેની તે જ સંખ્યા મળે છે.</p>
                        <div style='background-color:white; padding:5px; border-radius:5px; color:#ea580c; font-weight:bold;'>a + 0 = a</div>
                        <p style='font-size:12px; margin-top:5px;'>દા.ત. -2/7 + 0 = -2/7</p>
                    </div>
                    <div style='flex:1; min-width:140px; background-color:#fef3c7; padding:15px; border-radius:10px; text-align:center; border:1px solid #d97706;'>
                        <h3 style='color:#b45309; margin-top:0;'>એક (1)</h3>
                        <p style='font-size:14px; margin-bottom:5px;'><b>ગુણાકાર માટે તટસ્થ સંખ્યા</b></p>
                        <p style='font-size:13px; color:#4b5563;'>કોઈપણ સંખ્યાને 1 વડે ગુણતાં તેની તે જ સંખ્યા મળે છે.</p>
                        <div style='background-color:white; padding:5px; border-radius:5px; color:#1e3a8a; font-weight:bold;'>a × 1 = a</div>
                        <p style='font-size:12px; margin-top:5px;'>દા.ત. 3/8 × 1 = 3/8</p>
                    </div>
                </div>` 
            },
            { 
                question: "વિરોધી સંખ્યા અને વ્યસ્ત સંખ્યા (Additive & Multiplicative Inverse)", 
                answer: `
                <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                    <svg width="320" height="180" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
                        <!-- વિરોધી સંખ્યા -->
                        <rect x="10" y="10" width="140" height="160" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                        <text x="80" y="35" fill="#166534" font-weight="bold" font-size="16" text-anchor="middle">વિરોધી સંખ્યા</text>
                        <text x="80" y="55" fill="#4b5563" font-size="12" text-anchor="middle">(માત્ર ચિન્હ બદલો)</text>
                        <text x="80" y="85" fill="#1e3a8a" font-weight="bold" font-size="18" text-anchor="middle">a/b  ➔  -a/b</text>
                        <line x1="20" y1="105" x2="140" y2="105" stroke="#16a34a" stroke-width="1" stroke-dasharray="4"/>
                        <text x="80" y="125" fill="#ea580c" font-size="12" font-weight="bold" text-anchor="middle">બંનેનો સરવાળો = 0</text>
                        <text x="80" y="145" fill="#4b5563" font-size="12" text-anchor="middle">દા.ત. 3/5 ની વિરોધી -3/5</text>

                        <!-- વ્યસ્ત સંખ્યા -->
                        <rect x="170" y="10" width="140" height="160" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
                        <text x="240" y="35" fill="#1e40af" font-weight="bold" font-size="16" text-anchor="middle">વ્યસ્ત સંખ્યા</text>
                        <text x="240" y="55" fill="#4b5563" font-size="12" text-anchor="middle">(અંશ અને છેદ ઉલટાવો)</text>
                        <text x="240" y="85" fill="#ea580c" font-weight="bold" font-size="18" text-anchor="middle">a/b  ➔  b/a</text>
                        <line x1="180" y1="105" x2="300" y2="105" stroke="#2563eb" stroke-width="1" stroke-dasharray="4"/>
                        <text x="240" y="125" fill="#16a34a" font-size="12" font-weight="bold" text-anchor="middle">બંનેનો ગુણાકાર = 1</text>
                        <text x="240" y="145" fill="#4b5563" font-size="12" text-anchor="middle">દા.ત. 4/7 ની વ્યસ્ત 7/4</text>
                    </svg>
                </div>
                <div style='background-color:#fff; padding:10px; border-left:4px solid #dc2626; margin-top:5px; font-size:14px;'>
                    <b>ખાસ નોંધ:</b> '0' (શૂન્ય) ની કોઈ વ્યસ્ત સંખ્યા હોતી નથી.
                </div>` 
            },
            { 
                question: "સરવાળા પર ગુણાકારનું વિભાજન (Distributive Property)", 
                answer: `
                <p>આ ગુણધર્મ ગણતરીઓને ખૂબ જ સરળ બનાવે છે. કૌંસની બહાર રહેલી સંખ્યાનો કૌંસની અંદર રહેલી બંને સંખ્યાઓ સાથે ગુણાકાર થાય છે.</p>
                <div style='background-color:#fffbeb; padding:15px; border-radius:10px; border:2px solid #ca8a04; text-align:center;'>
                    <h3 style='color:#b45309; margin:0 0 10px 0; letter-spacing: 2px;'>
                        a × (b + c) = (a × b) + (a × c)
                    </h3>
                    <h3 style='color:#b45309; margin:0; letter-spacing: 2px;'>
                        a × (b - c) = (a × b) - (a × c)
                    </h3>
                </div>
                <div style='margin-top:15px; font-size:14px;'>
                    <b style='color:#1e3a8a;'>ઉદાહરણ:</b> <br>
                    <span style='color:#ea580c; font-weight:bold;'>-3/4 × { (2/3) + (-5/6) }</span> <br>
                    = [ -3/4 × 2/3 ] + [ -3/4 × (-5/6) ] <br>
                    = [ -1/2 ] + [ 5/8 ] <br>
                    = 1/8
                </div>` 
            }
        ]
    },

      // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 2: એક ચલ સુરેખ સમીકરણ
    // ------------------------------------
    "2": {
        "chapterName": "પ્રકરણ 2",
        "chapterTitle": "એક ચલ સુરેખ સમીકરણ",
        "qa_list": [
            { 
                question: "એક ચલ સુરેખ સમીકરણ એટલે શું? (પરિચય)", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #1e3a8a; border-radius:8px; margin-bottom:15px;'>
                    <ul style='line-height:1.8; color:#1e3a8a;'>
                        <li><b style='color:#ea580c;'>ચલ (Variable):</b> જેની કિંમત ચોક્કસ નથી અને બદલાઈ શકે છે. (દા.ત. x, y, z, a, b...)</li>
                        <li><b style='color:#ea580c;'>સુરેખ (Linear):</b> પદાવલિમાં રહેલા ચલનો મહત્તમ ઘાતાંક <b>1</b> જ હોય. (એટલે કે x², y³ જેવા પદો ન હોય).</li>
                        <li><b style='color:#ea580c;'>સમીકરણ (Equation):</b> બે પદાવલિઓ વચ્ચે ક્ષમતા એટલે કે બરાબર <b>(=)</b> નું ચિહ્ન હોય.</li>
                    </ul>
                    <div style='background-color:#fff; padding:10px; border-radius:5px; margin-top:10px; border:1px dashed #0284c7;'>
                        <b>વ્યાખ્યા:</b> જે સમીકરણમાં માત્ર <b>એક જ ચલ</b> હોય અને તે ચલની <b>મહત્તમ ઘાત 1</b> હોય, તેને એક ચલ સુરેખ સમીકરણ કહે છે.<br>
                        <span style='color:#16a34a; font-weight:bold;'>પ્રમાણિત સ્વરૂપ: ax + b = 0</span> (જ્યાં a અને b વાસ્તવિક સંખ્યાઓ છે અને a ≠ 0).<br>
                        <i>ઉદાહરણ:</i> 2x - 3 = 7,  5y + 2 = 12
                    </div>
                </div>` 
            },
            { 
                question: "સમીકરણ ઉકેલવાના મૂળભૂત નિયમો (બાજુ બદલવાના નિયમો)", 
                answer: `
                <p style='color:#1e3a8a; font-weight:bold;'>જ્યારે કોઈ પદ કે સંખ્યાને બરાબર (=) ની એક બાજુથી બીજી બાજુ લઈ જવામાં આવે, ત્યારે તેનું ચિહ્ન કે ગાણિતિક પ્રક્રિયા બદલાઈ જાય છે.</p>
                <div style='display:flex; flex-wrap:wrap; gap:10px; text-align:center; margin-top:15px;'>
                    <div style='flex:1; min-width:130px; background-color:#fee2e2; padding:15px; border-radius:8px; border:1px solid #ef4444;'>
                        <div style='font-size:20px; font-weight:bold; color:#b91c1c;'>+ ➔ -</div>
                        <p style='margin:5px 0 0 0; font-size:13px;'>સરવાળો ➔ બાદબાકી</p>
                        <p style='margin:5px 0 0 0; font-size:12px; color:#4b5563;'>x + 3 = 5<br>x = 5 <b style='color:#ef4444;'>-</b> 3</p>
                    </div>
                    <div style='flex:1; min-width:130px; background-color:#dcfce7; padding:15px; border-radius:8px; border:1px solid #22c55e;'>
                        <div style='font-size:20px; font-weight:bold; color:#15803d;'>- ➔ +</div>
                        <p style='margin:5px 0 0 0; font-size:13px;'>બાદબાકી ➔ સરવાળો</p>
                        <p style='margin:5px 0 0 0; font-size:12px; color:#4b5563;'>x - 2 = 4<br>x = 4 <b style='color:#16a34a;'>+</b> 2</p>
                    </div>
                    <div style='flex:1; min-width:130px; background-color:#e0f2fe; padding:15px; border-radius:8px; border:1px solid #3b82f6;'>
                        <div style='font-size:20px; font-weight:bold; color:#1d4ed8;'>× ➔ ÷</div>
                        <p style='margin:5px 0 0 0; font-size:13px;'>ગુણાકાર ➔ ભાગાકાર</p>
                        <p style='margin:5px 0 0 0; font-size:12px; color:#4b5563;'>3x = 12<br>x = 12 <b style='color:#2563eb;'>÷</b> 3</p>
                    </div>
                    <div style='flex:1; min-width:130px; background-color:#fef3c7; padding:15px; border-radius:8px; border:1px solid #f59e0b;'>
                        <div style='font-size:20px; font-weight:bold; color:#b45309;'>÷ ➔ ×</div>
                        <p style='margin:5px 0 0 0; font-size:13px;'>ભાગાકાર ➔ ગુણાકાર</p>
                        <p style='margin:5px 0 0 0; font-size:12px; color:#4b5563;'>x/2 = 6<br>x = 6 <b style='color:#d97706;'>×</b> 2</p>
                    </div>
                </div>` 
            },
            { 
                question: "સમીકરણનો ઉકેલ (Step-by-Step ઉદાહરણ)", 
                answer: `
                <div style='background-color:#f8fafc; padding:15px; border-left:4px solid #ea580c; border-radius:5px;'>
                    <h4 style='margin:0 0 10px 0; color:#1e3a8a;'>ઉદાહરણ 1: ઉકેલ શોધો: 2x - 3 = 7</h4>
                    <table style='width:100%; font-size:15px;'>
                        <tr>
                            <td style='padding:5px; font-weight:bold;'>પગલું 1:</td>
                            <td style='padding:5px;'>સૌપ્રથમ -3 ને જમણી બાજુ લઈ જતાં તે +3 થશે.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style='padding:5px; color:#ea580c; font-weight:bold;'>2x = 7 + 3</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style='padding:5px; color:#1e3a8a; font-weight:bold;'>2x = 10</td>
                        </tr>
                        <tr>
                            <td style='padding:5px; font-weight:bold;'>પગલું 2:</td>
                            <td style='padding:5px;'>હવે 2 એ x સાથે ગુણાકારમાં છે, બીજી બાજુ જતાં ભાગાકારમાં જશે.</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style='padding:5px; color:#ea580c; font-weight:bold;'>x = 10 / 2</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td style='padding:5px; color:#16a34a; font-weight:bold;'>x = 5 <span style='font-size:12px; color:#4b5563;'>(આપેલ સમીકરણનો ઉકેલ)</span></td>
                        </tr>
                    </table>
                </div>` 
            },
            { 
                question: "બંને બાજુ ચલ હોય તેવા સમીકરણોનો ઉકેલ", 
                answer: `
                <p>જ્યારે સમીકરણની ડાબી (LHS) અને જમણી (RHS) બંને બાજુ ચલ આપેલા હોય, ત્યારે <b>સમાન ચલવાળા પદોને એક બાજુ</b> અને <b>અચળ સંખ્યાઓને બીજી બાજુ</b> ભેગા કરવા.</p>
                <div style='background-color:#fffbeb; padding:15px; border-radius:10px; border:2px dashed #ca8a04;'>
                    <h4 style='color:#b45309; margin:0 0 10px 0;'>ઉદાહરણ: 3x - 5 = x + 7</h4>
                    <div style='font-size:15px; line-height:1.8; font-family: monospace; font-size: 16px;'>
                        &nbsp;&nbsp;3x - x = 7 + 5 &nbsp;&nbsp;<span style='color:#6b7280; font-size:12px; font-family: sans-serif;'>(x ને ડાબી બાજુ અને -5 ને જમણી બાજુ લાવતાં)</span><br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2x = 12<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x = 12 / 2<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b style='color:#16a34a;'>x = 6</b>
                    </div>
                </div>` 
            },
            { 
                question: "ઉકેલની ચકાસણી (Verification of Solution)", 
                answer: `
                <p>આપણો શોધેલો ઉકેલ સાચો છે કે નહીં તે ચકાસવા માટે, ચલની મળેલી કિંમત સમીકરણની ડાબી બાજુ (LHS) અને જમણી બાજુ (RHS) માં મૂકવી. જો બંનેના જવાબ સમાન આવે, તો ઉકેલ સાચો છે.</p>
                <div style='border:1px solid #cbd5e1; border-radius:8px; overflow:hidden;'>
                    <div style='background-color:#1e3a8a; color:white; padding:10px; font-weight:bold;'>
                        ચકાસણી (ઉપરના ઉદાહરણ x = 6 માટે): 3x - 5 = x + 7
                    </div>
                    <div style='display:flex; padding:10px; background-color:white; gap:10px;'>
                        <div style='flex:1; border-right:1px solid #cbd5e1; padding-right:10px;'>
                            <h4 style='margin:0 0 5px 0; color:#ea580c;'>ડાબી બાજુ (LHS)</h4>
                            = 3x - 5<br>
                            = 3(6) - 5<br>
                            = 18 - 5<br>
                            <b style='color:#16a34a;'>= 13</b>
                        </div>
                        <div style='flex:1; padding-left:10px;'>
                            <h4 style='margin:0 0 5px 0; color:#ea580c;'>જમણી બાજુ (RHS)</h4>
                            = x + 7<br>
                            = 6 + 7<br>
                            <b style='color:#16a34a;'>= 13</b>
                        </div>
                    </div>
                    <div style='background-color:#f0fdf4; padding:10px; text-align:center; font-weight:bold; color:#166534; border-top:1px solid #cbd5e1;'>
                        અહીં LHS = RHS હોવાથી આપણો ઉકેલ સાચો છે!
                    </div>
                </div>` 
            }
        ]
    },
      
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 3: ચતુષ્કોણની સમજ
    // ------------------------------------
    "3": {
        "chapterName": "પ્રકરણ 3",
        "chapterTitle": "ચતુષ્કોણની સમજ",
        "qa_list": [
            { 
                question: "બહુકોણ (Polygon) અને તેના પ્રકારો", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <p style='color:#1e3a8a; margin-top:0;'><b>વ્યાખ્યા:</b> માત્ર રેખાખંડોથી બનતા સાદા બંધ વક્રને બહુકોણ કહે છે. (દા.ત. ત્રિકોણ, ચતુષ્કોણ, પંચકોણ વગેરે)</p>
                    
                    <div style='display:flex; gap:15px; margin-top:15px; overflow-x:auto; padding-bottom:10px;'>
                        <div style='min-width:200px; flex:1; background-color:#fff; padding:10px; border-radius:8px; border:1px solid #cbd5e1; text-align:center;'>
                            <h4 style='color:#16a34a; margin:0 0 10px 0;'>બહિર્મુખ બહુકોણ</h4>
                            <svg width="120" height="100" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="60,10 110,40 90,90 30,90 10,40" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
                            </svg>
                            <p style='font-size:12px; margin:5px 0 0 0; color:#4b5563;'>બધા જ વિકર્ણો અંદરના ભાગમાં હોય અને ખૂણા 180&deg; થી નાના હોય.</p>
                        </div>
                        <div style='min-width:200px; flex:1; background-color:#fff; padding:10px; border-radius:8px; border:1px solid #cbd5e1; text-align:center;'>
                            <h4 style='color:#dc2626; margin:0 0 10px 0;'>અંતર્મુખ બહુકોણ</h4>
                            <svg width="120" height="100" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,10 110,10 60,50 110,90 10,90" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
                            </svg>
                            <p style='font-size:12px; margin:5px 0 0 0; color:#4b5563;'>કોઈ એક વિકર્ણ બહારના ભાગમાં હોય અને કોઈ ખૂણો 180&deg; થી મોટો હોય.</p>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "બહુકોણના ખૂણાઓના માપનો સરવાળો", 
                answer: `
                <div style='overflow-x:auto; margin-bottom:15px;'>
                    <div style='min-width:280px; display:flex; flex-direction:column; gap:10px;'>
                        <div style='background-color:#fff7ed; border:2px solid #ea580c; border-radius:10px; padding:12px;'>
                            <h4 style='color:#c2410c; margin:0 0 5px 0;'>🔸 અંદરના (અંતઃ) ખૂણાઓનો સરવાળો:</h4>
                            <p style='margin:0; font-size:14px;'>જો બહુકોણની બાજુઓની સંખ્યા <b>n</b> હોય, તો:</p>
                            <div style='background-color:white; text-align:center; padding:8px; margin-top:8px; border-radius:5px; font-weight:bold; color:#1e3a8a; font-size:16px;'>
                                સૂત્ર = (n - 2) &times; 180&deg;
                            </div>
                            <p style='margin:5px 0 0 0; font-size:12px; color:#6b7280;'>દા.ત. ચતુષ્કોણ (n=4) માટે: (4-2) &times; 180&deg; = 2 &times; 180&deg; = 360&deg;</p>
                        </div>

                        <div style='background-color:#f8fafc; border:2px solid #3b82f6; border-radius:10px; padding:12px;'>
                            <h4 style='color:#1d4ed8; margin:0 0 5px 0;'>🔹 બહારના (બહિષ્કોણ) ખૂણાઓનો સરવાળો:</h4>
                            <p style='margin:0; font-size:14px;'>કોઈપણ બહુકોણના બહારના ખૂણાઓના માપનો સરવાળો હંમેશા નિશ્ચિત જ હોય છે:</p>
                            <div style='background-color:white; text-align:center; padding:8px; margin-top:8px; border-radius:5px; font-weight:bold; color:#ea580c; font-size:16px;'>
                                બહિષ્કોણોનો સરવાળો = 360&deg;
                            </div>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "સમાંતરબાજુ ચતુષ્કોણ (Parallelogram) - આકૃતિ અને વ્યાખ્યા", 
                answer: `
                <p><b>વ્યાખ્યા:</b> જે ચતુષ્કોણની સામસામેની બાજુઓની બંને જોડ સમાંતર હોય, તેને સમાંતરબાજુ ચતુષ્કોણ કહે છે.</p>
                <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                    <div style='min-width:300px; background-color:#eff6ff; padding:15px; border-radius:10px; border:1px solid #93c5fd; display:inline-block;'>
                        <svg width="260" height="140" viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg">
                            <!-- Parallelogram Shape -->
                            <polygon points="60,20 240,20 200,120 20,120" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5" stroke-linejoin="round"/>
                            
                            <!-- Diagonals -->
                            <line x1="60" y1="20" x2="200" y2="120" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,5"/>
                            <line x1="240" y1="20" x2="20" y2="120" stroke="#3b82f6" stroke-width="1.5" stroke-dasharray="5,5"/>
                            
                            <!-- Point O (Intersection) -->
                            <circle cx="130" cy="70" r="3" fill="#dc2626"/>
                            <text x="135" y="65" fill="#dc2626" font-weight="bold" font-size="14">O</text>

                            <!-- Labels -->
                            <text x="50" y="15" fill="#1e3a8a" font-weight="bold" font-size="16">A</text>
                            <text x="245" y="15" fill="#1e3a8a" font-weight="bold" font-size="16">B</text>
                            <text x="205" y="135" fill="#1e3a8a" font-weight="bold" font-size="16">C</text>
                            <text x="5" y="135" fill="#1e3a8a" font-weight="bold" font-size="16">D</text>
                            
                            <!-- Parallel Arrows -->
                            <!-- Top/Bottom -->
                            <polygon points="145,15 155,20 145,25" fill="#2563eb"/>
                            <polygon points="105,115 115,120 105,125" fill="#2563eb"/>
                            <!-- Left/Right -->
                            <polygon points="35,65 43,73 31,73" fill="#2563eb" transform="rotate(-20 37 70)"/>
                            <polygon points="215,65 223,73 211,73" fill="#2563eb" transform="rotate(-20 217 70)"/>
                        </svg>
                        <p style='margin:10px 0 0 0; color:#1e40af; font-size:14px; font-weight:bold;'>ચતુષ્કોણ ABCD સમાંતરબાજુ ચતુષ્કોણ છે.</p>
                        <p style='margin:0; font-size:12px; color:#4b5563;'>(અહીં AB || DC અને AD || BC છે)</p>
                    </div>
                </div>` 
            },
            { 
                question: "સમાંતરબાજુ ચતુષ્કોણના અગત્યના ગુણધર્મો", 
                answer: `
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:320px;'>
                        <ul style='list-style-type:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px;'>
                            <li style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:12px; border-radius:0 8px 8px 0; box-shadow:0 1px 3px rgba(0,0,0,0.1);'>
                                <h4 style='margin:0 0 5px 0; color:#166534;'>૧. સામસામેની બાજુઓ (Opposite Sides)</h4>
                                <p style='margin:0; font-size:14px; color:#374151;'>સામસામેની બાજુઓની લંબાઈ <b>સમાન</b> હોય છે. <br><span style='color:#16a34a; font-weight:bold;'>(AB = DC અને AD = BC)</span></p>
                            </li>
                            <li style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:12px; border-radius:0 8px 8px 0; box-shadow:0 1px 3px rgba(0,0,0,0.1);'>
                                <h4 style='margin:0 0 5px 0; color:#9a3412;'>૨. સામસામેના ખૂણાઓ (Opposite Angles)</h4>
                                <p style='margin:0; font-size:14px; color:#374151;'>સામસામેના ખૂણાઓનાં માપ <b>સમાન</b> હોય છે. <br><span style='color:#ea580c; font-weight:bold;'>(∠A = ∠C અને ∠B = ∠D)</span></p>
                            </li>
                            <li style='background-color:#eff6ff; border-left:4px solid #2563eb; padding:12px; border-radius:0 8px 8px 0; box-shadow:0 1px 3px rgba(0,0,0,0.1);'>
                                <h4 style='margin:0 0 5px 0; color:#1e40af;'>૩. પાસપાસેના ખૂણાઓ (Adjacent Angles)</h4>
                                <p style='margin:0; font-size:14px; color:#374151;'>પાસપાસેના કોઈપણ બે ખૂણાઓ <b>પૂરક</b> હોય છે (એટલે કે તેમનો સરવાળો 180&deg; થાય છે). <br><span style='color:#2563eb; font-weight:bold;'>(દા.ત. ∠A + ∠B = 180&deg;)</span></p>
                            </li>
                            <li style='background-color:#fdf2f8; border-left:4px solid #db2777; padding:12px; border-radius:0 8px 8px 0; box-shadow:0 1px 3px rgba(0,0,0,0.1);'>
                                <h4 style='margin:0 0 5px 0; color:#9d174d;'>૪. વિકર્ણો (Diagonals)</h4>
                                <p style='margin:0; font-size:14px; color:#374151;'>તેના બંને વિકર્ણો એકબીજાને <b>દુભાગે છે</b>. (એટલે કે છેદબિંદુ આગળ બંનેના બે સરખા ભાગ થાય છે). <br><span style='color:#db2777; font-weight:bold;'>(OA = OC અને OB = OD)</span></p>
                            </li>
                        </ul>
                    </div>
                </div>` 
            },
            { 
                question: "વિશિષ્ટ સમાંતરબાજુ ચતુષ્કોણો (સમબાજુ, લંબચોરસ અને ચોરસ)", 
                answer: `
                <p>આ ત્રણેય ચતુષ્કોણો એ સમાંતરબાજુ ચતુષ્કોણ જ છે, પણ તેમાં કેટલાક વધારાના વિશિષ્ટ ગુણધર્મો હોય છે:</p>
                <div style='overflow-x:auto;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:500px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:10px; border:1px solid #cbd5e1; white-space:nowrap;'>આકાર / નામ</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>વ્યાખ્યા</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>વિકર્ણોના વિશિષ્ટ ગુણધર્મો</th>
                        </tr>
                        <tr style='background-color:#f0fdf4;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#166534; text-align:center;'>
                                <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="30,5 55,30 30,55 5,30" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
                                </svg><br>સમબાજુ ચતુષ્કોણ<br>(Rhombus)
                            </td>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-size:14px;'>સમાંતરબાજુ ચતુષ્કોણ કે જેની <b>બધી જ બાજુઓ સમાન</b> હોય.</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-size:14px; color:#ea580c;'>વિકર્ણો એકબીજાને <b>કાટખૂણે (90&deg;) દુભાગે</b> છે.</td>
                        </tr>
                        <tr style='background-color:#eff6ff;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e40af; text-align:center;'>
                                <svg width="70" height="50" viewBox="0 0 70 50" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="5" width="60" height="40" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
                                </svg><br>લંબચોરસ<br>(Rectangle)
                            </td>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-size:14px;'>સમાંતરબાજુ ચતુષ્કોણ કે જેના <b>બધા જ ખૂણા કાટખૂણા (90&deg;)</b> હોય.</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-size:14px; color:#ea580c;'>બંને વિકર્ણોની <b>લંબાઈ સમાન</b> હોય છે અને દુભાગે છે.</td>
                        </tr>
                        <tr style='background-color:#fffbeb;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309; text-align:center;'>
                                <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="5" width="40" height="40" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
                                </svg><br>ચોરસ<br>(Square)
                            </td>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-size:14px;'>એવો લંબચોરસ જેની <b>બધી જ બાજુઓ સમાન</b> હોય.</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-size:14px; color:#ea580c;'>વિકર્ણો <b>સમાન લંબાઈના</b> હોય અને એકબીજાને <b>કાટખૂણે દુભાગે</b> છે.</td>
                        </tr>
                    </table>
                </div>` 
            }
        ]
    },
      
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 4: માહિતીનું નિયમન
    // ------------------------------------
    "4": {
        "chapterName": "પ્રકરણ 4",
        "chapterTitle": "માહિતીનું નિયમન",
        "qa_list": [
            { 
                question: "માહિતી અને તેનું એકત્રીકરણ (Introduction to Data)", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <ul style='line-height:1.8; color:#1e3a8a; margin:0;'>
                        <li><b>માહિતી (Data):</b> રોજિંદા જીવનમાં એકત્રિત કરવામાં આવતા અંકો કે હકીકતોને માહિતી કહે છે.</li>
                        <li><b>કાચી માહિતી (Raw Data):</b> જ્યારે માહિતી સૌપ્રથમ એકત્રિત કરવામાં આવે અને તેને કોઈ ચોક્કસ ક્રમમાં ગોઠવી ન હોય, ત્યારે તેને કાચી માહિતી કહે છે.</li>
                    </ul>
                </div>` 
            },
            { 
                question: "માહિતીની ગોઠવણી - આવૃત્તિ વિતરણ કોષ્ટક (Tally Marks)", 
                answer: `
                <p>કાચી માહિતીને સમજવા માટે તેને યોગ્ય રીતે ગોઠવવી પડે છે. આ માટે <b>આવૃત્તિ ચિહ્નો (Tally Marks)</b> નો ઉપયોગ કરીને કોષ્ટક બનાવવામાં આવે છે.</p>
                
                <div style='overflow-x:auto; margin-top:10px;'>
                    <div style='min-width:280px; display:flex; gap:10px; background-color:#fff7ed; padding:10px; border-radius:10px; border:1px solid #ea580c;'>
                        <!-- Tally Mark Explanation SVG -->
                        <div style='flex:1; text-align:center;'>
                            <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
                                <line x1="20" y1="10" x2="20" y2="50" stroke="#ea580c" stroke-width="3"/>
                                <line x1="30" y1="10" x2="30" y2="50" stroke="#ea580c" stroke-width="3"/>
                                <line x1="40" y1="10" x2="40" y2="50" stroke="#ea580c" stroke-width="3"/>
                                <line x1="50" y1="10" x2="50" y2="50" stroke="#ea580c" stroke-width="3"/>
                                <line x1="15" y1="45" x2="55" y2="15" stroke="#ea580c" stroke-width="3"/>
                                <text x="70" y="35" fill="#c2410c" font-weight="bold" font-size="20">=</text>
                                <text x="85" y="38" fill="#1e3a8a" font-weight="bold" font-size="24">5</text>
                            </svg>
                            <p style='font-size:12px; margin:0; color:#ea580c;'>જૂથનું ચિહ્ન</p>
                        </div>
                        <div style='flex:2; font-size:14px; color:#1e3a8a; line-height:1.5;'>
                            ૧ માટે <b>|</b> , ૨ માટે <b>||</b>, ૩ માટે <b>|||</b>, ૪ માટે <b>||||</b><br>
                            અને ૫ માટે ચાર ઊભી લીટી પર એક ત્રાસી લીટી <b>(||||)</b> કરવામાં આવે છે.
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "ચિત્ર આલેખ અને લખાલેખ (Pictograph & Bar Graph)", 
                answer: `
                <p>માહિતીને આકર્ષક રીતે રજૂ કરવા માટે વિવિધ આલેખ વપરાય છે:</p>
                <div style='display:flex; flex-direction:column; gap:10px; overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:320px; background-color:#f0fdf4; border:1px solid #16a34a; border-radius:8px; padding:10px;'>
                        <h4 style='color:#166534; margin:0 0 5px 0;'>૧. ચિત્ર આલેખ (Pictograph):</h4>
                        <p style='font-size:13px; margin:0 0 10px 0;'>માહિતીને સંકેતો કે ચિત્રો દ્વારા રજૂ કરવામાં આવે છે.</p>
                        <!-- Pictograph Example SVG -->
                        <div style='text-align:center;'>
                            <svg width="250" height="70" viewBox="0 0 250 70" xmlns="http://www.w3.org/2000/svg">
                                <text x="10" y="20" font-size="12" fill="#1e3a8a">સોમ:</text>
                                <circle cx="60" cy="15" r="8" fill="#f59e0b"/>
                                <circle cx="85" cy="15" r="8" fill="#f59e0b"/>
                                <circle cx="110" cy="15" r="8" fill="#f59e0b"/>
                                
                                <text x="10" y="50" font-size="12" fill="#1e3a8a">મંગળ:</text>
                                <circle cx="60" cy="45" r="8" fill="#f59e0b"/>
                                <circle cx="85" cy="45" r="8" fill="#f59e0b"/>
                                
                                <rect x="160" y="5" width="80" height="60" rx="5" fill="white" stroke="#6b7280"/>
                                <text x="165" y="20" font-size="11" fill="#4b5563">પ્રમાણમાપ:</text>
                                <circle cx="175" cy="40" r="10" fill="#f59e0b"/>
                                <text x="195" y="45" font-size="12" fill="#1e3a8a">= ૧૦ ફળ</text>
                            </svg>
                        </div>
                    </div>
                    
                    <div style='min-width:320px; background-color:#eff6ff; border:1px solid #2563eb; border-radius:8px; padding:10px;'>
                        <h4 style='color:#1e40af; margin:0 0 5px 0;'>૨. લખાલેખ (Bar Graph):</h4>
                        <p style='font-size:13px; margin:0 0 10px 0;'>સમાન પહોળાઈના સ્તંભો દ્વારા માહિતીની રજૂઆત. સ્તંભની ઊંચાઈ આવૃત્તિ દર્શાવે છે.</p>
                        <!-- Bar Graph Example SVG -->
                        <div style='text-align:center;'>
                            <svg width="220" height="120" viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
                                <!-- Axes -->
                                <line x1="30" y1="10" x2="30" y2="100" stroke="#1e3a8a" stroke-width="2"/>
                                <line x1="30" y1="100" x2="200" y2="100" stroke="#1e3a8a" stroke-width="2"/>
                                <!-- Bars -->
                                <rect x="50" y="40" width="25" height="60" fill="#60a5fa"/>
                                <rect x="90" y="20" width="25" height="80" fill="#2563eb"/>
                                <rect x="130" y="60" width="25" height="40" fill="#60a5fa"/>
                                <rect x="170" y="30" width="25" height="70" fill="#2563eb"/>
                                <!-- Labels (Simplified) -->
                                <text x="20" y="105" font-size="10" fill="#1e3a8a">0</text>
                                <text x="100" y="115" font-size="10" fill="#1e3a8a">વિષય</text>
                                <text x="10" y="60" font-size="10" fill="#1e3a8a" transform="rotate(-90 10 60)">ગુણ</text>
                            </svg>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "દ્વિ-લખાલેખ (Double Bar Graph)", 
                answer: `
                <p>જ્યારે માહિતીની બે અલગ અલગ જૂથો (દા.ત. બે અલગ અલગ વર્ષના પરિણામ) ની તુલના કરવાની હોય, ત્યારે <b>દ્વિ-લખાલેખ</b> નો ઉપયોગ થાય છે.</p>
                <div style='text-align:center; margin: 15px 0; border:1px solid #ca8a04; background-color:#fffbeb; border-radius:10px; padding:10px; overflow-x:auto;'>
                    <div style='min-width:300px;'>
                        <h4 style='color:#b45309; margin:0 0 5px 0;'>તુલનાત્મક દ્વિ-લખાલેખ</h4>
                        <svg width="280" height="150" viewBox="0 0 280 150" xmlns="http://www.w3.org/2000/svg">
                            <!-- Axes -->
                            <line x1="40" y1="20" x2="40" y2="120" stroke="#1e3a8a" stroke-width="2"/>
                            <line x1="40" y1="120" x2="260" y2="120" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <!-- Groups of Bars -->
                            <!-- Q1 -->
                            <rect x="60" y="50" width="20" height="70" fill="#fbbf24"/> <!-- Year 1 -->
                            <rect x="80" y="30" width="20" height="90" fill="#b45309"/> <!-- Year 2 -->
                            
                            <!-- Q2 -->
                            <rect x="130" y="70" width="20" height="50" fill="#fbbf24"/>
                            <rect x="150" y="60" width="20" height="60" fill="#b45309"/>
                            
                            <!-- Q3 -->
                            <rect x="200" y="40" width="20" height="80" fill="#fbbf24"/>
                            <rect x="220" y="20" width="20" height="100" fill="#b45309"/>
                            
                            <!-- Legend -->
                            <rect x="180" y="125" width="12" height="12" fill="#fbbf24"/>
                            <text x="195" y="135" font-size="10" fill="#1e3a8a">2022</text>
                            <rect x="230" y="125" width="12" height="12" fill="#b45309"/>
                            <text x="245" y="135" font-size="10" fill="#1e3a8a">2023</text>
                            
                            <text x="75" y="135" font-size="11" fill="#1e3a8a">ગણિત</text>
                            <text x="145" y="135" font-size="11" fill="#1e3a8a">વિજ્ઞાન</text>
                            <text x="215" y="135" font-size="11" fill="#1e3a8a">અંગ્રેજી</text>
                        </svg>
                    </div>
                </div>` 
            },
            { 
                question: "માહિતીનું વર્ગીકરણ - વર્ગ અને વર્ગલંબાઈ", 
                answer: `
                <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#881337;'>જ્યારે માહિતી ખૂબ મોટી હોય, ત્યારે તેને જૂથમાં વહેંચવામાં આવે છે. આ જૂથોને <b>'વર્ગ' (Class Interval)</b> કહે છે.</p>
                    <p style='margin:0; font-size:14px; color:#1e3a8a;'>દા.ત. 0-10, 10-20, 20-30 ...</p>
                    <ul style='font-size:14px; color:#1e3a8a; margin-top:10px; line-height:1.6;'>
                        <li><b>અધઃ સીમા: </b> વર્ગની નાની સંખ્યા (દા.ત. 10-20 માં 10).</li>
                        <li><b>ઉર્ધ્વ સીમા: </b> વર્ગની મોટી સંખ્યા (દા.ત. 10-20 માં 20).</li>
                        <li><b>વર્ગલંબાઈ: </b> ઉર્ધ્વ સીમા અને અધઃ સીમા વચ્ચેનો તફાવત. (અહીં 20 - 10 = 10).</li>
                    </ul>
                </div>` 
            },
            { 
                question: "સ્તંભાલેખ (Histogram)", 
                answer: `
                <p>જ્યારે માહિતી વર્ગીકૃત (વર્ગોમાં) હોય, ત્યારે તેને <b>સ્તંભાલેખ</b> દ્વારા દર્શાવાય છે. અહીં સ્તંભો વચ્ચે <b>જગ્યા હોતી નથી</b>, કારણ કે વર્ગો સતત હોય છે.</p>
                <div style='text-align:center; margin: 15px 0; border:1px solid #16a34a; background-color:#f0fdf4; border-radius:10px; padding:10px; overflow-x:auto;'>
                    <div style='min-width:280px;'>
                        <svg width="260" height="140" viewBox="0 0 260 140" xmlns="http://www.w3.org/2000/svg">
                            <!-- Axes -->
                            <line x1="40" y1="20" x2="40" y2="110" stroke="#16a34a" stroke-width="2"/>
                            <line x1="40" y1="110" x2="240" y2="110" stroke="#16a34a" stroke-width="2"/>
                            
                            <!-- Histogram Bars (No space) -->
                            <rect x="40" y="70" width="40" height="40" fill="#a7f3d0" stroke="#16a34a"/>
                            <rect x="80" y="30" width="40" height="80" fill="#10b981" stroke="#16a34a"/>
                            <rect x="120" y="50" width="40" height="60" fill="#a7f3d0" stroke="#16a34a"/>
                            <rect x="160" y="80" width="40" height="30" fill="#10b981" stroke="#16a34a"/>
                            <rect x="200" y="60" width="40" height="50" fill="#a7f3d0" stroke="#16a34a"/>
                            
                            <!-- Labels -->
                            <text x="35" y="125" font-size="10" fill="#166534">0</text>
                            <text x="75" y="125" font-size="10" fill="#166534">10</text>
                            <text x="115" y="125" font-size="10" fill="#166534">20</text>
                            <text x="155" y="125" font-size="10" fill="#166534">30</text>
                            <text x="195" y="125" font-size="10" fill="#166534">40</text>
                            <text x="235" y="125" font-size="10" fill="#166534">50</text>
                        </svg>
                        <p style='margin:5px 0 0 0; color:#166534; font-size:12px;'>સ્તંભો વચ્ચે જગ્યા હોતી નથી.</p>
                    </div>
                </div>` 
            },
            { 
                question: "વર્તુળ આલેખ અથવા પાઈ-ચાર્ટ (Pie Chart)", 
                answer: `
                <p>જ્યારે માહિતીને <b>સમગ્ર (Total) ના ભાગ તરીકે</b> દર્શાવવાની હોય, ત્યારે <b>વર્તુળ આલેખ (પાઈ-ચાર્ટ)</b> વપરાય છે.</p>
                
                <div style='display:flex; gap:15px; margin-top:15px; overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:260px; flex:1; background-color:#fdf2f8; padding:15px; border-radius:10px; border:1px solid #db2777;'>
                        <h4 style='color:#9d174d; margin:0 0 10px 0;'>વૃત્તાંશ કોણ શોધવાનું સૂત્ર:</h4>
                        <div style='background-color:white; text-align:center; padding:10px; border-radius:8px; border:2px dashed #db2777;'>
                            <img src="https://latex.codecogs.com/svg.image?\dpi{120}&space;\text{કેન્દ્ર&space;આગળનો&space;કોણ}=\frac{\text{ઘટક&space;કિંમત}}{\text{કુલ&space;કિંમત}}\times&space;360^\circ" title="\text{કેન્દ્ર આગળનો કોણ}=\frac{\text{ઘટક કિંમત}}{\text{કુલ કિંમત}}\times 360^\circ" />
                        </div>
                    </div>
                    
                    <div style='min-width:240px; flex:1; background-color:#eff6ff; padding:10px; border-radius:10px; border:1px solid #2563eb; text-align:center;'>
                        <h4 style='color:#1e40af; margin:0 0 5px 0;'>પાઈ-ચાર્ટનું ઉદાહરણ</h4>
                        <svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
                            <!-- Pie Segments (Simulated) -->
                            <!-- Blue: 50% (180 deg) -->
                            <path d="M 75,75 L 75,10 A 65,65 0 0,1 75,140 Z" fill="#60a5fa" stroke="white" stroke-width="2"/>
                            <!-- Orange: 25% (90 deg) -->
                            <path d="M 75,75 L 75,140 A 65,65 0 0,1 10,75 Z" fill="#fbbf24" stroke="white" stroke-width="2"/>
                            <!-- Pink: 25% (90 deg) -->
                            <path d="M 75,75 L 10,75 A 65,65 0 0,1 75,10 Z" fill="#f472b6" stroke="white" stroke-width="2"/>
                            
                            <!-- Labels -->
                            <text x="95" y="75" font-size="12" fill="#1e3a8a" font-weight="bold">50%</text>
                            <text x="40" y="110" font-size="10" fill="#b45309">25%</text>
                            <text x="40" y="50" font-size="10" fill="#9d174d">25%</text>
                        </svg>
                    </div>
                </div>` 
            },
            { 
                question: "તક અને સંભાવના (Chance and Probability)", 
                answer: `
                <p>કોઈ ઘટના બનશે કે નહીં તેની ચોકસાઈના ગાણિતિક માપને <b>સંભાવના</b> કહે છે.</p>
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; margin-bottom:15px;'>
                    <b style='color:#166534;'>૧. પ્રયોગના પરિણામો:</b> દા.ત. સિક્કાને ઉછાળતા <b>છાપ (H)</b> અથવા <b>કાંટો (T)</b> એમ બે પરિણામ મળે. પાસાને ફેંકતા <b>1, 2, 3, 4, 5, 6</b> એમ કુલ છ પરિણામ મળે.<br><br>
                    <b style='color:#166534;'>૨. સમસંભાવી પરિણામો:</b> જો પ્રયોગના દરેક પરિણામ મળવાની તક સમાન હોય, તો તેને સમસંભાવી પરિણામો કહે છે. (દા.ત. સિક્કો ઉછાળવો).
                </div>
                <div style='background-color:#eff6ff; padding:15px; border:2px solid #2563eb; border-radius:10px;'>
                    <h4 style='color:#1e40af; margin:0 0 10px 0;'>ઘટના E ની સંભાવના P(E) શોધવાનું સૂત્ર:</h4>
                    <div style='background-color:white; text-align:center; padding:10px; border-radius:8px;'>
                        <img src="https://latex.codecogs.com/svg.image?\dpi{130}&space;P(E)=\frac{\text{ઘટના&space;બનવા&space;માટેના&space;પરિણામોની&space;સંખ્યા}}{\text{પ્રયોગના&space;કુલ&space;પરિણામોની&space;સંખ્યા}}" title="P(E)=\frac{\text{ઘટના બનવા માટેના પરિણામોની સંખ્યા}}{\text{પ્રયોગના કુલ પરિણામોની સંખ્યા}}" />
                    </div>
                    <p style='margin:10px 0 0 0; font-size:13px; color:#1e3a8a;'><i>દા.ત. સિક્કો ઉછાળતા 'છાપ' મળવાની સંભાવના = 1/2.</i></p>
                </div>` 
            }
        ]
    },
      
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 5: વર્ગ અને વર્ગમૂળ
    // ------------------------------------
    "5": {
        "chapterName": "પ્રકરણ 5",
        "chapterTitle": "વર્ગ અને વર્ગમૂળ",
        "qa_list": [
            { 
                question: "વર્ગ (Square) અને પૂર્ણવર્ગ સંખ્યાની સમજ", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <p style='color:#1e3a8a; margin-top:0;'><b>વર્ગ:</b> જ્યારે કોઈ સંખ્યાને તે જ સંખ્યા વડે ગુણવામાં આવે, ત્યારે મળતા ગુણનફળને તે સંખ્યાનો <b>વર્ગ</b> કહે છે.</p>
                    <p style='margin:0; font-size:14px; color:#ea580c; font-weight:bold;'>જો સંખ્યા x હોય, તો તેનો વર્ગ x &times; x = x&sup2; લખાય.</p>
                </div>
                
                <div style='text-align:center; margin: 15px 0;'>
                    <svg width="200" height="100" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                        <!-- 3 squared visualization -->
                        <rect x="10" y="10" width="80" height="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
                        <line x1="36.6" y1="10" x2="36.6" y2="90" stroke="#2563eb" stroke-width="1"/>
                        <line x1="63.3" y1="10" x2="63.3" y2="90" stroke="#2563eb" stroke-width="1"/>
                        <line x1="10" y1="36.6" x2="90" y2="36.6" stroke="#2563eb" stroke-width="1"/>
                        <line x1="10" y1="63.3" x2="90" y2="63.3" stroke="#2563eb" stroke-width="1"/>
                        
                        <text x="50" y="100" text-anchor="middle" font-size="12" fill="#1e3a8a">3 &times; 3 = 3&sup2; = 9</text>
                        
                        <text x="110" y="55" font-size="24" fill="#6b7280">&#10142;</text>
                        
                        <text x="150" y="55" text-anchor="middle" font-size="16" fill="#1e3a8a" font-weight="bold">9 એ પૂર્ણવર્ગ<br>સંખ્યા છે.</text>
                    </svg>
                </div>
                <p><b>પૂર્ણવર્ગ સંખ્યા:</b> જે પ્રાકૃતિક સંખ્યા કોઈક પ્રાકૃતિક સંખ્યાના વર્ગ તરીકે દર્શાવી શકાય, તેને પૂર્ણવર્ગ સંખ્યા કહે છે. (દા.ત. 1, 4, 9, 16, 25, ...)</p>` 
            },
            { 
                question: "વર્ગ સંખ્યાઓના ગુણધર્મો (Properties)", 
                answer: `
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:320px; display:flex; flex-direction:column; gap:10px;'>
                        <div style='background-color:#fee2e2; border:1px solid #ef4444; border-radius:8px; padding:12px;'>
                            <h4 style='color:#b91c1c; margin:0 0 5px 0;'>૧. એકમનો અંક:</h4>
                            <p style='margin:0; font-size:14px; color:#1f2937;'>જે સંખ્યાનો એકમનો અંક <b>2, 3, 7 કે 8</b> હોય, તે સંખ્યા ક્યારેય પૂર્ણવર્ગ હોઈ શકે નહીં.</p>
                            <p style='margin:5px 0 0 0; font-size:14px; color:#1e3a8a; font-weight:bold;'>પૂર્ણવર્ગ સંખ્યાનો એકમનો અંક હંમેશા 0, 1, 4, 5, 6 કે 9 જ હોય.</p>
                        </div>

                        <div style='background-color:#fff7ed; border:1px solid #f97316; border-radius:8px; padding:12px;'>
                            <h4 style='color:#c2410c; margin:0 0 5px 0;'>૨. શૂન્યોની સંખ્યા:</h4>
                            <p style='margin:0; font-size:14px; color:#1f2937;'>જો સંખ્યાના અંતે <b>એકી સંખ્યામાં</b> (દા.ત. 1, 3, 5) શૂન્યો હોય, તો તે પૂર્ણવર્ગ નથી.</p>
                            <p style='margin:5px 0 0 0; font-size:14px; color:#1e3a8a; font-weight:bold;'>પૂર્ણવર્ગ સંખ્યાના અંતે હંમેશા બેકી સંખ્યામાં જ શૂન્યો હોય છે.</p>
                        </div>
                        
                        <div style='background-color:#f0fdf4; border:1px solid #16a34a; border-radius:8px; padding:12px;'>
                            <h4 style='color:#166534; margin:0 0 5px 0;'>૩. એકી-બેકી સંખ્યાનો વર્ગ:</h4>
                            <ul style='margin:0; font-size:14px; color:#1f2937; padding-left:20px;'>
                                <li>બેકી સંખ્યાનો વર્ગ હંમેશા <b>બેકી</b> જ હોય. (દા.ત. 4&sup2; = 16)</li>
                                <li>એકી સંખ્યાનો વર્ગ હંમેશા <b>એકી</b> જ હોય. (દા.ત. 5&sup2; = 25)</li>
                            </ul>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "વર્ગ શોધવા માટેની અન્ય રસપ્રદ તરાહો (Patterns)", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <div style='border:1px solid #ca8a04; background-color:#fffbeb; padding:10px; border-radius:8px;'>
                        <h4 style='color:#b45309; margin:0 0 5px 0;'>અનુક્રમિક એકી સંખ્યાઓનો સરવાળો:</h4>
                        <p style='margin:0; font-size:14px;'>પ્રથમ n એકી પ્રાકૃતિક સંખ્યાઓનો સરવાળો <b>n&sup2;</b> થાય છે.</p>
                        <div style='font-family:monospace; font-size:15px; color:#1e3a8a; margin-top:5px; font-weight:bold;'>
                            1 = 1 = 1&sup2;<br>
                            1 + 3 = 4 = 2&sup2;<br>
                            1 + 3 + 5 = 9 = 3&sup2;
                        </div>
                    </div>
                    
                    <div style='border:1px solid #0284c7; background-color:#f0f9ff; padding:10px; border-radius:8px;'>
                        <h4 style='color:#0369a1; margin:0 0 5px 0;'>પાયથાગોરિયન ત્રિપુટી (Pythagorean Triplets):</h4>
                        <p style='margin:0; font-size:14px;'>ત્રણ સંખ્યાઓનો એવો સમૂહ કે જેમાં બે નાની સંખ્યાઓના વર્ગોનો સરવાળો સૌથી મોટી સંખ્યાના વર્ગ બરાબર થાય.</p>
                        <p style='margin:5px 0 0 0; color:#ea580c; font-weight:bold; text-align:center; font-size:16px;'>a&sup2; + b&sup2; = c&sup2;</p>
                        <p style='margin:5px 0 0 0; font-size:13px;'><i>દા.ત. (3, 4, 5) કારણ કે 3&sup2; + 4&sup2; = 9 + 16 = 25 = 5&sup2;</i></p>
                        <p style='margin:5px 0 0 0; font-size:12px; color:#4b5563;'>કોઈપણ વ્યાપક સ્વરૂપ: (2m, m&sup2;-1, m&sup2;+1) જ્યાં m > 1.</p>
                    </div>
                </div>` 
            },
            { 
                question: "વર્ગમૂળ (Square Root) નો પરિચય અને સંકેત", 
                answer: `
                <div style='background-color:#fdf2f8; padding:15px; border-radius:10px; border:1px solid #db2777; overflow-x:auto;'>
                    <div style='min-width:280px; display:flex; align-items:center; gap:15px;'>
                        <div style='flex:1;'>
                            <p style='margin:0; color:#9d174d;'><b>વ્યાખ્યા:</b> વર્ગમૂળ એ વર્ગ કરવાની વિરોધી પ્રક્રિયા છે.</p>
                            <p style='margin:8px 0 0 0; font-size:14px;'>જો 3&sup2; = 9 હોય, તો 9 નું વર્ગમૂળ 3 છે.</p>
                        </div>
                        <div style='text-align:center; padding:10px; background-color:white; border-radius:8px; border:2px dashed #db2777;'>
                            <span style='font-size:12px; color:#6b7280;'>સંકેત</span><br>
                            <span style='font-size:30px; color:#db2777; font-weight:bold;'>&radic;</span><br>
                            <span style='font-size:14px; color:#1e3a8a; font-weight:bold;'>&radic;9 = 3</span>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "વર્ગમૂળ શોધવાની રીતો - ૧: અવિભાજ્ય અવયવીકરણની રીત", 
                answer: `
                <p>આ રીતમાં સંખ્યાના અવિભાજ્ય અવયવો પાડીને બબ્બેની જોડી બનાવવામાં આવે છે.</p>
                <div style='background-color:#f0fdf4; padding:12px; border-radius:8px; border:1px solid #16a34a; overflow-x:auto;'>
                    <div style='min-width:280px;'>
                        <b style='color:#166534;'>દાખલો: &radic;324 શોધો.</b>
                        <div style='display:flex; gap:20px; margin-top:10px; align-items:center;'>
                            <div style='font-family:monospace; font-size:14px; border-right:1px solid #cbd5e1; padding-right:15px;'>
                                2 | 324<br>
                                2 | 162<br>
                                3 | 81<br>
                                3 | 27<br>
                                3 | 9<br>
                                3 | 3<br>
                                &nbsp;&nbsp;| 1
                            </div>
                            <div style='font-size:14px; line-height:1.6;'>
                                324 = <u style='color:#ea580c;'>2 &times; 2</u> &times; <u style='color:#ea580c;'>3 &times; 3</u> &times; <u style='color:#ea580c;'>3 &times; 3</u><br>
                                324 = 2&sup2; &times; 3&sup2; &times; 3&sup2;<br>
                                &radic;324 = 2 &times; 3 &times; 3<br>
                                <b style='color:#16a34a; font-size:16px;'>&radic;324 = 18</b>
                            </div>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "વર્ગમૂળ શોધવાની રીતો - ૨: ભાગાકારની રીત (Long Division Method)", 
                answer: `
                <p>જ્યારે સંખ્યા ખૂબ મોટી હોય, ત્યારે ભાગાકારની રીત સૌથી ઝડપી છે. મોબાઈલમાં જમણી બાજુ સ્ક્રોલ કરીને પગલાં જુઓ.</p>
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:450px; background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px; display:flex; gap:15px;'>
                        <!-- Division Visual -->
                        <div style='flex:1; font-family:monospace; font-size:16px; border:1px solid #60a5fa; background-color:white; padding:10px; border-radius:5px;'>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u style='color:#2563eb;'>&nbsp;2&nbsp;&nbsp;3&nbsp;</u>&nbsp;➔ જજવાબ (&radic;)<br>
                            &nbsp;&nbsp;2 | <span style='background-color:#bfdbfe;'>5</span> <span style='background-color:#fed7aa;'>29</span><br>
                            + 2 | -4<br>
                            --- | ----<br>
                            &nbsp;4<span style='color:#dc2626;'>3</span> | &nbsp;1 <span style='background-color:#fed7aa;'>29</span><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;| -1 29&nbsp;&nbsp;➔ (43 &times; <span style='color:#dc2626;'>3</span>)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;| -------<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;0<br>
                            <b style='color:#16a34a;'>&radic;529 = 23</b>
                        </div>
                        <!-- Steps Description -->
                        <div style='flex:1; font-size:13px; color:#1e3a8a; line-height:1.6;'>
                            <b style='color:#ea580c;'>પગલાં:</b><br>
                            ૧. જમણી બાજુથી બબ્બે અંકોની જોડી (બાર - bar) બનાવો.<br>
                            ૨. સૌથી ડાબી બાજુની જોડી (અહીં 5) માટે એવી સંખ્યા શોધો જેનો વર્ગ તેનાથી નાનો કે સમાન હોય (2&sup2;=4).<br>
                            ૩. બાદબાકી કરો (5-4=1) અને પછીની જોડી (29) નીચે લાવો.<br>
                            ૪. ભાજક (2) ને બમણો કરો (4). હવે 4 ની બાજુમાં એવો અંક (3) મૂકો જેથી (43 &times; 3) નો જવાબ 129 થી નાનો કે સમાન આવે.
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "દશાંશ સંખ્યાઓનું વર્ગમૂળ", 
                answer: `
                <p>દશાંશ સંખ્યાઓનું વર્ગમૂળ ભાગાકારની રીતે જ શોધાય છે, માત્ર દશાંશ ચિહ્નનું ધ્યાન રાખવું પડે છે.</p>
                <div style='background-color:#fffbeb; padding:12px; border-radius:8px; border:2px dashed #ca8a04;'>
                    <b style='color:#b45309;'>ઉદાહરણ: &radic;17.64 શોધો.</b>
                    <p style='margin:5px 0; font-size:14px;'>રીત ભાગાકારની જેમ જ થશે. જ્યારે પૂર્ણ ભાગ (17) નું કામ પૂરું થાય, ત્યારે જવાબમાં દશાંશ ચિહ્ન મૂકવું.</p>
                    <div style='display:flex; align-items:center; gap:10px; margin-top:10px;'>
                        <div style='background-color:white; padding:5px 10px; border-radius:5px; border:1px solid #f59e0b; font-family:monospace; font-size:16px;'>
                            &nbsp;&nbsp;&nbsp;&nbsp;<u style='color:#b45309;'>&nbsp;4. 2&nbsp;</u><br>
                            &nbsp;&nbsp;4 | <u style='background-color:#fef3c7;'>17</u>.<u style='background-color:#fef3c7;'>64</u><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;| -16<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;| ----<br>
                            &nbsp;8<span style='color:#dc2626;'>2</span> | &nbsp;1 64<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;| -1 64 &nbsp;➔ (82 &times; <span style='color:#dc2626;'>2</span>)<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;| ------<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;0
                        </div>
                        <div style='font-size:16px; font-weight:bold; color:#16a34a;'>&radic;17.64 = 4.2</div>
                    </div>
                </div>` 
            }
        ]
    },

        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 6: ઘન અને ઘનમૂળ
    // ------------------------------------
    "6": {
        "chapterName": "પ્રકરણ 6",
        "chapterTitle": "ઘન અને ઘનમૂળ",
        "qa_list": [
            { 
                question: "ઘન (Cube) અને પૂર્ણઘન સંખ્યાની સમજ", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <p style='color:#1e3a8a; margin-top:0;'><b>ઘન:</b> જ્યારે કોઈ સંખ્યાને તે જ સંખ્યા વડે <b>ત્રણ વાર</b> ગુણવામાં આવે, ત્યારે મળતા ગુણનફળને તે સંખ્યાનો <b>ઘન</b> કહે છે.</p>
                    <p style='margin:0; font-size:14px; color:#db2777; font-weight:bold;'>જો સંખ્યા x હોય, તો તેનો ઘન x &times; x &times; x = x&sup3; લખાય.</p>
                </div>
                
                <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                    <div style='min-width:280px; display:inline-block;'>
                        <svg width="240" height="120" viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
                            <!-- 2 cubed visualization -->
                            <!-- Base layer -->
                            <rect x="20" y="50" width="30" height="30" fill="#fdf2f8" stroke="#db2777" stroke-width="1"/>
                            <rect x="50" y="50" width="30" height="30" fill="#fdf2f8" stroke="#db2777" stroke-width="1"/>
                            <rect x="20" y="80" width="30" height="30" fill="#fdf2f8" stroke="#db2777" stroke-width="1"/>
                            <rect x="50" y="80" width="30" height="30" fill="#fdf2f8" stroke="#db2777" stroke-width="1"/>
                            <!-- Top layer (offset) -->
                            <rect x="35" y="35" width="30" height="30" fill="#fbcfe8" stroke="#db2777" stroke-width="1"/>
                            <rect x="65" y="35" width="30" height="30" fill="#fbcfe8" stroke="#db2777" stroke-width="1"/>
                            <rect x="35" y="65" width="30" height="30" fill="#fbcfe8" stroke="#db2777" stroke-width="1"/>
                            <rect x="65" y="65" width="30" height="30" fill="#fbcfe8" stroke="#db2777" stroke-width="1"/>
                            
                            <text x="50" y="115" text-anchor="middle" font-size="12" fill="#1e3a8a">2 &times; 2 &times; 2 = 2&sup3; = 8</text>
                            
                            <text x="120" y="65" font-size="24" fill="#6b7280">&#10142;</text>
                            
                            <text x="180" y="65" text-anchor="middle" font-size="16" fill="#1e3a8a" font-weight="bold">8 એ પૂર્ણઘન<br>સંખ્યા છે.</text>
                        </svg>
                    </div>
                </div>
                <p><b>પૂર્ણઘન સંખ્યા:</b> જે પ્રાકૃતિક સંખ્યા કોઈક પ્રાકૃતિક સંખ્યાના ઘન તરીકે દર્શાવી શકાય, તેને પૂર્ણઘન સંખ્યા કહે છે. (દા.ત. 1, 8, 27, 64, 125, ...)</p>` 
            },
            { 
                question: "ઘન સંખ્યાઓના ગુણધર્મો અને એકમનો અંક", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <div style='background-color:#f0fdf4; border:1px solid #16a34a; border-radius:8px; padding:12px;'>
                        <h4 style='color:#166534; margin:0 0 5px 0;'>૧. એકી-બેકી સંખ્યાનો ઘન:</h4>
                        <ul style='margin:0; font-size:14px; color:#1f2937; padding-left:20px;'>
                            <li>બેકી સંખ્યાનો ઘન હંમેશા <b>બેકી</b> જ હોય. (દા.ત. 4&sup3; = 64)</li>
                            <li>એકી સંખ્યાનો ઘન હંમેશા <b>એકી</b> જ હોય. (દા.ત. 3&sup3; = 27)</li>
                        </ul>
                    </div>

                    <div style='background-color:#fff7ed; border:1px solid #f97316; border-radius:8px; padding:12px; overflow-x:auto;'>
                        <h4 style='color:#c2410c; margin:0 0 8px 0;'>૨. સંખ્યા અને તેના ઘનનો એકમનો અંક:</h4>
                        <table style='width:100%; border-collapse:collapse; font-size:13px; min-width:300px; text-align:center;'>
                            <tr style='background-color:#fef3c7; color:#b45309;'>
                                <th style='border:1px solid #fbd38d; padding:5px;'>સંખ્યાનો એકમનો અંક</th>
                                <td style='border:1px solid #fbd38d; padding:5px;'>1</td>
                                <td style='border:1px solid #fbd38d; padding:5px; background-color:#fee2e2; font-weight:bold;'>2</td>
                                <td style='border:1px solid #fbd38d; padding:5px; background-color:#e0f2fe; font-weight:bold;'>3</td>
                                <td style='border:1px solid #fbd38d; padding:5px;'>4</td>
                                <td style='border:1px solid #fbd38d; padding:5px;'>5</td>
                                <td style='border:1px solid #fbd38d; padding:5px;'>6</td>
                                <td style='border:1px solid #fbd38d; padding:5px; background-color:#e0f2fe; font-weight:bold;'>7</td>
                                <td style='border:1px solid #fbd38d; padding:5px; background-color:#fee2e2; font-weight:bold;'>8</td>
                                <td style='border:1px solid #fbd38d; padding:5px;'>9</td>
                                <td style='border:1px solid #fbd38d; padding:5px;'>0</td>
                            </tr>
                            <tr style='color:#1e3a8a;'>
                                <th style='border:1px solid #fbd38d; padding:5px;'>ઘનનો એકમનો અંક</th>
                                <td style='border:1px solid #fbd38d; padding:5px;'>1</td>
                                <td style='border:1px solid #fbd38d; padding:5px; background-color:#fee2e2; font-weight:bold; color:#dc2626;'>8</td>
                                <td style='border:1px solid #fbd38d; padding:5px; background-color:#e0f2fe; font-weight:bold; color:#0284c7;'>7</td>
                                <td style='border:1px solid #fbd38d; padding:5px;'>4</td>
                                <td style='border:1px solid #fbd38d; padding:5px;'>5</td>
                                <td style='border:1px solid #fbd38d; padding:5px;'>6</td>
                                <td style='border:1px solid #fbd38d; padding:5px; background-color:#e0f2fe; font-weight:bold; color:#0284c7;'>3</td>
                                <td style='border:1px solid #fbd38d; padding:5px; background-color:#fee2e2; font-weight:bold; color:#dc2626;'>2</td>
                                <td style='border:1px solid #fbd38d; padding:5px;'>9</td>
                                <td style='border:1px solid #fbd38d; padding:5px;'>0</td>
                            </tr>
                        </table>
                        <p style='margin:8px 0 0 0; font-size:12px; color:#4b5563;'><i>યાદ રાખો: 2 ➔ 8 અને 8 ➔ 2 | 3 ➔ 7 અને 7 ➔ 3 બદલાય છે. બાકીના સમાન રહે છે.</i></p>
                    </div>
                    
                    <div style='background-color:#fee2e2; border:1px solid #ef4444; border-radius:8px; padding:12px;'>
                        <h4 style='color:#b91c1c; margin:0 0 5px 0;'>૩. શૂન્યોની સંખ્યા:</h4>
                        <p style='margin:0; font-size:14px; color:#1f2937;'>જો સંખ્યાના અંતે 1 શૂન્ય હોય, તો તેના ઘનના અંતે <b>3 શૂન્યો</b> (ત્રણ ગણા) આવે.</p>
                        <p style='margin:5px 0 0 0; font-size:14px; color:#1e3a8a; font-weight:bold;'>દા.ત. 10&sup3; = 1,000 | 200&sup3; = 8,000,000</p>
                    </div>
                </div>` 
            },
            { 
                thought: "Adding consecutive odd numbers pattern: 1 = 1^3, 3+5 = 8 = 2^3, 7+9+11 = 27 = 3^3",
                question: "રસપ્રદ તરાહ: ક્રમિક એકી સંખ્યાઓનો સરવાળો", 
                answer: `
                <div style='border:1px solid #ca8a04; background-color:#fffbeb; padding:15px; border-radius:10px; overflow-x:auto;'>
                    <p style='margin-top:0; font-size:14px; color:#b45309;'>પૂર્ણઘન સંખ્યાઓને ક્રમિક એકી સંખ્યાઓના સરવાળા સ્વરૂપે દર્શાવી શકાય છે:</p>
                    <div style='font-family:monospace; font-size:16px; color:#1e3a8a; margin-top:10px; font-weight:bold; text-align:center; min-width:250px;'>
                        1 = 1 = <span style='color:#ea580c;'>1&sup3;</span><br>
                        3 + 5 = 8 = <span style='color:#ea580c;'>2&sup3;</span><br>
                        7 + 9 + 11 = 27 = <span style='color:#ea580c;'>3&sup3;</span><br>
                        13 + 15 + 17 + 19 = 64 = <span style='color:#ea580c;'>4&sup3;</span>
                    </div>
                </div>` 
            },
            { 
                question: "ઘનમૂળ (Cube Root) નો પરિચય અને સંકેત", 
                answer: `
                <div style='background-color:#fdf2f8; padding:15px; border-radius:10px; border:1px solid #db2777; overflow-x:auto;'>
                    <div style='min-width:280px; display:flex; align-items:center; gap:15px;'>
                        <div style='flex:1;'>
                            <p style='margin:0; color:#9d174d;'><b>વ્યાખ્યા:</b> ઘનમૂળ એ ઘન કરવાની વિરોધી પ્રક્રિયા છે.</p>
                            <p style='margin:8px 0 0 0; font-size:14px;'>જો 2&sup3; = 8 હોય, તો 8 નું ઘનમૂળ 2 છે.</p>
                        </div>
                        <div style='text-align:center; padding:10px; background-color:white; border-radius:8px; border:2px dashed #db2777;'>
                            <span style='font-size:12px; color:#6b7280;'>સંકેત</span><br>
                            <span style='font-size:30px; color:#db2777; font-weight:bold;'>&radic;<sup>3</sup></span><br>
                            <span style='font-size:14px; color:#1e3a8a; font-weight:bold;'>&radic;<sup>3</sup>8 = 2</span>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "ઘનમૂળ શોધવાની રીત - ૧: અવિભાજ્ય અવયવીકરણની રીત", 
                answer: `
                <p>આ રીતમાં સંખ્યાના અવિભાજ્ય અવયવો પાડીને <b>ત્રણ-ત્રણની જોડી (ત્રિપુટી)</b> બનાવવામાં આવે છે.</p>
                <div style='background-color:#f0fdf4; padding:12px; border-radius:8px; border:1px solid #16a34a; overflow-x:auto;'>
                    <div style='min-width:280px;'>
                        <b style='color:#166534;'>દાખલો: &radic;<sup>3</sup>216 શોધો.</b>
                        <div style='display:flex; gap:20px; margin-top:10px; align-items:center;'>
                            <div style='font-family:monospace; font-size:14px; border-right:1px solid #cbd5e1; padding-right:15px;'>
                                2 | 216<br>
                                2 | 108<br>
                                2 | 54<br>
                                3 | 27<br>
                                3 | 9<br>
                                3 | 3<br>
                                &nbsp;&nbsp;| 1
                            </div>
                            <div style='font-size:14px; line-height:1.6;'>
                                216 = <u style='color:#ea580c;'>2&times;2&times;2</u> &times; <u style='color:#ea580c;'>3&times;3&times;3</u><br>
                                216 = 2&sup3; &times; 3&sup3;<br>
                                &radic;<sup>3</sup>216 = 2 &times; 3<br>
                                <b style='color:#16a34a; font-size:16px;'>&radic;<sup>3</sup>216 = 6</b>
                            </div>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "ઘનમૂળ શોધવાની રીત - ૨: અંદાજ લગાવવાની રીત (મોટી પૂર્ણઘન સંખ્યાઓ માટે)", 
                answer: `
                <p>ખૂબ મોટી પૂર્ણઘન સંખ્યાઓનું ઘનમૂળ અવયવ પાડ્યા વગર, માત્ર જોઈને આ રીતથી ઝડપથી શોધી શકાય છે. મોબાઈલમાં જમણી બાજુ સ્ક્રોલ કરીને પગલાં જુઓ.</p>
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:480px; background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:15px;'>
                        <b style='color:#1e3a8a; font-size:15px;'>ઉદાહરણ: 17576 નું ઘનમૂળ શોધો.</b>
                        <div style='display:flex; gap:15px; margin-top:10px;'>
                            <!-- Left Part -->
                            <div style='flex:1; border:1px solid #60a5fa; background-color:white; padding:10px; border-radius:5px; text-align:center;'>
                                <span style='font-size:12px; color:#6b7280;'>જૂથ બનાવો (જમણી બાજુથી 3-3)</span><br>
                                <span style='font-size:20px; font-weight:bold;'>
                                    <span style='background-color:#fed7aa; padding:2px 5px; border-radius:3px; color:#b45309;'>17</span>
                                    <span style='background-color:#bfdbfe; padding:2px 5px; border-radius:3px; color:#1e40af;'>576</span>
                                </span>
                                <div style='display:flex; font-size:11px; margin-top:5px; color:#4b5563;'>
                                    <div style='flex:1;'>બીજું જૂથ<br>(દશક માટે)</div>
                                    <div style='flex:1;'>પહેલું જૂથ<br>(એકમ માટે)</div>
                                </div>
                            </div>
                            <!-- Right Part - Steps -->
                            <div style='flex:1.5; font-size:13px; color:#1e3a8a; line-height:1.6;'>
                                <b style='color:#ea580c;'>પગલું ૧ (એકમનો અંક):</b><br>
                                પહેલું જૂથ <span style='color:#0284c7; font-weight:bold;'>576</span> છે. તેનો એકમનો અંક <span style='color:#dc2626; font-weight:bold;'>6</span> છે.<br>
                                આપણે જાણીએ છીએ કે જો ઘનનો એકમ <span style='color:#dc2626;'>6</span> હોય, તો સંખ્યાનો એકમ પણ <b style='color:#dc2626;'>6</b> જ હોય.<br>
                                ➔ ઘનમૂળનો એકમનો અંક = <b style='color:#16a34a; font-size:15px;'>6</b><br><br>
                                <b style='color:#ea580c;'>પગલું ૨ (દશકનો અંક):</b><br>
                                બીજું જૂથ <span style='color:#b45309; font-weight:bold;'>17</span> છે.<br>
                                હવે જુઓ કે 17 કઈ બે ઘન સંખ્યાઓની વચ્ચે આવે છે?<br>
                                2&sup3; (8) < <b style='color:#b45309;'>17</b> < 3&sup3; (27).<br>
                                આમાંથી નાની સંખ્યા (2) લો.<br>
                                ➔ ઘનમૂળનો દશકનો અંક = <b style='color:#16a34a; font-size:15px;'>2</b><br><br>
                                <b style='color:#16a34a; font-size:18px;'>જવાબ: &radic;<sup>3</sup>17576 = 26</b>
                            </div>
                        </div>
                    </div>
                </div>` 
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 7: રાશિઓની તુલના
    // ------------------------------------
    "7": {
        "chapterName": "પ્રકરણ 7",
        "chapterTitle": "રાશિઓની તુલના",
        "qa_list": [
            { 
                question: "ગુણોત્તર (Ratio) અને ટકાવારી (Percentage) ની સમજ", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>૧. ગુણોત્તર (Ratio):</h4>
                        <p style='margin:0; font-size:14px; color:#1f2937;'>બે સજાતીય રાશિઓની સરખામણીને ગુણોત્તર કહે છે. ગુણોત્તર માટે બંને રાશિઓના <b>એકમો સમાન</b> હોવા જોઈએ. તેને અંશ/છેદ અથવા '<b>:</b>' સંકેત વડે દર્શાવાય છે.</p>
                        <div style='text-align:center; margin-top:10px; overflow-x:auto;'>
                            <svg width="220" height="60" viewBox="0 0 220 60" xmlns="http://www.w3.org/2000/svg">
                                <rect x="10" y="10" width="30" height="40" fill="#bfdbfe" stroke="#2563eb"/>
                                <rect x="50" y="10" width="30" height="40" fill="#bfdbfe" stroke="#2563eb"/>
                                <text x="100" y="35" font-size="20" fill="#6b7280">:</text>
                                <rect x="130" y="10" width="30" height="40" fill="#fecaca" stroke="#dc2626"/>
                                <rect x="160" y="10" width="30" height="40" fill="#fecaca" stroke="#dc2626"/>
                                <rect x="190" y="10" width="30" height="40" fill="#fecaca" stroke="#dc2626"/>
                                <text x="110" y="55" text-anchor="middle" font-size="12" fill="#1e3a8a">2 ભૂરા : 3 લાલ (2:3)</text>
                            </svg>
                        </div>
                    </div>

                    <div style='background-color:#fdf2f8; padding:15px; border-left:5px solid #db2777; border-radius:8px;'>
                        <h4 style='color:#9d174d; margin:0 0 5px 0;'>૨. ટકાવારી (Percentage):</h4>
                        <p style='margin:0; font-size:14px; color:#1f2937;'>ટકા એટલે <b>પ્રતિ સો (per hundred)</b>. જેનો છેદ 100 હોય તેવો અપૂર્ણાંક. તેનો સંકેત '<b>%</b>' છે.</p>
                        <p style='margin:5px 0 0 0; font-size:14px; color:#1e3a8a; font-weight:bold;'>દા.ત. 25% = 25/100 = 1/4 ભાગ</p>
                    </div>
                </div>` 
            },
            { 
                question: "વધારો અથવા ઘટાડો ટકાવારીમાં (Percentage Increase/Decrease)", 
                answer: `
                <p>અમુક વાર આપણે કોઈ રાશિમાં થયેલ ફેરફારને મૂળ કિંમતના સંદર્ભમાં ટકાવારીમાં દર્શાવવાની જરૂર પડે છે.</p>
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:320px; display:flex; gap:10px;'>
                        <div style='flex:1; background-color:#f0fdf4; border:1px solid #16a34a; border-radius:10px; padding:12px; text-align:center;'>
                            <h4 style='color:#166534; margin:0 0 8px 0;'>ટકાવારી વધારો</h4>
                            <div style='background-color:white; padding:8px; border-radius:5px; border:2px dashed #16a34a;'>
                                <img src="https://latex.codecogs.com/svg.image?\dpi{110}&space;\text{વધારો&space;\%}=\frac{\text{વધારેલી&space;કિંમત}}{\text{મૂળ&space;કિંમત}}\times&space;100" title="\text{વધારો \%}=\frac{\text{વધારેલી કિંમત}}{\text{મૂળ કિંમત}}\times 100" />
                            </div>
                        </div>
                        <div style='flex:1; background-color:#fee2e2; border:1px solid #ef4444; border-radius:10px; padding:12px; text-align:center;'>
                            <h4 style='color:#b91c1c; margin:0 0 8px 0;'>ટકાવારી ઘટાડો</h4>
                            <div style='background-color:white; padding:8px; border-radius:5px; border:2px dashed #ef4444;'>
                                <img src="https://latex.codecogs.com/svg.image?\dpi{110}&space;\text{ઘટાડો&space;\%}=\frac{\text{ઘટાડેલી&space;કિંમત}}{\text{મૂળ&space;કિંમત}}\times&space;100" title="\text{ઘટાડો \%}=\frac{\text{ઘટાડેલી કિંમત}}{\text{મૂળ કિંમત}}\times 100" />
                            </div>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "વળતર અને તેની ટકાવારી (Discount)", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-radius:10px; border:1px solid #f97316;'>
                    <p style='margin-top:0; color:#c2410c;'><b>વળતર (Discount):</b> વસ્તુની છાપેલી કિંમત પર આપવામાં આવતી છૂટને વળતર કહે છે. વળતર હંમેશા <b>છાપેલી કિંમત (Marked Price - MP)</b> પર ગણાય છે.</p>
                    
                    <ul style='list-style-type:none; padding:0; margin:10px 0 0 0; display:flex; flex-direction:column; gap:8px;'>
                        <li style='background-color:white; padding:10px; border-radius:5px; border:1px solid #fdba74; font-weight:bold; color:#1e3a8a;'>
                            ૧) વળતર = છાપેલી કિંમત (MP) - વેચાણ કિંમત (SP)
                        </li>
                        <li style='background-color:white; padding:10px; border-radius:5px; border:1px solid #fdba74; text-align:center;'>
                            <img src="https://latex.codecogs.com/svg.image?\dpi{120}&space;\text{વળતર&space;\%}=\frac{\text{વળતર}}{\text{છાપેલી&space;કિંમત}}\times&space;100" title="\text{વળતર \%}=\frac{\text{વળતર}}{\text{છાપેલી કિંમત}}\times 100" />
                        </li>
                    </ul>
                </div>` 
            },
            { 
                question: "નફો-ખોટ અને જીએસટી (Profit-Loss & GST)", 
                answer: `
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:400px; display:flex; flex-direction:column; gap:10px;'>
                        <!-- Profit/Loss Visual -->
                        <div style='background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:10px; display:flex; align-items:center; gap:10px;'>
                            <div style='flex:1; text-align:center;'>
                                <svg width="100" height="60" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="10" y="20" width="30" height="30" fill="#fca5a5" stroke="#dc2626"/>
                                    <text x="25" y="15" text-anchor="middle" font-size="10" fill="#dc2626">ખ.કિં. (CP)</text>
                                    <rect x="50" y="10" width="30" height="40" fill="#86efac" stroke="#16a34a"/>
                                    <text x="65" y="15" text-anchor="middle" font-size="10" fill="#16a34a">વે.કિં. (SP)</text>
                                </svg>
                                <p style='font-size:12px; margin:0; color:#166534; font-weight:bold;'>નફો (SP > CP)</p>
                            </div>
                            <div style='flex:1.5; font-size:13px; border-left:1px solid #cbd5e1; padding-left:10px;'>
                                <b>નફો</b> = વે.કિં. - ખ.કિં.<br>
                                <b>ખોટ</b> = ખ.કિં. - વે.કિં.<br>
                                <span style='color:#4b5563; font-size:11px;'>(નફો/ખોટ હંમેશા <b>ખરીદ કિંમત (CP)</b> પર ગણાય.)</span>
                            </div>
                            <div style='flex:1.5; border-left:1px solid #cbd5e1; padding-left:10px; text-align:center;'>
                                <img src="https://latex.codecogs.com/svg.image?\dpi{100}&space;\text{નફો/ખોટ&space;\%}=\frac{\text{નફો/ખોટ}}{\text{ખરીદ&space;કિંમત}}\times&space;100" title="\text{નફો/ખોટ \%}=\frac{\text{નફો/ખોટ}}{\text{ખરીદ કિંમત}}\times 100" />
                            </div>
                        </div>

                        <!-- GST -->
                        <div style='background-color:#eff6ff; border:1px solid #2563eb; border-radius:8px; padding:12px;'>
                            <h4 style='color:#1e40af; margin:0 0 5px 0;'>વસ્તુ અને સેવા કર (Goods and Services Tax - GST)</h4>
                            <p style='margin:0; font-size:14px; color:#1f2937;'>જીએસટી એ સરકાર દ્વારા વસ્તુની ખરીદી કે સેવા પર લેવામાં આવતો કર છે. તે વસ્તુની <b>વેચાણ કિંમત (SP)</b> પર ઉમેરવામાં આવે છે.</p>
                            <p style='margin:5px 0 0 0; font-size:14px; color:#ea580c; font-weight:bold;'>ગ્રાહકે ચૂકવવાની રકમ = વેચાણ કિંમત + GST</p>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "વ્યાજ અને ચક્રવૃદ્ધિ વ્યાજ (Interest & Compound Interest)", 
                answer: `
                <p>જ્યારે આપણે બેંકમાંથી નાણાં ઉછીના લઈએ અથવા બેંકમાં જમા કરીએ, ત્યારે તેના પર મળતી વધારાની રકમને <b>વ્યાજ</b> કહે છે.</p>
                <div style='overflow-x:auto;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:480px; font-size:14px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>પ્રકાર</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>વ્યાખ્યા</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>સૂત્ર</th>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>સાદું વ્યાજ<br>(Simple Interest - SI)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>માત્ર <b>મૂળ મુદ્દલ</b> પર જ આખા સમયગાળા માટે ગણવામાં આવતું વ્યાજ. દરેક વર્ષે વ્યાજ સમાન રહે છે.</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>
                                <img src="https://latex.codecogs.com/svg.image?\dpi{110}&space;SI=\frac{P\times&space;R\times&space;T}{100}" title="SI=\frac{P\times R\times T}{100}" />
                                <div style='font-size:11px; color:#4b5563; margin-top:5px;'>P=મુદ્દલ, R=વ્યાજનો દર(%), T=સમય(વર્ષ)</div>
                            </td>
                        </tr>
                        <tr style='background-color:#fffbeb;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309;'>ચક્રવૃદ્ધિ વ્યાજ<br>(Compound Interest - CI)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>નિશ્ચિત સમયગાળા પછી મળતા <b>વ્યાજને મુદ્દલમાં ઉમેરી</b>, તે નવી રકમ (વ્યાજમુદ્દલ) પર વ્યાજ ગણવાની પ્રક્રિયા. વ્યાજનું પણ વ્યાજ!</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>
                                <div style='margin-bottom:8px; color:#b45309; font-weight:bold;'>વ્યાજમુદ્દલ (Amount - A):</div>
                                <img src="https://latex.codecogs.com/svg.image?\dpi{110}&space;A=P\left(1&plus;\frac{R}{100}\right)^n" title="A=P\left(1+\frac{R}{100}\right)^n" />
                                <div style='font-size:11px; color:#4b5563; margin-top:5px;'>n=વર્ષોની સંખ્યા. CI = A - P</div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div style='background-color:#fff; padding:10px; border-left:4px solid #dc2626; margin-top:10px; font-size:13px;'>
                    <b>નોંધ:</b> જો વ્યાજની ગણતરી <b>અર્ધવાર્ષિક (છ માસે)</b> કરવાની હોય, તો વ્યાજનો દર <b>અડધો (R/2)</b> થઈ જાય અને સમયગાળો <b>બમણો (2n)</b> થઈ જાય.
                </div>` 
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 8: બૈજિક પદાવલિઓ અને નિત્યસમ
    // ------------------------------------
    "8": {
        "chapterName": "પ્રકરણ 8",
        "chapterTitle": "બૈજિક પદાવલિઓ અને નિત્યસમ",
        "qa_list": [
            { 
                question: "બૈજિક પદાવલિની પ્રાથમિક સમજ (ચલ, અચળ, પદ, સહગુણક)", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <ul style='line-height:1.8; color:#1e3a8a; margin:0;'>
                        <li><b style='color:#ea580c;'>ચલ (Variable):</b> જેની કિંમત બદલાઈ શકે. (દા.ત. x, y, z)</li>
                        <li><b style='color:#ea580c;'>અચળ (Constant):</b> જેની કિંમત નિશ્ચિત હોય. (દા.ત. 5, -7, 1/2)</li>
                        <li><b style='color:#ea580c;'>બૈજિક પદાવલિ:</b> ચલ અને અચળને સરવાળા, બાદબાકી, ગુણાકાર કે ભાગાકારની ક્રિયાઓ દ્વારા સાંકળવાથી બને છે.</li>
                    </ul>
                </div>
                
                <div style='text-align:center; margin: 15px 0; background-color:#f8fafc; padding:10px; border-radius:8px; border:1px solid #cbd5e1; overflow-x:auto;'>
                    <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>પદાવલિનું વિશ્લેષણ: 4x&sup2; - 3xy + 7</h4>
                    <svg width="300" height="120" viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg">
                        <!-- Expression -->
                        <text x="150" y="30" text-anchor="middle" font-size="20" font-weight="bold" fill="#1e3a8a">4x&sup2; - 3xy + 7</text>
                        
                        <!-- Arrows for Terms -->
                        <path d="M 110 40 L 60 70" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow)"/>
                        <path d="M 150 40 L 150 70" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow)"/>
                        <path d="M 190 40 L 240 70" stroke="#6b7280" stroke-width="1.5" marker-end="url(#arrow)"/>
                        
                        <!-- Terms boxes -->
                        <rect x="20" y="75" width="80" height="35" rx="5" fill="#e0f2fe" stroke="#0284c7"/>
                        <text x="60" y="97" text-anchor="middle" font-size="14" fill="#0369a1">4x&sup2;</text>
                        
                        <rect x="110" y="75" width="80" height="35" rx="5" fill="#fee2e2" stroke="#dc2626"/>
                        <text x="150" y="97" text-anchor="middle" font-size="14" fill="#b91c1c">-3xy</text>
                        
                        <rect x="200" y="75" width="80" height="35" rx="5" fill="#fef3c7" stroke="#d97706"/>
                        <text x="240" y="97" text-anchor="middle" font-size="14" fill="#b45309">7 (અચળ)</text>
                        
                        <text x="150" y="115" text-anchor="middle" font-size="12" fill="#6b7280">આ પદાવલિમાં ૩ પદો છે.</text>
                        
                        <!-- Arrow definition -->
                        <defs>
                            <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
                                <path d="M0,0 L0,6 L9,3 z" fill="#6b7280"/>
                            </marker>
                        </defs>
                    </svg>
                    <p style='font-size:13px; color:#1e3a8a; margin-top:5px;'>પદ -3xy માં <b>સહગુણક</b> -3 છે.</p>
                </div>` 
            },
            { 
                question: "પદાવલિઓના પ્રકારો અને સજાતીય-વિજાતીય પદો", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <div style='background-color:#fffbeb; padding:15px; border-radius:10px; border:1px solid #f59e0b;'>
                        <h4 style='color:#b45309; margin:0 0 10px 0; text-align:center;'>પદોની સંખ્યાના આધારે પ્રકારો</h4>
                        <div style='display:flex; gap:10px; overflow-x:auto; padding-bottom:5px; text-align:center;'>
                            <div style='min-width:100px; flex:1; background-color:white; padding:8px; border-radius:5px; border:1px solid #fbbf24;'>
                                <b style='color:#b45309; font-size:14px;'>એકપદી</b><br>
                                <span style='font-size:12px; color:#6b7280;'>માત્ર 1 પદ</span><br>
                                <span style='font-size:13px; color:#1e3a8a;'>4x&sup2;, -3y</span>
                            </div>
                            <div style='min-width:100px; flex:1; background-color:white; padding:8px; border-radius:5px; border:1px solid #fbbf24;'>
                                <b style='color:#b45309; font-size:14px;'>દ્વિપદી</b><br>
                                <span style='font-size:12px; color:#6b7280;'>2 પદો</span><br>
                                <span style='font-size:13px; color:#1e3a8a;'>a + b, 2x-5</span>
                            </div>
                            <div style='min-width:100px; flex:1; background-color:white; padding:8px; border-radius:5px; border:1px solid #fbbf24;'>
                                <b style='color:#b45309; font-size:14px;'>ત્રિપદી</b><br>
                                <span style='font-size:12px; color:#6b7280;'>3 પદો</span><br>
                                <span style='font-size:13px; color:#1e3a8a;'>x&sup2;+x+1</span>
                            </div>
                        </div>
                        <p style='margin:10px 0 0 0; font-size:13px; color:#4b5563;'>વ્યાપક રીતે, એક કે તેથી વધુ પદો વાળી પદાવલિને <b>બહુપદી (Polynomial)</b> કહે છે.</p>
                    </div>

                    <div style='background-color:#f8fafc; padding:15px; border-radius:10px; border:1px solid #cbd5e1;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>સજાતીય (Like) અને વિજાતીય (Unlike) પદો</h4>
                        <p style='margin:0; font-size:14px; color:#1f2937;'>જે પદોમાં <b>ચલ અને ચલના ઘાતાંક સમાન</b> હોય, તેને సજાતીయ પદો કહે છે. સહગુણક ભલે અલગ હોય.</p>
                        <div style='display:flex; gap:10px; margin-top:10px;'>
                            <div style='flex:1; background-color:#f0fdf4; padding:8px; border-radius:5px; border:1px solid #16a34a; font-size:13px; text-align:center;'>
                                <b style='color:#166534;'>સજાતીય પદો</b><br>
                                7<span style='color:#ea580c; font-weight:bold;'>x</span> અને -3<span style='color:#ea580c; font-weight:bold;'>x</span><br>
                                5<span style='color:#ea580c; font-weight:bold;'>x&sup2;y</span> અને <span style='color:#ea580c; font-weight:bold;'>x&sup2;y</span>
                            </div>
                            <div style='flex:1; background-color:#fee2e2; padding:8px; border-radius:5px; border:1px solid #ef4444; font-size:13px; text-align:center;'>
                                <b style='color:#b91c1c;'>વિજાતીય પદો</b><br>
                                7<span style='color:#dc2626; font-weight:bold;'>x</span> અને 7<span style='color:#dc2626; font-weight:bold;'>y</span><br>
                                5<span style='color:#dc2626; font-weight:bold;'>x&sup2;</span> અને 5<span style='color:#dc2626; font-weight:bold;'>x</span>
                            </div>
                        </div>
                        <p style='background-color:white; padding:5px; border-radius:5px; margin-top:10px; font-size:12px; color:#be123c; border-left:3px solid #be123c;'><b>ખાસ યાદ રાખો:</b> પદાવલિઓના સરવાળા કે બાદબાકી <b>માત્ર સજાતીય પદો વચ્ચે જ</b> થઈ શકે છે.</p>
                    </div>
                </div>` 
            },
            { 
                question: "બૈજિક પદાવલિઓના ગુણાકાર (Multiplication)", 
                answer: `
                <p>પદાવલિઓના ગુણાકારમાં સહગુણકોનો અંકો સાથે ગુણાકાર થાય છે અને ચલના <b>ઘાતાંકોનો સરવાળો</b> થાય છે.</p>
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:400px; display:flex; flex-direction:column; gap:10px;'>
                        <!-- Monomial by Monomial -->
                        <div style='background-color:#eff6ff; border:1px solid #2563eb; border-radius:8px; padding:12px;'>
                            <h4 style='color:#1e40af; margin:0 0 5px 0;'>૧. એકપદીનો એકપદી સાથે ગુણાકાર</h4>
                            <div style='background-color:white; padding:10px; border-radius:5px; font-family:monospace; font-size:15px; color:#1e3a8a;'>
                                (3x) &times; (5y) = (3&times;5) &times; (x&times;y) = <b style='color:#16a34a;'>15xy</b><br>
                                (4x&sup2;) &times; (-2x&sup3;) = (4&times;-2) &times; (x<sup>2+3</sup>) = <b style='color:#dc2626;'>-8x&sup5;</b>
                            </div>
                        </div>

                        <!-- Monomial by Polynomial -->
                        <div style='background-color:#fdf2f8; border:1px solid #db2777; border-radius:8px; padding:12px;'>
                            <h4 style='color:#9d174d; margin:0 0 5px 0;'>૨. એકપદીનો દ્વિપદી/બહુપદી સાથે ગુણાકાર (વિભાજનનો ગુણધર્મ)</h4>
                            <div style='background-color:white; padding:10px; border-radius:5px; font-family:monospace; font-size:15px;'>
                                <span style='color:#db2777;'>a</span> &times; (<span style='color:#0284c7;'>b</span> + <span style='color:#ea580c;'>c</span>) = (<span style='color:#db2777;'>a</span>&times;<span style='color:#0284c7;'>b</span>) + (<span style='color:#db2777;'>a</span>&times;<span style='color:#ea580c;'>c</span>) = <b style='color:#1e3a8a;'>ab + ac</b><br>
                                <span style='color:#db2777;'>3x</span> &times; (<span style='color:#0284c7;'>2x</span> + <span style='color:#ea580c;'>5</span>) = (<span style='color:#db2777;'>3x</span>&times;<span style='color:#0284c7;'>2x</span>) + (<span style='color:#db2777;'>3x</span>&times;<span style='color:#ea580c;'>5</span>) = <b style='color:#1e3a8a;'>6x&sup2; + 15x</b>
                            </div>
                        </div>
                        
                        <!-- Binomial by Binomial visualization -->
                        <div style='background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:10px; display:flex; align-items:center; gap:10px;'>
                            <div style='flex:1; text-align:center;'>
                                <svg width="120" height="100" viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="10" y="10" width="100" height="80" fill="white" stroke="#6b7280"/>
                                    <line x1="60" y1="10" x2="60" y2="90" stroke="#cbd5e1"/>
                                    <line x1="10" y1="50" x2="110" y2="50" stroke="#cbd5e1"/>
                                    <text x="5" y="30" font-size="12" fill="#dc2626">a</text>
                                    <text x="5" y="70" font-size="12" fill="#dc2626">b</text>
                                    <text x="35" y="9" font-size="12" fill="#2563eb">c</text>
                                    <text x="85" y="9" font-size="12" fill="#2563eb">d</text>
                                    <text x="35" y="35" font-size="12" fill="#1e3a8a">ac</text>
                                    <text x="85" y="35" font-size="12" fill="#1e3a8a">ad</text>
                                    <text x="35" y="75" font-size="12" fill="#1e3a8a">bc</text>
                                    <text x="85" y="75" font-size="12" fill="#1e3a8a">bd</text>
                                </svg>
                            </div>
                            <div style='flex:1.5; font-size:14px; color:#1e3a8a;'>
                                <b style='color:#ea580c;'>૩. દ્વિપદીનો દ્વિપદી સાથે ગુણાકાર</b><br>
                                (a+b)(c+d) = a(c+d) + b(c+d)<br>
                                = <b style='color:#16a34a;'>ac + ad + bc + bd</b>
                            </div>
                        </div>
                    </div>
                </div>` 
            },
                        { 
                question: "નિત્યસમ (Identity) એટલે શું?", 
                answer: `
                <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px; margin-bottom:15px;'>
                    <p style='margin-top:0; color:#881337;'><b>વ્યાખ્યા:</b> એવી ક્ષમતા (સમીકરણ) કે જેમાં આપેલા ચલની કોઈપણ કિંમત માટે સમીકરણની ડાબી બાજુ (LHS) અને જમણી બાજુ (RHS) ના પરિણામ સમાન જ આવતા હોય, તેને <b>નિત્યસમ</b> કહે છે.</p>
                    <p style='margin:0; font-size:13px; color:#be123c;'>(નોંધ: સમીકરણ અમુક ચોક્કસ કિંમતો માટે જ સાચું હોય છે, જ્યારે નિત્યસમ ચલની તમામ કિંમતો માટે સાચું હોય છે.)</p>
                </div>` 
            },
            { 
                question: "પ્રમાણિત નિત્યસમો (Standard Identities)", 
                answer: `
                <p>ગણતરીઓને સરળ અને ઝડપી બનાવવા માટે નીચેના ૪ અગત્યના પ્રમાણિત નિત્યસમો ખાસ યાદ રાખવા:</p>
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:320px; display:flex; flex-direction:column; gap:10px;'>
                        <div style='background-color:#eff6ff; border-left:4px solid #2563eb; padding:12px; border-radius:0 8px 8px 0; box-shadow:0 1px 3px rgba(0,0,0,0.1);'>
                            <h4 style='color:#1e40af; margin:0 0 5px 0;'>નિત્યસમ ૧: પૂર્ણવર્ગ (સરવાળો)</h4>
                            <div style='font-size:18px; font-weight:bold; color:#1d4ed8; text-align:center; background-color:white; padding:10px; border-radius:5px; border:1px dashed #60a5fa;'>
                                (a + b)&sup2; = a&sup2; + 2ab + b&sup2;
                            </div>
                            <p style='margin:5px 0 0 0; font-size:12px; color:#4b5563; text-align:center;'>પ્રથમ પદનો વર્ગ + 2(પ્રથમ)(બીજું) + બીજા પદનો વર્ગ</p>
                        </div>

                        <div style='background-color:#fff7ed; border-left:4px solid #ea580c; padding:12px; border-radius:0 8px 8px 0; box-shadow:0 1px 3px rgba(0,0,0,0.1);'>
                            <h4 style='color:#c2410c; margin:0 0 5px 0;'>નિત્યસમ ૨: પૂર્ણવર્ગ (બાદબાકી)</h4>
                            <div style='font-size:18px; font-weight:bold; color:#b45309; text-align:center; background-color:white; padding:10px; border-radius:5px; border:1px dashed #fb923c;'>
                                (a - b)&sup2; = a&sup2; - 2ab + b&sup2;
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; border-left:4px solid #16a34a; padding:12px; border-radius:0 8px 8px 0; box-shadow:0 1px 3px rgba(0,0,0,0.1);'>
                            <h4 style='color:#166534; margin:0 0 5px 0;'>નિત્યસમ ૩: બે વર્ગોનો તફાવત</h4>
                            <div style='font-size:18px; font-weight:bold; color:#15803d; text-align:center; background-color:white; padding:10px; border-radius:5px; border:1px dashed #4ade80;'>
                                (a + b)(a - b) = a&sup2; - b&sup2;
                            </div>
                        </div>

                        <div style='background-color:#fdf2f8; border-left:4px solid #db2777; padding:12px; border-radius:0 8px 8px 0; box-shadow:0 1px 3px rgba(0,0,0,0.1);'>
                            <h4 style='color:#9d174d; margin:0 0 5px 0;'>નિત્યસમ ૪: સમાન પ્રથમ પદ વાળી દ્વિપદીઓનો ગુણાકાર</h4>
                            <div style='font-size:18px; font-weight:bold; color:#be123c; text-align:center; background-color:white; padding:10px; border-radius:5px; border:1px dashed #f472b6;'>
                                (x + a)(x + b) = x&sup2; + (a + b)x + ab
                            </div>
                        </div>
                    </div>
                </div>` 
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 9: ક્ષેત્રફળ અને ઘનફળ
    // ------------------------------------
    "9": {
        "chapterName": "પ્રકરણ 9",
        "chapterTitle": "ક્ષેત્રફળ અને ઘનફળ",
        "qa_list": [
            { 
                question: "સમતલીય આકારોના ક્ષેત્રફળ અને પરિમિતિ (પુનરાવર્તન)", 
                answer: `
                <p>આપણે અગાઉના ધોરણમાં શીખેલા મૂળભૂત દ્વિ-પરિમાણીય (2D) આકારોના સૂત્રોનું પુનરાવર્તન કરીએ:</p>
                <div style='overflow-x:auto;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:480px; font-size:14px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>આકાર</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>નામ</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>ક્ષેત્રફળ (Area)</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>પરિમિતિ (Perimeter)</th>
                        </tr>
                        <tr>
                            <td style='padding:5px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="50" height="40" viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="5" width="40" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
                                    <text x="25" y="38" text-anchor="middle" font-size="10" fill="#1e3a8a">l</text>
                                    <text x="48" y="22" text-anchor="middle" font-size="10" fill="#1e3a8a">b</text>
                                </svg>
                            </td>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>લંબચોરસ</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>l &times; b</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>2(l + b)</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:5px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="5" width="30" height="30" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
                                    <text x="20" y="38" text-anchor="middle" font-size="10" fill="#166534">l</text>
                                </svg>
                            </td>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#166534;'>ચોરસ</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>l &times; l = l&sup2;</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>4l</td>
                        </tr>
                        <tr>
                            <td style='padding:5px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="50" height="40" viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg">
                                    <polygon points="25,5 45,35 5,35" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
                                    <line x1="25" y1="5" x2="25" y2="35" stroke="#dc2626" stroke-width="1" stroke-dasharray="3,3"/>
                                    <text x="25" y="38" text-anchor="middle" font-size="10" fill="#b91c1c">b</text>
                                    <text x="22" y="20" text-anchor="middle" font-size="10" fill="#b91c1c">h</text>
                                </svg>
                            </td>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b91c1c;'>ત્રિકોણ</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>&frac12; &times; b &times; h</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>ત્રણેય બાજુનો સરવાળો</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:5px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20" r="15" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
                                    <line x1="20" y1="20" x2="35" y2="20" stroke="#d97706" stroke-width="1.5"/>
                                    <text x="27" y="18" text-anchor="middle" font-size="10" fill="#b45309">r</text>
                                </svg>
                            </td>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309;'>વર્તુળ</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>&pi;r&sup2;</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>પરિધ = 2&pi;r</td>
                        </tr>
                    </table>
                </div>
                <p style='font-size:12px; color:#6b7280; margin-top:5px;'>(&pi; &asymp; 22/7 અથવા 3.14)</p>` 
            },
            { 
                question: "ચતુષ્કોણના ક્ષેત્રફળ (Trapezium, Rhombus, General Quad.)", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <!-- 1. સમલંબ ચતુષ્કોણ -->
                    <div style='background-color:#fff7ed; padding:15px; border-radius:10px; border:1px solid #f97316; overflow-x:auto;'>
                        <div style='min-width:300px; display:flex; align-items:center; gap:15px;'>
                            <svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="30,10 100,10 115,70 10,70" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                                <line x1="30" y1="10" x2="30" y2="70" stroke="#ea580c" stroke-width="1" stroke-dasharray="4,4"/>
                                <text x="65" y="8" text-anchor="middle" font-size="12" fill="#c2410c">a</text>
                                <text x="62" y="78" text-anchor="middle" font-size="12" fill="#c2410c">b</text>
                                <text x="25" y="45" text-anchor="middle" font-size="12" fill="#c2410c">h</text>
                            </svg>
                            <div style='flex:1;'>
                                <h4 style='color:#c2410c; margin:0 0 5px 0;'>૧. સમલંબ ચતુષ્કોણ (Trapezium)</h4>
                                <p style='margin:0 0 8px 0; font-size:13px;'>જેની સામસામેની બાજુઓની માત્ર એક જ જોડ સમાંતર (a, b) હોય.</p>
                                <div style='background-color:white; text-align:center; padding:8px; border-radius:5px; border:2px dashed #ea580c; font-weight:bold; color:#1e3a8a; font-size:15px;'>
                                    ક્ષેત્રફળ = &frac12; &times; (a + b) &times; h
                                }
                                <p style='font-size:11px; margin:5px 0 0 0; color:#6b7280;'>= &frac12; &times; (સમાંતર બાજુઓનો સરવાળો) &times; ઊંચાઈ</p>
                            </div>
                        </div>
                    </div>

                    <!-- 2. સમબાજુ ચતુષ્કોણ -->
                    <div style='background-color:#f0fdf4; padding:15px; border-radius:10px; border:1px solid #16a34a; overflow-x:auto;'>
                        <div style='min-width:300px; display:flex; align-items:center; gap:15px;'>
                            <svg width="100" height="80" viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="50,5 95,40 50,75 5,40" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
                                <line x1="50" y1="5" x2="50" y2="75" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3"/>
                                <line x1="95" y1="40" x2="5" y2="40" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3"/>
                                <text x="45" y="45" text-anchor="middle" font-size="11" fill="#dc2626">d&sup1;</text>
                                <text x="70" y="38" text-anchor="middle" font-size="11" fill="#2563eb">d&sup2;</text>
                            </svg>
                            <div style='flex:1;'>
                                <h4 style='color:#166534; margin:0 0 5px 0;'>૨. સમબાજુ ચતુષ્કોણ (Rhombus)</h4>
                                <p style='margin:0 0 8px 0; font-size:13px;'>જેની ચારેય બાજુ સમાન હોય. d&sup1; અને d&sup2; વિકર્ણો છે.</p>
                                <div style='background-color:white; text-align:center; padding:8px; border-radius:5px; border:2px dashed #16a34a; font-weight:bold; color:#1e3a8a; font-size:15px;'>
                                    ક્ષેત્રફળ = &frac12; &times; d&sup1; &times; d&sup2;
                                </div>
                                <p style='font-size:11px; margin:5px 0 0 0; color:#6b7280;'>= &frac12; &times; (બે વિકર્ણોનો ગુણાકાર)</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 3. સામાન્ય ચતુષ્કોણ -->
                    <div style='background-color:#f0f9ff; padding:15px; border-radius:10px; border:1px solid #0284c7; overflow-x:auto;'>
                        <div style='min-width:300px; display:flex; align-items:center; gap:15px;'>
                            <svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="10,40 50,10 110,30 70,70" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                                <line x1="10" y1="40" x2="110" y2="30" stroke="#0284c7" stroke-width="1.5"/>
                                <line x1="50" y1="10" x2="57" y2="36" stroke="#0284c7" stroke-width="1" stroke-dasharray="3,3"/>
                                <line x1="70" y1="70" x2="45" y2="37" stroke="#0284c7" stroke-width="1" stroke-dasharray="3,3"/>
                                <text x="60" y="32" text-anchor="middle" font-size="11" fill="#0369a1">d</text>
                                <text x="60" y="20" text-anchor="middle" font-size="11" fill="#0369a1">h&sup1;</text>
                                <text x="63" y="55" text-anchor="middle" font-size="11" fill="#0369a1">h&sup2;</text>
                            </svg>
                            <div style='flex:1;'>
                                <h4 style='color:#0369a1; margin:0 0 5px 0;'>૩. સામાન્ય ચતુષ્કોણ</h4>
                                <p style='margin:0 0 8px 0; font-size:13px;'>વિકર્ણ d પર શિરોબિંદુમાંથી દોરેલા લંબ h&sup1; અને h&sup2; છે.</p>
                                <div style='background-color:white; text-align:center; padding:8px; border-radius:5px; border:2px dashed #0284c7; font-weight:bold; color:#1e3a8a; font-size:15px;'>
                                    ક્ષેત્રફળ = &frac12; &times; d &times; (h&sup1; + h&sup2;)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "ઘન આકારોનું પૃષ્ઠફળ (Surface Area of 3D Shapes)", 
                answer: `
                <p>ઘન આકારની બધી જ સપાટીઓના ક્ષેત્રફળોના સરવાળાને તેનું <b>કુલ પૃષ્ઠફળ (Total Surface Area)</b> કહે છે. જો માત્ર આજુબાજુની સપાટી જ લઈએ, તો તેને <b>પાર્શ્વ પૃષ્ઠફળ (Lateral Surface Area)</b> કહે છે.</p>
                
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:550px; font-size:14px;'>
                        <tr style='background-color:#be123c; color:white;'>
                            <th style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>આકાર</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>પરિમાણ</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>પાર્શ્વ પૃષ્ઠફળ (૪ દીવાલ)</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>કુલ પૃષ્ઠફળ</th>
                        </tr>
                        <tr style='background-color:#fff1f2;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="15" width="35" height="35" fill="none" stroke="#be123c" stroke-width="1.5"/>
                                    <rect x="20" y="5" width="35" height="35" fill="none" stroke="#be123c" stroke-width="1.5" opacity="0.5"/>
                                    <line x1="5" y1="15" x2="20" y2="5" stroke="#be123c" stroke-width="1.5"/>
                                    <line x1="40" y1="15" x2="55" y2="5" stroke="#be123c" stroke-width="1.5"/>
                                    <line x1="5" y1="50" x2="20" y2="40" stroke="#be123c" stroke-width="1.5"/>
                                    <line x1="40" y1="50" x2="55" y2="40" stroke="#be123c" stroke-width="1.5"/>
                                    <text x="22" y="52" text-anchor="middle" font-size="11" fill="#881337" font-weight="bold">l</text>
                                    <text x="48" y="47" text-anchor="middle" font-size="11" fill="#881337" font-weight="bold">l</text>
                                    <text x="58" y="25" text-anchor="middle" font-size="11" fill="#881337" font-weight="bold">l</text>
                                </svg><br><b style='color:#be123c;'>સમઘન (Cube)</b>
                            </td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>બધી બાજુ<br>સમાન (l)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold; font-size:16px;'>4l&sup2;</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold; font-size:16px;'>6l&sup2;</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="70" height="50" viewBox="0 0 70 50" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="15" width="45" height="25" fill="none" stroke="#be123c" stroke-width="1.5"/>
                                    <rect x="20" y="5" width="45" height="25" fill="none" stroke="#be123c" stroke-width="1.5" opacity="0.5"/>
                                    <line x1="5" y1="15" x2="20" y2="5" stroke="#be123c" stroke-width="1.5"/>
                                    <line x1="50" y1="15" x2="65" y2="5" stroke="#be123c" stroke-width="1.5"/>
                                    <line x1="5" y1="40" x2="20" y2="30" stroke="#be123c" stroke-width="1.5"/>
                                    <line x1="50" y1="40" x2="65" y2="30" stroke="#be123c" stroke-width="1.5"/>
                                    <text x="27" y="43" text-anchor="middle" font-size="10" fill="#881337" font-weight="bold">l</text>
                                    <text x="57" y="38" text-anchor="middle" font-size="10" fill="#881337" font-weight="bold">b</text>
                                    <text x="68" y="18" text-anchor="middle" font-size="10" fill="#881337" font-weight="bold">h</text>
                                </svg><br><b style='color:#be123c;'>લંબઘન (Cuboid)</b>
                            </td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>લંબાઈ (l)<br>પહોળાઈ (b)<br>ઊંચાઈ (h)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold; font-size:16px;'>2h(l + b)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold; font-size:16px;'>2(lb + bh + hl)</td>
                        </tr>
                        <tr style='background-color:#fff1f2;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="50" height="60" viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="25" cy="10" rx="15" ry="5" fill="none" stroke="#be123c" stroke-width="1.5"/>
                                    <ellipse cx="25" cy="50" rx="15" ry="5" fill="none" stroke="#be123c" stroke-width="1.5"/>
                                    <line x1="10" y1="10" x2="10" y2="50" stroke="#be123c" stroke-width="1.5"/>
                                    <line x1="40" y1="10" x2="40" y2="50" stroke="#be123c" stroke-width="1.5"/>
                                    <line x1="25" y1="10" x2="40" y2="10" stroke="#be123c" stroke-width="1" stroke-dasharray="2,2"/>
                                    <text x="32" y="9" text-anchor="middle" font-size="10" fill="#881337" font-weight="bold">r</text>
                                    <text x="7" y="30" text-anchor="middle" font-size="10" fill="#881337" font-weight="bold">h</text>
                                </svg><br><b style='color:#be123c;'>નળાકાર (Cylinder)</b>
                            </td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>ત્રિજ્યા (r)<br>ઊંચાઈ (h)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>વક્ર સપાટી:<br><span style='color:#ea580c; font-weight:bold; font-size:16px;'>2&pi;rh</span></td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold; font-size:16px;'>2&pi;r(r + h)</td>
                        </tr>
                    </table>
                </div>` 
            },
               { 
                thought: "Volume section. Draft formulas and diagrams for Cube, Cuboid, Cylinder.",
                question: "ઘન આકારોનું ઘનફળ (Volume of 3D Shapes)", 
                answer: `
                <p>કોઈ ઘન પદાર્થે અવકાશમાં રોકેલી જગ્યાને તેનું <b>ઘનફળ</b> કહે છે. ઘનફળના એકમો ઘન સેમી (cm&sup3;) અથવા ઘન મીટર (m&sup3;) માં હોય છે.</p>
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:400px; display:flex; gap:10px;'>
                        <!-- Cube/Cuboid Volume -->
                        <div style='flex:1; background-color:#eff6ff; border:1px solid #2563eb; border-radius:10px; padding:12px;'>
                            <div style='display:flex; align-items:center; gap:10px;'>
                                <svg width="50" height="50" viewBox="0 0 70 50" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="5" y="15" width="45" height="25" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5"/>
                                    <rect x="20" y="5" width="45" height="25" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" opacity="0.5"/>
                                    <line x1="5" y1="15" x2="20" y2="5" stroke="#2563eb" stroke-width="1.5"/>
                                    <line x1="50" y1="15" x2="65" y2="5" stroke="#2563eb" stroke-width="1.5"/>
                                    <line x1="5" y1="40" x2="20" y2="30" stroke="#2563eb" stroke-width="1.5"/>
                                    <line x1="50" y1="40" x2="65" y2="30" stroke="#2563eb" stroke-width="1.5"/>
                                </svg>
                                <div style='flex:1;'>
                                    <h4 style='color:#1e40af; margin:0;'>લંબઘનનું ઘનફળ</h4>
                                    <div style='background-color:white; text-align:center; padding:8px; margin-top:5px; border-radius:5px; border:2px dashed #2563eb; font-weight:bold; color:#ea580c; font-size:16px;'>
                                        V = l &times; b &times; h
                                    </div>
                                    <p style='margin:5px 0 0 0; font-size:12px; color:#4b5563;'>(સમઘન માટે: V = l&sup3;)</p>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Cylinder Volume -->
                        <div style='flex:1; background-color:#f0fdf4; border:1px solid #16a34a; border-radius:10px; padding:12px;'>
                            <div style='display:flex; align-items:center; gap:10px;'>
                                <svg width="40" height="50" viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg">
                                    <ellipse cx="25" cy="10" rx="15" ry="5" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
                                    <ellipse cx="25" cy="50" rx="15" ry="5" fill="#dcfce7" stroke="#16a34a" stroke-width="1.5"/>
                                    <line x1="10" y1="10" x2="10" y2="50" stroke="#16a34a" stroke-width="1.5"/>
                                    <line x1="40" y1="10" x2="40" y2="50" stroke="#16a34a" stroke-width="1.5"/>
                                </svg>
                                <div style='flex:1;'>
                                    <h4 style='color:#166534; margin:0;'>નળાકારનું ઘનફળ</h4>
                                    <div style='background-color:white; text-align:center; padding:8px; margin-top:5px; border-radius:5px; border:2px dashed #16a34a; font-weight:bold; color:#ea580c; font-size:16px;'>
                                        V = &pi;r&sup2;h
                                    </div>
                                    <p style='margin:5px 0 0 0; font-size:12px; color:#4b5563;'>(= આધારનું ક્ષેત્રફળ &times; ઊંચાઈ)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>` 
            },
            { 
                thought: "Volume and Capacity relationship, Liters conversion. Mobile-friendly format.",
                question: "ઘનફળ અને ધારિતા (Volume and Capacity) નો સંબંધ", 
                answer: `
                <div style='background-color:#fffbeb; padding:15px; border-radius:10px; border:1px solid #ca8a04;'>
                    <ul style='line-height:1.8; color:#1e3a8a; margin:0;'>
                        <li><b>ધારિતા (Capacity):</b> કોઈ વાસણમાં કેટલું પ્રવાહી સમાઈ શકે, તે માપને તેની ધારિતા કહે છે.</li>
                        <li>ઘનફળ અને ધારિતા વચ્ચેનો સંબંધ નીચે મુજબ છે, જે દાખલા ગણવા માટે ખૂબ જ મહત્વનો છે:</li>
                    </ul>
                    <div style='overflow-x:auto; margin-top:10px;'>
                        <div style='min-width:280px; display:flex; gap:10px; justify-content:center; text-align:center;'>
                            <div style='flex:1; background-color:white; padding:10px; border-radius:8px; border:2px solid #ca8a04; color:#b45309; font-weight:bold; font-size:15px;'>
                                1 લીટર = 1000 cm&sup3;
                            </div>
                            <div style='flex:1; background-color:white; padding:10px; border-radius:8px; border:2px solid #ca8a04; color:#b45309; font-weight:bold; font-size:15px;'>
                                1 m&sup3; = 1000 લીટર<br><span style='font-size:12px;'>(= 1 કિલોલીટર)</span>
                            </div>
                        </div>
                    </div>
                    <p style='margin:10px 0 0 0; font-size:13px; color:#ea580c; font-weight:bold; text-align:center;'>યાદ રાખો: 1 cm&sup3; = 1 mL</p>
                </div>` 
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 10: ઘાત અને ઘાતાંક
    // ------------------------------------
    "10": {
        "chapterName": "પ્રકરણ 10",
        "chapterTitle": "ઘાત અને ઘાતાંક",
        "qa_list": [
            { 
                question: "ઘાત અને ઘાતાંકનો પરિચય (Introduction)", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <p style='color:#1e3a8a; margin-top:0;'>જ્યારે એકની એક સંખ્યાનો વારંવાર ગુણાકાર કરવામાં આવે, ત્યારે તેને ટૂંકમાં દર્શાવવાની રીતને <b>ઘાત સ્વરૂપ</b> કહે છે.</p>
                </div>
                
                <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                    <div style='min-width:300px; background-color:#f8fafc; padding:15px; border-radius:10px; border:1px solid #cbd5e1; display:inline-block;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>ઉદાહરણ: 2 &times; 2 &times; 2 &times; 2 &times; 2 = <span style='font-size:1.2em;'>2<sup>5</sup></span></h4>
                        <svg width="220" height="120" viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg">
                            <!-- Arrow Defs -->
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="#6b7280" />
                                </marker>
                            </defs>
                            
                            <!-- Base/Exponent Text -->
                            <text x="110" y="70" text-anchor="middle" font-size="48" font-weight="bold" fill="#1e3a8a">2<tspan dy="-20" font-size="24" fill="#ea580c">5</tspan></text>
                            
                            <!-- Label Exponent -->
                            <text x="170" y="30" font-size="14" fill="#c2410c" font-weight="bold">ઘાતાંક</text>
                            <text x="170" y="45" font-size="11" fill="#6b7280">(Exponent)</text>
                            <path d="M 165 30 L 130 45" stroke="#6b7280" stroke-width="1.5" fill="none" marker-end="url(#arrowhead)"/>

                            <!-- Label Base -->
                            <text x="50" y="90" font-size="14" fill="#0369a1" font-weight="bold">આધાર</text>
                            <text x="50" y="105" font-size="11" fill="#6b7280">(Base)</text>
                            <path d="M 60 90 L 95 75" stroke="#6b7280" stroke-width="1.5" fill="none" marker-end="url(#arrowhead)"/>
                        </svg>
                        <p style='margin:10px 0 0 0; color:#1e3a8a; font-weight:bold;'>2<sup>5</sup> ને "બેની પાંચ ઘાત" વંચાય.</p>
                    </div>
                </div>` 
            },
            { 
                question: "ઋણ ઘાતાંક (Negative Exponents)", 
                answer: `
                <p>જો કોઈ શૂન્યતર પૂર્ણાંક a માટે ઘાતાંક ઋણ હોય, તો તે તે જ સંખ્યાના ધન ઘાતાંકનો <b>વ્યસ્ત</b> દર્શાવે છે.</p>
                <div style='background-color:#fff1f2; padding:15px; border-radius:10px; border:2px solid #be123c; text-align:center;'>
                    <h3 style='color:#881337; margin:0 0 10px 0;'>વ્યાપક સૂત્ર (જ્યાં m ધન પૂર્ણાંક છે)</h3>
                    <div style='background-color:white; padding:15px; border-radius:8px; border:2px dashed #be123c; display:inline-block;'>
                        <img src="https://latex.codecogs.com/svg.image?\dpi{150}&space;a^{-m}=\frac{1}{a^m}" title="a^{-m}=\frac{1}{a^m}" />
                    </div>
                    <div style='margin-top:15px; font-size:14px; text-align:left; color:#1e3a8a; border-top:1px solid #fecaca; padding-top:10px;'>
                        <b>ઉદાહરણ:</b><br>
                        ૧) 3<sup>-2</sup> = 1 / 3&sup2; = 1 / 9<br>
                        ૨) (2/3)<sup>-4</sup> = (3/2)<sup>4</sup> = 3<sup>4</sup> / 2<sup>4</sup> <span style='color:#6b7280;'>(અંશ અને છેદ ઉલટાવી ધન ઘાત કરવી)</span>
                    </div>
                </div>` 
            },
            { 
                question: "ઘાતાંકના નિયમો (Laws of Exponents)", 
                answer: `
                <p>ધારો કે <b>a</b> અને <b>b</b> શૂન્યતર પૂર્ણાંક સંખ્યાઓ છે, અને <b>m</b> તથા <b>n</b> પૂર્ણાંક સંખ્યાઓ છે. તો નીચેના નિયમો જળવાય છે:</p>
                
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:500px; font-size:14px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>નિયમનું નામ</th>
                            <th style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>સૂત્ર (ઘાતાંકના રૂપમાં)</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>સમજૂતી (ગુજરાતીમાં)</th>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>૧. ગુણાકારનો નિયમ</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold; font-size:16px; text-align:center;'>a<sup>m</sup> &times; a<sup>n</sup> = a<sup>m+n</sup></td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>આધાર સમાન હોય ત્યારે ગુણાકારમાં ઘાતાંકોનો <b>સરવાળો</b> થાય.</td>
                        </tr>
                        <tr style='background-color:#f0f9ff;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>૨. ભાગાકારનો નિયમ</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold; font-size:16px; text-align:center;'>a<sup>m</sup> &divide; a<sup>n</sup> = a<sup>m-n</sup></td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>આધાર સમાન હોય ત્યારે ભાગાકારમાં ઘાતાંકોની <b>બાદબાકી</b> થાય.</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>૩. ઘાતની ઘાતનો નિયમ</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold; font-size:16px; text-align:center;'>(a<sup>m</sup>)<sup>n</sup> = a<sup>m&times;n</sup></td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>ઘાતની ઉપર ઘાત હોય ત્યારે ઘાતાંકોનો <b>ગુણાકાર</b> થાય.</td>
                        </tr>
                        <tr style='background-color:#f0f9ff;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>૪. ગુણાકાર પર સમાન ઘાત</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold; font-size:16px; text-align:center;'>a<sup>m</sup> &times; b<sup>m</sup> = (ab)<sup>m</sup></td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>ઘાત સમાન હોય પણ આધાર અલગ હોય, ત્યારે આધારનો ગુણાકાર કરી કૌંસ પર ઘાત મુકાય.</td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>૫. ભાગાકાર પર સમાન ઘાત</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold; font-size:16px; text-align:center;'>a<sup>m</sup> &divide; b<sup>m</sup> = (a/b)<sup>m</sup></td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>ઘાત સમાન હોય પણ આધાર અલગ હોય, ત્યારે કૌંસમાં ભાગાકાર કરી ઘાત મુકાય.</td>
                        </tr>
                        <tr style='background-color:#fef3c7;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b45309;'>૬. શૂન્ય ઘાતાંકનો નિયમ</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#dc2626; font-weight:bold; font-size:18px; text-align:center;'>a<sup>0</sup> = 1</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#dc2626;'>કોઈપણ શૂન્યતર સંખ્યાની શૂન્ય ઘાત હંમેશા <b>1</b> જ થાય.</td>
                        </tr>
                    </table>
                </div>` 
            },
            { 
                question: "ખૂબ મોટી અને ખૂબ નાની સંખ્યાઓને પ્રમાણિત સ્વરૂપમાં દર્શાવવી", 
                answer: `
                <p>વિજ્ઞાન અને ગણિતમાં ખૂબ મોટી સંખ્યાઓ (દા.ત. સૂર્યનું અંતર) અથવા ખૂબ નાની સંખ્યાઓ (દા.ત. રક્તકણનું કદ) વાંચવામાં અને લખવામાં તકલીફ પડે છે. તેને સરળ બનાવવા <b>પ્રમાણિત સ્વરૂપ (Scientific Notation)</b> વપરાય છે.</p>
                
                <div style='background-color:#f8fafc; padding:15px; border-radius:10px; border:1px solid #cbd5e1; margin-bottom:10px;'>
                    <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>વ્યાપક સ્વરૂપ: <span style='font-size:1.1em; color:#ea580c;'>k &times; 10<sup>n</sup></span></h4>
                    <p style='margin:0; font-size:13px; color:#4b5563;'>જ્યાં, 1 &le; k < 10 (એટલે કે k એ 1 અને 10 ની વચ્ચેની દશાંશ સંખ્યા છે) અને n એ પૂર્ણાંક ઘાતાંક છે.</p>
                </div>

                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <!-- Large Numbers -->
                    <div style='background-color:#f0fdf4; border:1px solid #16a34a; border-radius:8px; padding:12px; overflow-x:auto;'>
                        <h4 style='color:#166534; margin:0 0 5px 0;'>૧. ખૂબ મોટી સંખ્યાઓ (ધન ઘાતાંક)</h4>
                        <p style='margin:0 0 10px 0; font-size:13px;'>દશાંશ ચિહ્નને ડાબી બાજુ ખસેડવામાં આવે છે.</p>
                        <div style='display:flex; align-items:center; gap:15px; min-width:300px;'>
                            <div style='font-family:monospace; font-size:16px; color:#1e3a8a;'>
                                150,000,000,000
                            </div>
                            <svg width="40" height="30" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 35 15 L 10 15" stroke="#6b7280" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
                                <text x="22" y="10" text-anchor="middle" font-size="10" fill="#6b7280">ડાબી બાજુ</text>
                            </svg>
                            <div style='font-family:monospace; font-size:16px; color:#16a34a; font-weight:bold;'>
                                1.5 &times; 10<sup>11</sup>
                            </div>
                        </div>
                    </div>

                    <!-- Small Numbers -->
                    <div style='background-color:#fee2e2; border:1px solid #ef4444; border-radius:8px; padding:12px; overflow-x:auto;'>
                        <h4 style='color:#b91c1c; margin:0 0 5px 0;'>૨. ખૂબ નાની સંખ્યાઓ (ઋણ ઘાતાંક)</h4>
                        <p style='margin:0 0 10px 0; font-size:13px;'>દશાંશ ચિહ્નને જમણી બાજુ ખસેડવામાં આવે છે.</p>
                        <div style='display:flex; align-items:center; gap:15px; min-width:300px;'>
                            <div style='font-family:monospace; font-size:16px; color:#1e3a8a;'>
                                0.000000007
                            </div>
                            <svg width="40" height="30" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 10 15 L 35 15" stroke="#6b7280" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
                                <text x="22" y="10" text-anchor="middle" font-size="10" fill="#6b7280">જમણી બાજુ</text>
                            </svg>
                            <div style='font-family:monospace; font-size:16px; color:#dc2626; font-weight:bold;'>
                                7.0 &times; 10<sup>-9</sup>
                            </div>
                        </div>
                    </div>
                </div>` 
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 11: સમપ્રમાણ અને વ્યસ્ત પ્રમાણ
    // ------------------------------------
    "11": {
        "chapterName": "પ્રકરણ 11",
        "chapterTitle": "સમપ્રમાણ અને વ્યસ્ત પ્રમાણ",
        "qa_list": [
            { 
                question: "ચલન (Variation) નો પરિચય", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <p style='color:#1e3a8a; margin-top:0;'>રોજિંદા જીવનમાં આપણે જોઈએ છીએ કે એક રાશિના માપમાં ફેરફાર થવાથી તેને સંબંધિત બીજી રાશિના માપમાં પણ ફેરફાર થાય છે. આ સંબંધને <b>ચલન</b> કહે છે.</p>
                    <p style='margin:0; font-size:14px; color:#4b5563;'>દા.ત. જો તમે વધારે પુસ્તકો ખરીદો, તો તમારે વધારે કિંમત ચૂકવવી પડશે.</p>
                </div>
                
                <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                    <svg width="320" height="100" viewBox="0 0 320 100" xmlns="http://www.w3.org/2000/svg">
                        <!-- Book Icon -->
                        <rect x="20" y="20" width="40" height="50" rx="2" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                        <line x1="30" y1="30" x2="50" y2="30" stroke="#2563eb" stroke-width="1"/>
                        <line x1="30" y1="40" x2="50" y2="40" stroke="#2563eb" stroke-width="1"/>
                        
                        <text x="80" y="55" font-size="24" fill="#6b7280">&#10142;</text>
                        
                        <!-- Rupee Icon -->
                        <circle cx="140" cy="45" r="25" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
                        <text x="140" y="55" text-anchor="middle" font-size="30" font-weight="bold" fill="#b45309">₹</text>
                        
                        <text x="180" y="55" font-size="24" fill="#6b7280">&#10142;</text>
                        
                        <!-- More Books -->
                        <rect x="230" y="10" width="40" height="50" rx="2" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                        <rect x="240" y="20" width="40" height="50" rx="2" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                        <rect x="250" y="30" width="40" height="50" rx="2" fill="#bfdbfe" stroke="#2563eb" stroke-width="2"/>
                        
                        <text x="40" y="85" text-anchor="middle" font-size="12" fill="#1e3a8a">ઓછી વસ્તુ</text>
                        <text x="140" y="85" text-anchor="middle" font-size="12" fill="#1e3a8a">ચલન</text>
                        <text x="250" y="95" text-anchor="middle" font-size="12" fill="#1e3a8a">વધારે વસ્તુ</text>
                    </svg>
                </div>` 
            },
            { 
                question: "સમપ્રમાણ (Direct Proportion)", 
                answer: `
                <div style='background-color:#f0fdf4; padding:15px; border-radius:10px; border:2px solid #16a34a; overflow-x:auto;'>
                    <p style='margin-top:0; color:#166534;'><b>વ્યાખ્યા:</b> જ્યારે બે રાશિઓ x અને y એવા સંબંધમાં હોય કે જેથી <b>x વધે ત્યારે y પણ વધે</b> અને <b>x ઘટે ત્યારે y પણ ઘટે</b>, પરંતુ તેમનો <b>ગુણોત્તર (x/y) અચળ</b> રહે, તો તેઓ સમપ્રમાણમાં છે તેમ કહેવાય.</p>
                    
                    <div style='display:flex; align-items:center; gap:15px; min-width:300px; margin-top:10px;'>
                        <div style='background-color:white; padding:10px; border-radius:8px; border:2px dashed #16a34a; text-align:center;'>
                            <span style='font-size:12px; color:#6b7280;'>અચળ ગુણોત્તર</span><br>
                            <img src="https://latex.codecogs.com/svg.image?\dpi{130}&space;\frac{x}{y}=k" title="\frac{x}{y}=k" />
                        </div>
                        <div style='flex:1; border-left:2px solid #16a34a; padding-left:15px;'>
                            <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>ગણતરી માટેનું સૂત્ર:</h4>
                            <img src="https://latex.codecogs.com/svg.image?\dpi{130}&space;\frac{x_1}{y_1}=\frac{x_2}{y_2}" title="\frac{x_1}{y_1}=\frac{x_2}{y_2}" />
                        </div>
                    </div>
                    
                    <div style='background-color:white; padding:10px; border-radius:5px; margin-top:10px; font-size:13px; color:#1e3a8a; border:1px solid #cbd5e1;'>
                        <b>ઉદાહરણ:</b> જો 5 પેનની કિંમત ₹25 હોય, તો 10 પેનની કિંમત શોધો.<br>
                        અહીં, પેનની સંખ્યા (x) વધે તો કિંમત (y) પણ વધશે. ➔ 5/25 = 10/y&sup2; ➔ y&sup2; = 10 &times; 25 / 5 = <b style='color:#16a34a;'>₹50</b>.
                    </div>
                </div>` 
            },
            { 
                question: "વ્યસ્ત પ્રમાણ (Inverse Proportion)", 
                answer: `
                <div style='background-color:#fff1f2; padding:15px; border-radius:10px; border:2px solid #be123c; overflow-x:auto;'>
                    <p style='margin-top:0; color:#881337;'><b>વ્યાખ્યા:</b> જ્યારે બે રાશિઓ x અને y એવા સંબંધમાં હોય કે જેથી <b>x વધે ત્યારે y ઘટે</b> અને <b>x ઘટે ત્યારે y વધે</b>, પરંતુ તેમનો <b>ગુણાકાર (x &times; y) અચળ</b> રહે, તો તેઓ વ્યસ્ત પ્રમાણમાં છે તેમ કહેવાય.</p>
                    
                    <div style='display:flex; align-items:center; gap:15px; min-width:300px; margin-top:10px;'>
                        <div style='background-color:white; padding:10px; border-radius:8px; border:2px dashed #be123c; text-align:center;'>
                            <span style='font-size:12px; color:#6b7280;'>અચળ ગુણાકાર</span><br>
                            <img src="https://latex.codecogs.com/svg.image?\dpi{130}&space;x\times&space;y=k" title="x\times y=k" />
                        </div>
                        <div style='flex:1; border-left:2px solid #be123c; padding-left:15px;'>
                            <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>ગણતરી માટેનું સૂત્ર:</h4>
                            <img src="https://latex.codecogs.com/svg.image?\dpi{130}&space;x_1\times&space;y_1=x_2\times&space;y_2" title="x_1\times y_1=x_2\times y_2" />
                        </div>
                    </div>
                    
                    <div style='background-color:white; padding:10px; border-radius:5px; margin-top:10px; font-size:13px; color:#1e3a8a; border:1px solid #cbd5e1;'>
                        <b>ઉદાહરણ:</b> એક કામ પૂરું કરવા 4 મજૂરને 8 દિવસ લાગે છે. જો 8 મજૂર રાખવામાં આવે, તો કેટલા દિવસ લાગે?<br>
                        અહીં, મજૂરની સંખ્યા (x) વધે તો દિવસો (y) ઘટશે. ➔ 4 &times; 8 = 8 &times; y&sup2; ➔ y&sup2; = 4 &times; 8 / 8 = <b style='color:#dc2626;'>4 દિવસ</b>.
                    </div>
                </div>` 
            },
            { 
                question: "સમપ્રમાણ અને વ્યસ્ત પ્રમાણની તુલના", 
                answer: `
                <p>બંને પ્રકારના ચલનને સમજવા માટે નીચેનું કોષ્ટક અને આકૃતિઓ જુઓ. મોબાઈલમાં જમણી બાજુ સ્ક્રોલ કરીને પૂરો કોઠો જુઓ.</p>
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:500px; font-size:14px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>લક્ષણ</th>
                            <th style='padding:10px; border:1px solid #cbd5e1; background-color:#16a34a;'>સમપ્રમાણ</th>
                            <th style='padding:10px; border:1px solid #cbd5e1; background-color:#dc2626;'>વ્યસ્ત પ્રમાણ</th>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>ફેરફારની દિશા</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#166534;'>x વધે ➔ y વધે<br>x ઘટે ➔ y ઘટે</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#991b1b;'>x વધે ➔ y ઘટે<br>x ઘટે ➔ y વધે</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>અચળ શું રહે?</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>ગુણોત્તર <b style='color:#16a34a;'>x/y = k</b></td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>ગુણાકાર <b style='color:#dc2626;'>x&times;y = k</b></td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>સૂત્ર</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>
                                <img src="https://latex.codecogs.com/svg.image?\dpi{100}&space;\frac{x_1}{y_1}=\frac{x_2}{y_2}" title="\frac{x_1}{y_1}=\frac{x_2}{y_2}" />
                            </td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>
                                <img src="https://latex.codecogs.com/svg.image?\dpi{100}&space;x_1\times&space;y_1=x_2\times&space;y_2" title="x_1\times y_1=x_2\times y_2" />
                            </td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>ગ્રાફનું સ્વરૂપ (ખ્યાલ)</td>
                            <td style='padding:5px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="80" height="60" viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="50" x2="70" y2="50" stroke="#6b7280" stroke-width="1.5"/>
                                    <line x1="10" y1="50" x2="10" y2="10" stroke="#6b7280" stroke-width="1.5"/>
                                    <line x1="10" y1="50" x2="60" y2="10" stroke="#16a34a" stroke-width="2"/>
                                    <text x="40" y="58" text-anchor="middle" font-size="10" fill="#1e3a8a">x</text>
                                    <text x="6" y="30" text-anchor="middle" font-size="10" fill="#1e3a8a" transform="rotate(-90 6 30)">y</text>
                                </svg>
                            </td>
                            <td style='padding:5px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="80" height="60" viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="50" x2="70" y2="50" stroke="#6b7280" stroke-width="1.5"/>
                                    <line x1="10" y1="50" x2="10" y2="10" stroke="#6b7280" stroke-width="1.5"/>
                                    <path d="M 15 15 C 20 35, 35 45, 65 48" fill="none" stroke="#dc2626" stroke-width="2"/>
                                    <text x="40" y="58" text-anchor="middle" font-size="10" fill="#1e3a8a">x</text>
                                    <text x="6" y="30" text-anchor="middle" font-size="10" fill="#1e3a8a" transform="rotate(-90 6 30)">y</text>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>ઉદાહરણો</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>વસ્તુની સંખ્યા અને કિંમત.<br>વાહનની ઝડપ અને કાપેલું અંતર (અચળ સમયમાં).</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>વાહનની ઝડપ અને લાગતો સમય (અચળ અંતર માટે).<br>મજૂરની સંખ્યા અને કામ પૂરું કરવાના દિવસો.</td>
                        </tr>
                    </table>
                </div>` 
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 12: અવયવીકરણ
    // ------------------------------------
    "12": {
        "chapterName": "પ્રકરણ 12",
        "chapterTitle": "અવયવીકરણ",
        "qa_list": [
            { 
                question: "અવયવીકરણ એટલે શું? (પરિચય)", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <p style='color:#1e3a8a; margin-top:0;'><b>વ્યાખ્યા:</b> જ્યારે કોઈ બૈજિક પદાવલિને તેના <b>અવયવોના ગુણાકાર સ્વરૂપે</b> લખવામાં આવે, ત્યારે તે ક્રિયાને <b>અવયવીકરણ</b> કહે છે. આ અવયવો સંખ્યા, ચલ કે પદાવલિ સ્વરૂપે હોઈ શકે છે.</p>
                </div>
                
                <div style='text-align:center; margin: 15px 0; overflow-x:auto;'>
                    <div style='min-width:300px; background-color:#f8fafc; padding:15px; border-radius:10px; border:1px solid #cbd5e1; display:inline-block;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>પ્રક્રિયાની સમજ</h4>
                        <svg width="280" height="80" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
                            <!-- Expansion Arrow -->
                            <path d="M 50 20 L 230 20" stroke="#6b7280" stroke-width="1.5" fill="none" marker-end="url(#arrowhead)"/>
                            <text x="140" y="15" text-anchor="middle" font-size="12" fill="#6b7280">ગુણાકાર (વિસ્તરણ)</text>
                            
                            <!-- Expression -->
                            <text x="50" y="50" text-anchor="middle" font-size="18" font-weight="bold" fill="#ea580c">2x(x + 3)</text>
                            <text x="140" y="50" text-anchor="middle" font-size="18" font-weight="bold" fill="#6b7280">=</text>
                            <text x="230" y="50" text-anchor="middle" font-size="18" font-weight="bold" fill="#1e3a8a">2x&sup2; + 6x</text>
                            
                            <!-- Factorisation Arrow -->
                            <path d="M 230 70 L 50 70" stroke="#16a34a" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
                            <text x="140" y="65" text-anchor="middle" font-size="12" fill="#166534" font-weight="bold">અવયવીકરણ</text>
                            
                            <!-- Arrow Defs -->
                            <defs>
                                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                    <polygon points="0 0, 10 3.5, 0 7" fill="context-stroke" />
                                </marker>
                            </defs>
                        </svg>
                        <p style='margin:10px 0 0 0; font-size:13px; color:#4b5563;'>અવયવીકરણ એ ગુણાકાર (વિસ્તરણ) થી <b>ઉલ્ટી પ્રક્રિયા</b> છે.</p>
                    </div>
                </div>` 
            },
            { 
                question: "રીત ૧: સામાન્ય અવયવ કાઢવાની રીત (Method of Common Factors)", 
                answer: `
                <p>આ રીતમાં પદાવલિના દરેક પદના અવિભાજ્ય અવયવો પાડી, તેમાંથી <b>સમાન (સામાન્ય)</b> હોય તેવા અવયવોને કૌંસની બહાર કાઢવામાં આવે છે.</p>
                
                <div style='background-color:#f0fdf4; padding:15px; border-radius:10px; border:1px solid #16a34a; overflow-x:auto;'>
                    <b style='color:#166534; font-size:15px;'>દાખલો: 12x + 36 નું અવયવીકરણ કરો.</b>
                    <div style='font-family:monospace; font-size:15px; color:#1e3a8a; margin-top:10px; line-height:1.6;'>
                        ૧. પદોના અવયવો પાડો:<br>
                        &nbsp;&nbsp;&nbsp;12x = <u style='color:#ea580c; font-weight:bold;'>2 &times; 2 &times; 3</u> &times; x<br>
                        &nbsp;&nbsp;&nbsp;36 &nbsp;= <u style='color:#ea580c; font-weight:bold;'>2 &times; 2 &times; 3</u> &times; 3<br>
                        <br>
                        ૨. સામાન્ય અવયવ = 2 &times; 2 &times; 3 = <b style='color:#ea580c;'>12</b><br>
                        <br>
                        ૩. પદાવલિમાં કિંમત મૂકો:<br>
                        &nbsp;&nbsp;&nbsp;12x + 36 = (12 &times; x) + (12 &times; 3)<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= <b style='color:#16a34a; font-size:1.2em;'>12(x + 3)</b> <span style='color:#6b7280; font-family:sans-serif; font-size:12px;'>(જવાબ)</span>
                    </div>
                </div>` 
            },
            { 
                question: "રીત ૨: પદોની ફરીથી ગોઠવણી દ્વારા (By Regrouping Terms)", 
                answer: `
                <p>જ્યારે પદાવલિના બધા જ પદોમાં કોઈ સામાન્ય અવયવ ન હોય, ત્યારે <b>બબ્બે પદોના જૂથ</b> બનાવી, તે જૂથમાંથી સામાન્ય અવયવ કાઢવામાં આવે છે.</p>
                
                <div style='background-color:#fff7ed; padding:15px; border-radius:10px; border:1px solid #f97316; overflow-x:auto;'>
                    <b style='color:#c2410c; font-size:15px;'>દાખલો: 2xy + 3x + 2y + 3 નું અવયવીકરણ કરો.</b>
                    <div style='font-family:monospace; font-size:15px; color:#1e3a8a; margin-top:10px; line-height:1.6;'>
                        ૧. બબ્બેના જૂથ બનાવો:<br>
                        &nbsp;&nbsp;&nbsp;= (<span style='background-color:#fef3c7;'>2xy + 3x</span>) + (<span style='background-color:#e0f2fe;'>2y + 3</span>)<br>
                        <br>
                        ૨. દરેક જૂથમાંથી સામાન્ય કાઢો:<br>
                        &nbsp;&nbsp;&nbsp;= <b style='color:#ea580c;'>x</b>(2y + 3) + <b style='color:#ea580c;'>1</b>(2y + 3)<br>
                        <br>
                        ૩. હવે સામાન્ય કૌંસ (2y + 3) બહાર કાઢો:<br>
                        &nbsp;&nbsp;&nbsp;= <b style='color:#16a34a; font-size:1.2em;'>(2y + 3)(x + 1)</b> <span style='color:#6b7280; font-family:sans-serif; font-size:12px;'>(જવાબ)</span>
                    </div>
                </div>` 
            },
            { 
                question: "રીત ૩: નિત્યસમોના ઉપયોગ દ્વારા (Using Identities)", 
                answer: `
                <p>જો પદાવલિ પ્રમાણિત નિત્યસમ જેવા સ્વરૂપમાં હોય, તો તેના અવયવો સીધા જ સૂત્ર મુજબ પાડી શકાય છે. (જુઓ પ્રકરણ ૮)</p>
                
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <div style='min-width:320px; display:flex; flex-direction:column; gap:10px;'>
                        <!-- Identity 1 & 2 -->
                        <div style='background-color:#eff6ff; border:1px solid #2563eb; border-radius:8px; padding:12px;'>
                            <h4 style='color:#1e40af; margin:0 0 8px 0;'>A) પૂર્ણવર્ગ ત્રિપદીના અવયવ</h4>
                            <div style='font-size:15px; color:#1e3a8a; font-family:monospace; background-color:white; padding:10px; border-radius:5px; border:1px dashed #60a5fa;'>
                                a&sup2; + 2ab + b&sup2; = <b style='color:#16a34a;'>(a + b)&sup2;</b><br>
                                a&sup2; - 2ab + b&sup2; = <b style='color:#16a34a;'>(a - b)&sup2;</b>
                            </div>
                            <p style='margin:8px 0 0 0; font-size:12px; color:#4b5563;'>દા.ત. x&sup2; + 10x + 25 = x&sup2; + 2(x)(5) + 5&sup2; = <b style='color:#1e3a8a;'>(x + 5)&sup2;</b></p>
                        </div>

                        <!-- Identity 3 -->
                        <div style='background-color:#fee2e2; border:1px solid #ef4444; border-radius:8px; padding:12px;'>
                            <h4 style='color:#b91c1c; margin:0 0 8px 0;'>B) બે વર્ગોના તફાવતની રીત</h4>
                            <div style='font-size:16px; color:#1e3a8a; font-family:monospace; background-color:white; padding:10px; border-radius:5px; border:1px dashed #f87171;'>
                                a&sup2; - b&sup2; = <b style='color:#dc2626;'>(a - b)(a + b)</b>
                            </div>
                            <p style='margin:8px 0 0 0; font-size:12px; color:#4b5563;'>દા.ત. 49x&sup2; - 36 = (7x)&sup2; - 6&sup2; = <b style='color:#1e3a8a;'>(7x - 6)(7x + 6)</b></p>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "બહુપદીઓનો ભાગાકાર (Division of Polynomials)", 
                answer: `
                <p>બહુપદીઓના ભાગાકારમાં પણ પદાવલિના <b>અવયવો પાડીને</b> છેદ ઉડાડવાની રીત સૌથી સરળ છે.</p>
                
                <div style='display:flex; flex-direction:column; gap:10px; overflow-x:auto;'>
                    <!-- Monomial by Monomial -->
                    <div style='min-width:300px; background-color:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; padding:12px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>૧. એકપદીનો એકપદી વડે ભાગાકાર</h4>
                        <div style='display:flex; align-items:center; gap:10px; font-family:monospace; font-size:15px;'>
                            <div style='text-align:center;'>6x&sup3; &divide; 2x</div>
                            <div style='font-size:20px; color:#6b7280;'>&#10142;</div>
                            <div style='text-align:center;'>
                                <div style='border-bottom:1px solid #6b7280;'> (2&times;3) &times; (x&times;x&times;x) </div>
                                <div> 2 &times; x </div>
                            </div>
                            <div style='font-size:20px; color:#6b7280;'>&#10142;</div>
                            <div style='color:#16a34a; font-weight:bold; font-size:16px;'>3x&sup2;</div>
                        </div>
                    </div>
                    
                    <!-- Polynomial by Monomial -->
                    <div style='min-width:300px; background-color:#fffbeb; border:1px solid #f59e0b; border-radius:8px; padding:12px;'>
                        <h4 style='color:#b45309; margin:0 0 8px 0;'>૨. બહુપદીનો એકપદી વડે ભાગાકાર</h4>
                        <p style='margin:0 0 8px 0; font-size:13px;'>અંશમાંથી સામાન્ય અવયવ કાઢીને છેદ સાથે ઉડાડવો.</p>
                        <div style='display:flex; align-items:center; gap:10px; font-family:monospace; font-size:15px; background-color:white; padding:8px; border-radius:5px;'>
                            <div style='text-align:center;'>
                                <div style='border-bottom:1px solid #6b7280;'>(5x&sup2; - 6x)</div>
                                <div>3x</div>
                            </div>
                            <div style='font-size:18px; color:#6b7280;'>=</div>
                            <div style='text-align:center;'>
                                <div style='border-bottom:1px solid #6b7280;'>x(5x - 6)</div>
                                <div>3x</div>
                            </div>
                            <div style='font-size:18px; color:#6b7280;'>=</div>
                            <div style='color:#ea580c; font-weight:bold;'>
                                <div style='border-bottom:1px solid #ea580c;'>(5x - 6)</div>
                                <div>3</div>
                            </div>
                        </div>
                    </div>
                </div>` 
            }
        ]
    },
        
    // ------------------------------------
    // ધોરણ 8 - પ્રકરણ 13: આલેખનો પરિચય
    // ------------------------------------
    "13": {
        "chapterName": "પ્રકરણ 13",
        "chapterTitle": "આલેખનો પરિચય",
        "qa_list": [
            { 
                question: "આલેખનો હેતુ અને વિવિધ પ્રકારો (Purpose & Types of Graphs)", 
                answer: `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px; margin-bottom:15px;'>
                    <p style='color:#1e3a8a; margin-top:0;'><b>હેતુ:</b> એકત્રિત કરેલી માહિતી (ડેટા) ને દ્રશ્ય સ્વરૂપે રજૂ કરવા માટે આલેખનો ઉપયોગ થાય છે. આલેખ દ્વારા માહિતીને ઝડપથી, સરળતાથી સમજી શકાય છે અને બે માહિતી વચ્ચેની તુલના પણ કરી શકાય છે.</p>
                </div>
                
                <p>આપણે અગાઉ શીખેલા આલેખના પ્રકારોનું પુનરાવર્તન કોષ્ટક અને આકૃતિ દ્વારા જુઓ (મોબાઈલમાં જમણી બાજુ સ્ક્રોલ કરો):</p>
                
                <div style='overflow-x:auto; padding-bottom:10px;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:500px; font-size:13px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>આલેખનો પ્રકાર</th>
                            <th style='padding:10px; border:1px solid #cbd5e1;'>ઉપયોગ / સમજૂતી</th>
                            <th style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>નમૂનો (SVG)</th>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#1e3a8a;'>૧. લખાલેખ<br>(Bar Graph)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>જુદી જુદી શ્રેણીઓ (categories) વચ્ચેની <b>તુલના</b> કરવા માટે વપરાય છે. આમાં સમાન પહોળાઈના ઊભા કે આડા સ્તંભો હોય છે.</td>
                            <td style='padding:5px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="80" height="60" viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="50" x2="70" y2="50" stroke="#6b7280" stroke-width="1.5"/>
                                    <line x1="10" y1="50" x2="10" y2="10" stroke="#6b7280" stroke-width="1.5"/>
                                    <rect x="20" y="30" width="10" height="20" fill="#60a5fa" stroke="#2563eb"/>
                                    <rect x="40" y="15" width="10" height="35" fill="#60a5fa" stroke="#2563eb"/>
                                    <rect x="60" y="25" width="10" height="25" fill="#60a5fa" stroke="#2563eb"/>
                                </svg>
                            </td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#b91c1c;'>૨. વર્તુળ આલેખ<br>(Pie Chart)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1; color:#991b1b;'>માહિતીના <b>જૂથો વચ્ચેનો સંબંધ</b> અથવા સમગ્ર (Total) ના ભાગ તરીકે માહિતી દર્શાવવા વપરાય છે.</td>
                            <td style='padding:5px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="30" cy="30" r="25" fill="none" stroke="#dc2626" stroke-width="1.5"/>
                                    <path d="M 30 30 L 30 5 A 25 25 0 0 1 55 30 Z" fill="#fecaca"/>
                                    <path d="M 30 30 L 55 30 A 25 25 0 0 1 30 55 Z" fill="#fee2e2"/>
                                    <line x1="30" y1="30" x2="5" y2="30" stroke="#dc2626"/>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold; color:#166534;'>૩. સ્તંભાલેખ<br>(Histogram)</td>
                            <td style='padding:10px; border:1px solid #cbd5e1;'>જ્યારે માહિતી <b>વર્ગીકૃત (continuous classes)</b> હોય ત્યારે વપરાય છે. આમાં સ્તંભો વચ્ચે જગ્યા હોતી નથી.</td>
                            <td style='padding:5px; border:1px solid #cbd5e1; text-align:center;'>
                                <svg width="80" height="60" viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="10" y1="50" x2="70" y2="50" stroke="#6b7280" stroke-width="1.5"/>
                                    <line x1="10" y1="50" x2="10" y2="10" stroke="#6b7280" stroke-width="1.5"/>
                                    <rect x="15" y="30" width="15" height="20" fill="#a7f3d0" stroke="#16a34a"/>
                                    <rect x="30" y="15" width="15" height="35" fill="#a7f3d0" stroke="#16a34a"/>
                                    <rect x="45" y="20" width="15" height="30" fill="#a7f3d0" stroke="#16a34a"/>
                                    <rect x="60" y="35" width="15" height="15" fill="#a7f3d0" stroke="#16a34a"/>
                                </svg>
                            </td>
                        </tr>
                    </table>
                </div>` 
            },
            { 
                question: "રેખીય આલેખ (Line Graph) અને તેની રચના", 
                answer: `
                <p>જ્યારે માહિતી <b>સમયના નિશ્ચિત ગાળામાં સતત બદલાતી</b> રહેતી હોય, ત્યારે તેને દર્શાવવા માટે રેખીય આલેખ વપરાય છે.</p>
                
                <div style='display:flex; flex-direction:column; gap:10px; overflow-x:auto;'>
                    <div style='min-width:300px; background-color:#fff7ed; padding:15px; border-radius:10px; border:1px solid #f97316;'>
                        <h4 style='color:#c2410c; margin:0 0 5px 0;'>રચનાની સમજ (SVG નમૂનો):</h4>
                        <p style='margin:0 0 10px 0; font-size:13px;'>આ આલેખમાં બિંદુઓ આલેખીને તેમને રેખાખંડો વડે જોડવામાં આવે છે.</p>
                        <div style='text-align:center;'>
                            <svg width="250" height="150" viewBox="0 0 250 150" xmlns="http://www.w3.org/2000/svg">
                                <!-- Grid lines -->
                                <line x1="40" y1="20" x2="230" y2="20" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="40" y1="50" x2="230" y2="50" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="40" y1="80" x2="230" y2="80" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="40" y1="110" x2="230" y2="110" stroke="#cbd5e1" stroke-width="0.5"/>
                                
                                <!-- Axes -->
                                <line x1="40" y1="20" x2="40" y2="130" stroke="#6b7280" stroke-width="2"/>
                                <line x1="40" y1="130" x2="230" y2="130" stroke="#6b7280" stroke-width="2"/>
                                
                                <!-- Labels -->
                                <text x="235" y="135" font-size="12" fill="#1e3a8a">સમય</text>
                                <text x="10" y="80" font-size="12" fill="#1e3a8a" transform="rotate(-90 10 80)">તાપમાન</text>
                                
                                <!-- Points & Lines -->
                                <polyline points="60,110 100,80 140,50 180,90 220,70" fill="none" stroke="#ea580c" stroke-width="2.5"/>
                                <circle cx="60" cy="110" r="4" fill="#be123c"/>
                                <circle cx="100" cy="80" r="4" fill="#be123c"/>
                                <circle cx="140" cy="50" r="4" fill="#be123c"/>
                                <circle cx="180" cy="90" r="4" fill="#be123c"/>
                                <circle cx="220" cy="70" r="4" fill="#be123c"/>
                            </svg>
                        </div>
                    </div>
                    
                    <div style='min-width:300px; background-color:#f8fafc; padding:10px; border-radius:8px; border:1px solid #cbd5e1;'>
                        <p style='margin:0; font-size:14px; color:#1f2937;'><b>નોંધ:</b> જો આ રેખાખંડો એક જ સીધી રેખામાં હોય, તો તેને <b>સરળ રેખીય આલેખ (Linear Graph)</b> કહે છે.</p>
                    </div>
                </div>` 
            },
            { 
                question: "નિર્દેશાંક પદ્ધતિ અને બિંદુનું આલેખન (Co-ordinate System)", 
                answer: `
                <p>આલેખપત્ર પર કોઈપણ બિંદુનું ચોક્કસ સ્થાન દર્શાવવા માટે <b>નિર્દેશાંક પદ્ધતિ</b> નો ઉપયોગ થાય છે.</p>
                
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <div style='background-color:#eff6ff; padding:15px; border-radius:10px; border:1px solid #2563eb;'>
                        <ul style='list-style-type:none; padding:0; margin:0; line-height:1.6; font-size:14px; color:#1e3a8a;'>
                            <li>૧. <b>X-અક્ષ:</b> આલેખપત્ર પરની આડી રેખા.</li>
                            <li>૨. <b>Y-અક્ષ:</b> આલેખપત્ર પરની ઊભી રેખા.</li>
                            <li>૩. <b>ઉગમબિંદુ (Origin):</b> બંને અક્ષોના છેદબિંદુને ઉગમબિંદુ <b>O</b> કહે છે, જેના નિર્દેશાંક હંમેશા <b>(0, 0)</b> હોય છે.</li>
                        </ul>
                    </div>

                    <div style='background-color:#fffbeb; padding:15px; border-radius:10px; border:2px dashed #ca8a04; overflow-x:auto;'>
                        <h4 style='color:#b45309; margin:0 0 10px 0;'>બિંદુના નિર્દેશાંક સ્વરૂપ: (x, y)</h4>
                        <div style='display:flex; align-items:center; gap:15px; min-width:300px;'>
                            <svg width="150" height="120" viewBox="0 0 150 120" xmlns="http://www.w3.org/2000/svg">
                                <!-- Grid -->
                                <line x1="20" y1="20" x2="130" y2="20" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="20" y1="40" x2="130" y2="40" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="20" y1="60" x2="130" y2="60" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="20" y1="80" x2="130" y2="80" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="20" y1="100" x2="130" y2="100" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="40" y1="20" x2="40" y2="100" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="60" y1="20" x2="60" y2="100" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="80" y1="20" x2="80" y2="100" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="100" y1="20" x2="100" y2="100" stroke="#cbd5e1" stroke-width="0.5"/>
                                <line x1="120" y1="20" x2="120" y2="100" stroke="#cbd5e1" stroke-width="0.5"/>
                                
                                <!-- Axes -->
                                <line x1="20" y1="100" x2="140" y2="100" stroke="#6b7280" stroke-width="2"/>
                                <line x1="20" y1="10" x2="20" y2="100" stroke="#6b7280" stroke-width="2"/>
                                <text x="145" y="105" font-size="12" fill="#1e3a8a">X</text>
                                <text x="15" y="15" font-size="12" fill="#1e3a8a">Y</text>
                                <text x="12" y="112" font-size="12" fill="#be123c">O</text>
                                
                                <!-- Point P(3, 2) -->
                                <circle cx="80" cy="60" r="4" fill="#db2777"/>
                                <text x="85" y="55" font-size="12" fill="#db2777" font-weight="bold">P (3, 2)</text>
                                <line x1="80" y1="60" x2="80" y2="100" stroke="#db2777" stroke-width="1" stroke-dasharray="2,2"/>
                                <line x1="80" y1="60" x2="20" y2="60" stroke="#db2777" stroke-width="1" stroke-dasharray="2,2"/>
                                <text x="75" y="112" font-size="10" fill="#db2777">3</text>
                                <text x="12" y="65" font-size="10" fill="#db2777">2</text>
                            </svg>
                            <div style='flex:1; font-size:13px; color:#1e3a8a; line-height:1.6;'>
                                <b style='color:#db2777;'>બિંદુ P(3, 2) માટે:</b><br>
                                ૧. <b>x-નિર્દેશાંક: 3</b> છે, જે દર્શાવે છે કે બિંદુ Y-અક્ષથી 3 એકમ જમણી બાજુ છે.<br>
                                ૨. <b>y-નિર્દેશાંક: 2</b> છે, જે દર્શાવે છે કે બિંદુ X-અક્ષથી 2 એકમ ઉપર છે.
                            </div>
                        </div>
                    </div>
                </div>` 
            },
            { 
                question: "રેખીય આલેખ અને તેના વ્યવહારિક ઉપયોગો (Application)", 
                answer: `
                <p>રોજિંદા જીવનમાં આપણી આસપાસ ઘણી એવી ઘટનાઓ બને છે કે જેમાં બે રાશિઓ વચ્ચેનો સંબંધ આલેખ દ્વારા દર્શાવી શકાય છે. આ પ્રકારના આલેખ પરથી આપણે માહિતીનું અર્થઘટન કરી શકીએ છીએ.</p>
                
                <div style='display:flex; flex-direction:column; gap:10px; overflow-x:auto;'>
                    <!-- Speed-Time Graph -->
                    <div style='min-width:300px; background-color:#f0fdf4; border:1px solid #16a34a; border-radius:10px; padding:15px;'>
                        <h4 style='color:#166534; margin:0 0 10px 0;'>૧. ઝડપ-સમય આલેખ (અચળ ઝડપ):</h4>
                        <p style='margin:0 0 10px 0; font-size:13px;'>જ્યારે કોઈ વાહન એકસમાન ઝડપે ગતિ કરે, ત્યારે લાગતો સમય અને કાપેલું અંતર સમપ્રમાણમાં હોય છે, જેનો આલેખ ઉગમબિંદુમાંથી પસાર થતી <b>સીધી રેખા</b> મળે છે.</p>
                        <div style='text-align:center;'>
                            <svg width="220" height="130" viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg">
                                <line x1="30" y1="10" x2="30" y2="100" stroke="#6b7280" stroke-width="2"/>
                                <line x1="30" y1="100" x2="200" y2="100" stroke="#6b7280" stroke-width="2"/>
                                <line x1="30" y1="100" x2="180" y2="20" stroke="#16a34a" stroke-width="2.5"/>
                                <text x="185" y="115" font-size="12" fill="#1e3a8a">સમય</text>
                                <text x="10" y="60" font-size="12" fill="#1e3a8a" transform="rotate(-90 10 60)">અંતર</text>
                            </svg>
                        </div>
                    </div>

                    <!-- Work-Workers Graph -->
                    <div style='min-width:300px; background-color:#fee2e2; border:1px solid #ef4444; border-radius:10px; padding:15px;'>
                        <h4 style='color:#b91c1c; margin:0 0 10px 0;'>૨. મજૂર-સમય આલેખ (વ્યસ્ત પ્રમાણ):</h4>
                        <p style='margin:0 0 10px 0; font-size:13px;'>જ્યારે મજૂરની સંખ્યા વધે, ત્યારે કામ પૂરું કરવા માટે લાગતો સમય ઘટે છે. આ વ્યસ્ત પ્રમાણનો સંબંધ છે, જેનો આલેખ <b>વક્ર રેખા</b> મળે છે.</p>
                        <div style='text-align:center;'>
                            <svg width="220" height="130" viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg">
                                <line x1="30" y1="10" x2="30" y2="100" stroke="#6b7280" stroke-width="2"/>
                                <line x1="30" y1="100" x2="200" y2="100" stroke="#6b7280" stroke-width="2"/>
                                <path d="M 40 20 C 50 60, 80 80, 180 90" fill="none" stroke="#dc2626" stroke-width="2.5"/>
                                <text x="185" y="115" font-size="12" fill="#1e3a8a">મજૂર</text>
                                <text x="10" y="60" font-size="12" fill="#1e3a8a" transform="rotate(-90 10 60)">સમય</text>
                            </svg>
                        </div>
                    </div>
                </div>` 
            }
        ]
    }
    
  
};

