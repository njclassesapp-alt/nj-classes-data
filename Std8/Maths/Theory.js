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
    }
  
  
  
  
};

