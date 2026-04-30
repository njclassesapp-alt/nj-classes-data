var njMathsTheoryStd9 = {
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 1: સંખ્યા પદ્ધતિ
    // ------------------------------------
    "1": {
        "chapterName": "પ્રકરણ 1",
        "chapterTitle": "સંખ્યા પદ્ધતિ",
        "qa_list": [
            { 
                question: "વિવિધ સંખ્યાગણનો પરિચય (Introduction to Number Sets)", 
                answer: `
                <div style='background-color:#fff7ed; padding:15px; border-left:5px solid #ea580c; border-radius:8px; margin-bottom:15px;'>
                    <ul style='line-height:1.8; color:#1e3a8a;'>
                        <li><b>૧. પ્રાકૃતિક સંખ્યાઓ (Natural Numbers - N):</b> ગણતરીની સંખ્યાઓ. દા.ત. 1, 2, 3, 4... <br><span style='color:#ca8a04; font-size:14px;'>N = {1, 2, 3, ...}</span></li>
                        <li><b>૨. પૂર્ણ સંખ્યાઓ (Whole Numbers - W):</b> પ્રાકૃતિક સંખ્યાઓ શૂન્ય (0) સાથે મળીને પૂર્ણ સંખ્યાઓ બનાવે છે. <br><span style='color:#ca8a04; font-size:14px;'>W = {0, 1, 2, 3, ...}</span></li>
                        <li><b>૩. પૂર્ણાંક સંખ્યાઓ (Integers - Z):</b> બધી પૂર્ણ સંખ્યાઓ અને ઋણ સંખ્યાઓનો સમૂહ. <br><span style='color:#ca8a04; font-size:14px;'>Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}</span></li>
                        <li><b>૪. સંમેય સંખ્યાઓ (Rational Numbers - Q):</b> જે સંખ્યાઓને p/q સ્વરૂપમાં દર્શાવી શકાય.</li>
                        <li><b>૫. વાસ્તવિક સંખ્યાઓ (Real Numbers - R):</b> સંમેય અને અસંમેય તમામ સંખ્યાઓનો સમૂહ.</li>
                    </ul>
                </div>
                
                <div style='text-align:center; margin: 20px 0; overflow-x:auto;'>
                    <h4 style='color:#1e3a8a; margin-bottom:10px;'>સંખ્યાગણનો સંબંધ દર્શાવતી આકૃતિ</h4>
                    <svg width="320" height="220" viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="300" height="200" rx="15" fill="#f0f9ff" stroke="#1e3a8a" stroke-width="2"/>
                        <text x="20" y="35" fill="#1e3a8a" font-weight="bold" font-size="16">R (વાસ્તવિક)</text>
                        
                        <ellipse cx="120" cy="115" rx="100" ry="85" fill="#fef3c7" stroke="#ca8a04" stroke-width="2"/>
                        <text x="40" y="65" fill="#ca8a04" font-weight="bold" font-size="14">Q (સંમેય)</text>
                        
                        <ellipse cx="130" cy="125" rx="75" ry="65" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                        <text x="70" y="95" fill="#ea580c" font-weight="bold" font-size="14">Z (પૂર્ણાંક)</text>
                        
                        <ellipse cx="140" cy="135" rx="55" ry="45" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                        <text x="100" y="115" fill="#0284c7" font-weight="bold" font-size="14">W (પૂર્ણ)</text>
                        
                        <ellipse cx="150" cy="145" rx="35" ry="25" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>
                        <text x="142" y="150" fill="#1d4ed8" font-weight="bold" font-size="14">N</text>
                        
                        <rect x="230" y="60" width="70" height="110" rx="10" fill="#fce7f3" stroke="#be123c" stroke-width="2"/>
                        <text x="235" y="85" fill="#be123c" font-weight="bold" font-size="12">અસંમેય</text>
                        <text x="250" y="110" fill="#be123c" font-size="14">√2</text>
                        <text x="250" y="135" fill="#be123c" font-size="14">π</text>
                    </svg>
                    <p style='font-size:12px; color:#6b7280; margin-top:5px;'>આકૃતિ 1.1: વાસ્તવિક સંખ્યાઓનું વર્ગીકરણ</p>
                </div>`
            },
            { 
                question: "સંમેય અને અસંમેય સંખ્યાઓ (Rational and Irrational Numbers)", 
                answer: `
                <div style='display:flex; flex-direction:column; gap:10px;'>
                    <div style='border:1px solid #1e3a8a; padding:10px; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 5px 0;'>🔹 સંમેય સંખ્યાઓ (Rational):</h4>
                        <p style='margin:0; font-size:15px;'>જે સંખ્યાને <b>p/q</b> સ્વરૂપમાં દર્શાવી શકાય, જ્યાં p અને q પૂર્ણાંક હોય અને <b>q ≠ 0</b> હોય.<br>
                        <b>ઉદાહરણ:</b> 1/2, -5/3, 4 (કારણ કે 4/1 લખી શકાય), 0.</p>
                    </div>
                    <div style='border:1px solid #ea580c; padding:10px; border-radius:8px;'>
                        <h4 style='color:#ea580c; margin:0 0 5px 0;'>🔸 અસંમેય સંખ્યાઓ (Irrational):</h4>
                        <p style='margin:0; font-size:15px;'>જે સંખ્યાને p/q સ્વરૂપમાં ન દર્શાવી શકાય.<br>
                        <b>ઉદાહરણ:</b> √2, √3, √15, π (પાઇ), 0.101101110... <br>
                        <i>(નોંધ: જે અવિભાજ્ય સંખ્યાઓ વર્ગમૂળની અંદર હોય તે બધી અસંમેય છે.)</i></p>
                    </div>
                </div>` 
            },
            { 
                question: "વાસ્તવિક સંખ્યાઓનું દશાંશ નિરૂપણ (Decimal Expansion)", 
                answer: `
                <p>કોઈપણ વાસ્તવિક સંખ્યાનું દશાંશ નિરૂપણ મુખ્યત્વે ત્રણ પ્રકારનું હોય છે:</p>
                <div style='overflow-x:auto;'>
                    <table style='width:100%; border-collapse: collapse; text-align:left; min-width:300px;'>
                        <tr style='background-color:#1e3a8a; color:white;'>
                            <th style='padding:8px; border:1px solid #cbd5e1;'>પ્રકાર</th>
                            <th style='padding:8px; border:1px solid #cbd5e1;'>સમજૂતી</th>
                            <th style='padding:8px; border:1px solid #cbd5e1;'>સંખ્યાનો પ્રકાર</th>
                        </tr>
                        <tr>
                            <td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>શાંત (Terminating)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>ભાગાકાર કરતાં શેષ શૂન્ય થઈ જાય અને દશાંશ પછી અમુક અંકો જ આવે. (દા.ત. 7/8 = 0.875)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#16a34a;'>સંમેય</td>
                        </tr>
                        <tr style='background-color:#f8fafc;'>
                            <td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>અનંત આવૃત<br>(Non-terminating Recurring)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>શેષ ક્યારેય શૂન્ય ન થાય, પરંતુ અંકોનું પુનરાવર્તન થાય. (દા.ત. 1/3 = 0.333... = 0.3̄)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#16a34a;'>સંમેય</td>
                        </tr>
                        <tr>
                            <td style='padding:8px; border:1px solid #cbd5e1; color:#ea580c; font-weight:bold;'>અનંત અનાવૃત<br>(Non-terminating Non-recurring)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1;'>શેષ શૂન્ય પણ ન થાય અને અંકોનું ચોક્કસ જૂથ પુનરાવર્તન પણ ન પામે. (દા.ત. π = 3.14159...)</td>
                            <td style='padding:8px; border:1px solid #cbd5e1; font-weight:bold; color:#dc2626;'>અસંમેય</td>
                        </tr>
                    </table>
                </div>` 
            },
            { 
                question: "વર્ગમૂળ વાળી વાસ્તવિક સંખ્યાઓ પરની પ્રક્રિયાઓ (નિત્યસમ)", 
                answer: `
                <p>ધારો કે <b>a</b> અને <b>b</b> ધન વાસ્તવિક સંખ્યાઓ છે. તો નીચેના સૂત્રો (નિત્યસમ) યાદ રાખવા:</p>
                <div style='background-color:#f0fdf4; padding:15px; border-radius:10px; border:2px dashed #16a34a; overflow-x:auto; white-space:nowrap;'>
                    <ul style='list-style-type:none; padding-left:0; margin:0; font-size:16px; font-weight:bold; color:#1e3a8a; line-height:2;'>
                        <li>૧) &nbsp; <span style='color:#ea580c;'>&radic;(ab)</span> = &radic;a &times; &radic;b</li>
                        <li>૨) &nbsp; <span style='color:#ea580c;'>&radic;(a/b)</span> = &radic;a / &radic;b</li>
                        <li>૩) &nbsp; <span style='color:#ea580c;'>( &radic;a + &radic;b )( &radic;a - &radic;b )</span> = a - b</li>
                        <li>૪) &nbsp; <span style='color:#ea580c;'>( a + &radic;b )( a - &radic;b )</span> = a&sup2; - b</li>
                        <li>૫) &nbsp; <span style='color:#ea580c;'>( &radic;a + &radic;b )&sup2;</span> = a + 2&radic;(ab) + b</li>
                    </ul>
                </div>
                <p style='margin-top:10px; font-size:14px;'><i>ઉદાહરણ: ( &radic;5 + &radic;2 )( &radic;5 - &radic;2 ) = 5 - 2 = 3</i></p>` 
            },
            { 
                question: "છેદનું સંમેયીકરણ (Rationalization of Denominator)", 
                answer: `
                <p>જ્યારે કોઈ સંખ્યાના છેદમાં વર્ગમૂળવાળું પદ હોય, ત્યારે તેને દૂર કરવાની પ્રક્રિયાને <b>છેદનું સંમેયીકરણ</b> કહે છે.</p>
                <div style='background-color:#f8fafc; padding:10px; border-left:4px solid #ca8a04; margin-top:10px;'>
                    <b style='color:#1e3a8a;'>કેવી રીતે કરવું?</b>
                    <p style='margin-bottom:5px;'>જો છેદમાં <b>( &radic;a + &radic;b )</b> હોય, તો અંશ અને છેદ બંનેને તેના અનુબદ્ધ કરણી <b>( &radic;a - &radic;b )</b> વડે ગુણવા.</p>
                </div>
                <div style='overflow-x:auto; margin-top:10px;'>
                    <b>દાખલો:</b> 1 / (2 + &radic;3) નું સંમેયીકરણ કરો.<br>
                    <div style='font-size:16px; font-weight:bold; color:#ea580c; margin-top:5px;'>
                        = [ 1 / (2 + &radic;3) ] &times; [ (2 - &radic;3) / (2 - &radic;3) ] <br>
                        = (2 - &radic;3) / (2&sup2; - (&radic;3)&sup2;) <br>
                        = (2 - &radic;3) / (4 - 3) <br>
                        = 2 - &radic;3
                    </div>
                </div>` 
            },
            { 
                question: "વાસ્તવિક સંખ્યાઓ માટે ઘાતાંકના નિયમો (Laws of Exponents)", 
                answer: `
                <p>જો <b>a > 0</b> (આધાર) એક વાસ્તવિક સંખ્યા હોય અને <b>m, n</b> સંમેય સંખ્યાઓ (ઘાતાંક) હોય, તો:</p>
                <div style='background-color:#fffbeb; padding:15px; border-radius:10px; border:2px solid #ca8a04; overflow-x:auto; white-space:nowrap;'>
                    <table style='width:100%; text-align:left; font-size:16px;'>
                        <tr style='color:#1e3a8a; font-weight:bold;'>
                            <td style='padding:8px;'>૧. ગુણાકારનો નિયમ:</td>
                            <td style='padding:8px; color:#ea580c;'>a<sup>m</sup> &times; a<sup>n</sup> = a<sup>m + n</sup></td>
                        </tr>
                        <tr style='color:#1e3a8a; font-weight:bold;'>
                            <td style='padding:8px;'>૨. ભાગાકારનો નિયમ:</td>
                            <td style='padding:8px; color:#ea580c;'>a<sup>m</sup> / a<sup>n</sup> = a<sup>m - n</sup></td>
                        </tr>
                        <tr style='color:#1e3a8a; font-weight:bold;'>
                            <td style='padding:8px;'>૩. ઘાતની ઘાતનો નિયમ:</td>
                            <td style='padding:8px; color:#ea580c;'>(a<sup>m</sup>)<sup>n</sup> = a<sup>m &times; n</sup></td>
                        </tr>
                        <tr style='color:#1e3a8a; font-weight:bold;'>
                            <td style='padding:8px;'>૪. સમાન ઘાતનો નિયમ:</td>
                            <td style='padding:8px; color:#ea580c;'>a<sup>m</sup> &times; b<sup>m</sup> = (ab)<sup>m</sup></td>
                        </tr>
                        <tr style='color:#1e3a8a; font-weight:bold;'>
                            <td style='padding:8px;'>૫. ઋણ ઘાતાંક:</td>
                            <td style='padding:8px; color:#ea580c;'>a<sup>-n</sup> = 1 / a<sup>n</sup></td>
                        </tr>
                    </table>
                </div>
                <div style='margin-top:10px; color:#b45309; font-weight:bold; font-size:14px;'>
                    💡 ખાસ યાદ રાખો: <br>
                    • કોઈપણ સંખ્યાની શૂન્ય ઘાત હંમેશા 1 થાય. (a<sup>0</sup> = 1)<br>
                    • a<sup>m/n</sup> = (<sup>n</sup>&radic;a)<sup>m</sup> = <sup>n</sup>&radic;(a<sup>m</sup>)
                </div>` 
            }
        ]
    }
};
