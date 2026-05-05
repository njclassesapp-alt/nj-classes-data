var njMathsExercise = {
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 1: સંખ્યા પદ્ધતિ (સ્વાધ્યાય)
    // ------------------------------------
    "1": {
        "chapterName": "પ્રકરણ 1",
        "chapterTitle": "સંખ્યા પદ્ધતિ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 1",
                "marks": 2,
                "question": "શું શૂન્ય એ એક સંમેય સંખ્યા છે? શું તમે તેને p પૂર્ણાંક અને q શૂન્યેતર પૂર્ણાંક હોય તેવા p, q માટે p/q સ્વરૂપમાં લખી શકો?", 
                "answer": `
                <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                    <h4 style='color:#14532d; margin:0 0 10px 0; font-size:18px;'>હા, શૂન્ય (0) એ એક સંમેય સંખ્યા છે.</h4>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'><b>સમજૂતી:</b> કોઈપણ સંખ્યાને જો p/q સ્વરૂપમાં દર્શાવી શકાય (જ્યાં p અને q પૂર્ણાંક હોય અને q &ne; 0), તો તેને સંમેય સંખ્યા કહેવાય.</p>
                    
                    <div style='background-color:#ffffff; padding:15px; border-radius:5px; border:1px solid #bbf7d0;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a;'>શૂન્યને આપણે નીચે મુજબ p/q સ્વરૂપમાં લખી શકીએ છીએ:</p>
                        <div style='display:flex; justify-content:space-around; align-items:center; flex-wrap:wrap; gap:15px;'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>0</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>1</div>
                            </div>
                            <span style='font-size:20px; color:#64748b;'>,</span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>0</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>5</div>
                            </div>
                            <span style='font-size:20px; color:#64748b;'>,</span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>0</div>
                                <div style='padding:0 5px; color:#be123c;'>-3</div>
                            </div>
                        </div>
                        <p style='margin:10px 0 0 0; font-size:14px; text-align:center; color:#64748b;'>(અહીં p = 0 છે જે પૂર્ણાંક છે, અને q અનુક્રમે 1, 5, -3 છે જે શૂન્ય નથી).</p>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 2",
                "marks": 2,
                "question": "3 અને 4 વચ્ચેની છ સંમેય સંખ્યાઓ શોધો.", 
                "answer": `
                <div style='background-color:#f0f9ff; padding:15px; border:1px solid #bae6fd; border-radius:8px;'>
                    <p style='margin-top:0; color:#0369a1; font-weight:bold; font-size:16px;'>ઉકેલ:</p>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'>આપણે 3 અને 4 વચ્ચેની <b>6</b> સંમેય સંખ્યાઓ શોધવી છે.</p>
                    
                    <div style='background-color:#ffffff; padding:10px; border-radius:5px; border-left:4px solid #ea580c; margin-bottom:15px;'>
                        <b>સ્ટેપ 1:</b> જેટલી સંખ્યા શોધવી હોય તેમાં 1 ઉમેરો. (અહીં n = 6 છે, તેથી 6 + 1 = <b style='color:#be123c; font-size:18px;'>7</b>).<br>
                        <b>સ્ટેપ 2:</b> આપેલી બંને સંખ્યાઓના અંશ અને છેદને <b>7</b> વડે ગુણો.
                    </div>
                    
                    <div style='display:flex; flex-wrap:wrap; justify-content:space-around; align-items:center; background-color:#e0f2fe; padding:15px; border-radius:8px; gap:10px;'>
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <b style='color:#1e3a8a; font-size:18px;'>3</b><br>
                            <span style='color:#64748b; font-size:14px;'>ને 7 વડે ગુણતા અને ભાગતા</span><br>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold; margin-top:5px;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>3 &times; 7</div>
                                <div style='padding:0 5px; color:#ea580c;'>7</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>21</div>
                                <div style='padding:0 5px; color:#047857;'>7</div>
                            </div>
                        </div>
                        
                        <div style='font-size:20px; font-weight:bold; color:#94a3b8;'>અને</div>
                        
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <b style='color:#1e3a8a; font-size:18px;'>4</b><br>
                            <span style='color:#64748b; font-size:14px;'>ને 7 વડે ગુણતા અને ભાગતા</span><br>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold; margin-top:5px;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>4 &times; 7</div>
                                <div style='padding:0 5px; color:#ea580c;'>7</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #be123c; padding:0 5px; color:#be123c;'>28</div>
                                <div style='padding:0 5px; color:#be123c;'>7</div>
                            </div>
                        </div>
                    </div>
                    
                    <p style='margin:15px 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>હવે 21/7 અને 28/7 વચ્ચેની 6 સંખ્યાઓ ક્રમમાં લખી નાખો:</p>
                    
                    <div style='display:flex; justify-content:center; gap:10px; flex-wrap:wrap; background-color:#ffedd5; padding:12px; border-radius:8px; border:1px dashed #ea580c;'>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>22</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>23</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>24</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>25</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>26</div><div style='padding:0 5px; color:#9a3412;'>7</div></div> <span style='font-size:20px; color:#ea580c;'>,</span>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #9a3412; padding:0 5px; color:#9a3412;'>27</div><div style='padding:0 5px; color:#9a3412;'>7</div></div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:15px;'>
                    <b>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> જો પરીક્ષામાં હેતુલક્ષી પ્રશ્નમાં પૂછાય, તો સીધી જ 3 અને 4 ની પાછળ એક-એક મીંડું (0) લગાવી દો (એટલે 30 અને 40). હવે 30 અને 40 વચ્ચેની સંખ્યા લખી, બધાના છેદમાં 10 મૂકી દો! (31/10, 32/10... 39/10). આ જવાબ પણ સાચો જ ગણાય!
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 3",
                "marks": 3,
                "question": "3/5 અને 4/5 વચ્ચેની પાંચ સંમેય સંખ્યાઓ શોધો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'>અહીં છેદ સરખા (5) જ છે, પરંતુ 3 અને 4 વચ્ચે સીધી કોઈ પૂર્ણાંક સંખ્યા મળતી નથી. આપણે <b>5</b> સંમેય સંખ્યાઓ શોધવી છે.</p>
                    
                    <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #0284c7; margin-bottom:15px;'>
                        નિયમ મુજબ, n = 5 હોવાથી, (5 + 1) = <b style='color:#1e3a8a;'>6</b> વડે અંશ અને છેદને ગુણીશું.
                    </div>
                    
                    <div style='display:flex; flex-wrap:wrap; justify-content:space-around; align-items:center; background-color:#f0fdf4; padding:15px; border-radius:8px; border:1px solid #bbf7d0; gap:10px;'>
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #1e3a8a; padding:0 5px; color:#1e3a8a;'>3</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>5</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>3 &times; <span style='color:#be123c;'>6</span></div>
                                <div style='padding:0 5px; color:#047857;'>5 &times; <span style='color:#be123c;'>6</span></div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px; color:#16a34a;'>18</div>
                                <div style='padding:0 5px; color:#16a34a;'>30</div>
                            </div>
                        </div>
                        
                        <div style='font-size:20px; font-weight:bold; color:#94a3b8;'>અને</div>
                        
                        <div style='text-align:center; background-color:#ffffff; padding:10px; border-radius:8px; box-shadow:0 2px 4px rgba(0,0,0,0.05);'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #1e3a8a; padding:0 5px; color:#1e3a8a;'>4</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>5</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>4 &times; <span style='color:#be123c;'>6</span></div>
                                <div style='padding:0 5px; color:#ea580c;'>5 &times; <span style='color:#be123c;'>6</span></div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#64748b;'> = </span>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:20px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #ea580c; padding:0 5px; color:#ea580c;'>24</div>
                                <div style='padding:0 5px; color:#ea580c;'>30</div>
                            </div>
                        </div>
                    </div>
                    
                    <p style='margin:15px 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>હવે અંશની સંખ્યા 18 અને 24 ની વચ્ચે આવતી સંખ્યાઓ લખી છેદમાં 30 મૂકો:</p>
                    
                    <div style='display:flex; justify-content:center; gap:12px; flex-wrap:wrap; background-color:#f5f3ff; padding:15px; border-radius:8px; border:2px dashed #8b5cf6;'>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>19</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>20</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>21</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>22</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                        <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'><div style='border-bottom:2px solid #6d28d9; padding:0 5px; color:#6d28d9;'>23</div><div style='padding:0 5px; color:#6d28d9;'>30</div></div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.1 - પ્રશ્ન 4",
                "marks": 3,
                "question": "નીચેનાં વિધાનો સત્ય છે કે અસત્ય તે કારણ સહિત જણાવો:\n(i) દરેક પ્રાકૃતિક સંખ્યા એ પૂર્ણ સંખ્યા છે.\n(ii) દરેક પૂર્ણાંક એ પૂર્ણ સંખ્યા છે.\n(iii) દરેક સંમેય સંખ્યા એ પૂર્ણ સંખ્યા છે.", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border-left:5px solid #16a34a; background-color:#f0fdf4; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>
                        <h4 style='color:#166534; margin:0 0 8px 0; font-size:16px;'>(i) સત્ય (True)</h4>
                        <p style='margin:0; font-size:15px; color:#14532d; line-height:1.6;'><b>કારણ:</b> પ્રાકૃતિક સંખ્યાઓનો ગણ N = {1, 2, 3, ...} છે. જ્યારે પૂર્ણ સંખ્યાઓનો ગણ W = {0, 1, 2, 3, ...} છે. આથી બધી જ પ્રાકૃતિક સંખ્યાઓ પૂર્ણ સંખ્યાઓના ગણમાં આવી જાય છે.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(ii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> પૂર્ણાંક સંખ્યાઓ (Z) માં ઋણ સંખ્યાઓ (જેમ કે -1, -2, -3) નો પણ સમાવેશ થાય છે. પરંતુ પૂર્ણ સંખ્યાઓ (W) માં ઋણ સંખ્યાઓ હોતી નથી.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(iii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> સંમેય સંખ્યાઓ (Q) માં અપૂર્ણાંકો (દા.ત. 1/2, 3/5, 4/7) આવે છે, પરંતુ પૂર્ણ સંખ્યાઓ (W) એ આખી સંખ્યાઓ જ હોય છે, તેમાં અપૂર્ણાંક હોતા નથી.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (પરીક્ષા માટે ગોલ્ડન રૂલ):</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>આ ક્રમ યાદ રાખો: <b>N &rarr; W &rarr; Z &rarr; Q &rarr; R</b></p>
                    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px;'>
                        <li>જો પ્રશ્નમાં ડાબી બાજુથી જમણી બાજુ જવાનું હોય (દા.ત. N એ W છે?), તો વિધાન હંમેશા <b>સત્ય</b>.</li>
                        <li>જો જમણી બાજુથી ડાબી બાજુ આવવાનું હોય (દા.ત. Q એ W છે?), તો વિધાન હંમેશા <b>અસત્ય</b>.</li>
                    </ul>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.2 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચેનાં વિધાનો સત્ય છે કે અસત્ય તે કારણ સહિત જણાવો:\n(i) દરેક અસંમેય સંખ્યા એ વાસ્તવિક સંખ્યા છે.\n(ii) સંખ્યારેખા પરનું દરેક બિંદુ કોઈક પ્રાકૃતિક સંખ્યા m માટે √m સ્વરૂપનું હોય છે.\n(iii) દરેક વાસ્તવિક સંખ્યા એ અસંમેય સંખ્યા છે.", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='border-left:5px solid #16a34a; background-color:#f0fdf4; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>
                        <h4 style='color:#166534; margin:0 0 8px 0; font-size:16px;'>(i) સત્ય (True)</h4>
                        <p style='margin:0; font-size:15px; color:#14532d; line-height:1.6;'><b>કારણ:</b> વાસ્તવિક સંખ્યાઓનો ગણ (R) એ સંમેય સંખ્યાઓ અને અસંમેય સંખ્યાઓ બંનેનો બનેલો છે. આથી બધી જ અસંમેય સંખ્યાઓ વાસ્તવિક સંખ્યાઓ કહેવાય છે.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(ii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> સંખ્યારેખા પર ઋણ સંખ્યાઓ (જેમ કે -2, -3) પણ આવેલી હોય છે. પરંતુ કોઈપણ પ્રાકૃતિક સંખ્યા (ધન સંખ્યા) નું વર્ગમૂળ ક્યારેય ઋણ હોઈ શકે નહીં.</p>
                    </div>

                    <div style='border-left:5px solid #be123c; background-color:#fff1f2; padding:15px; border-radius:0 8px 8px 0; border-top:1px solid #fecdd3; border-right:1px solid #fecdd3; border-bottom:1px solid #fecdd3;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0; font-size:16px;'>(iii) અસત્ય (False)</h4>
                        <p style='margin:0; font-size:15px; color:#881337; line-height:1.6;'><b>કારણ:</b> વાસ્તવિક સંખ્યાઓમાં સંમેય સંખ્યાઓ (જેમ કે 2, 5, 3/4) નો પણ સમાવેશ થાય છે, જે અસંમેય નથી. ઉદાહરણ તરીકે, 2 એ વાસ્તવિક સંખ્યા છે, પરંતુ તે અસંમેય નથી.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>આ સમીકરણ મગજમાં ફિટ કરી દો: <b>R (વાસ્તવિક) = Q (સંમેય) + I (અસંમેય)</b></p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#78350f;'>આનો અર્થ એ કે સંમેય અને અસંમેય બંને ભેગા થઈને વાસ્તવિક સંખ્યા બનાવે છે. એટલે બધી અસંમેય એ વાસ્તવિક છે (સત્ય), પણ બધી વાસ્તવિક એ અસંમેય નથી (કારણ કે તેમાં સંમેય પણ હોય છે).</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.2 - પ્રશ્ન 2",
                "marks": 2,
                "question": "શું દરેક ધન પૂર્ણાંકનું વર્ગમૂળ અસંમેય હોય છે? જો ના, તો એવી એક સંખ્યાનું ઉદાહરણ આપો જેનું વર્ગમૂળ સંમેય સંખ્યા હોય.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <h4 style='color:#be123c; margin:0 0 10px 0; font-size:18px;'>ના, દરેક ધન પૂર્ણાંકનું વર્ગમૂળ અસંમેય હોતું નથી.</h4>
                    
                    <div style='background-color:#f0f9ff; padding:15px; border-radius:8px; border-left:4px solid #0284c7; margin-top:15px;'>
                        <p style='margin:0 0 10px 0; font-size:15px; color:#0369a1; font-weight:bold;'>ઉદાહરણ તરીકે પૂર્ણવર્ગ સંખ્યાઓ લઈએ:</p>
                        
                        <div style='display:flex; flex-wrap:wrap; gap:15px; align-items:center;'>
                            <div style='background-color:#ffffff; padding:10px 20px; border-radius:5px; border:1px solid #bae6fd; text-align:center;'>
                                <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'>&radic;4 = 2</span>
                            </div>
                            <div style='background-color:#ffffff; padding:10px 20px; border-radius:5px; border:1px solid #bae6fd; text-align:center;'>
                                <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'>&radic;9 = 3</span>
                            </div>
                            <div style='background-color:#ffffff; padding:10px 20px; border-radius:5px; border:1px solid #bae6fd; text-align:center;'>
                                <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'>&radic;16 = 4</span>
                            </div>
                        </div>
                        
                        <p style='margin:10px 0 0 0; font-size:15px; color:#334155;'>અહીં 4, 9, અને 16 એ ધન પૂર્ણાંક છે. પરંતુ તેમનાં વર્ગમૂળ (2, 3, 4) <b>સંમેય સંખ્યાઓ</b> છે, અસંમેય નથી. (કારણ કે 2 ને 2/1 સ્વરૂપે લખી શકાય છે).</p>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.2 - પ્રશ્ન 3",
                "marks": 4,
                "question": "સંખ્યારેખા પર √5 ને કેવી રીતે દર્શાવી શકાય તે બતાવો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>પાયથાગોરસના પ્રમેયનો ઉપયોગ:</h4>
                    <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>આપણે જાણીએ છીએ કે <b>5 = 4 + 1</b>. એટલે કે <b>5 = (2)&sup2; + (1)&sup2;</b>.<br>
                    તેથી, આપણે કાટકોણ ત્રિકોણનો <b>પાયો 2 એકમ</b> અને <b>લંબ 1 એકમ</b> લઈશું.</p>
                    
                    <div style='border:1px solid #bbf7d0; background-color:#f0fdf4; padding:12px; border-radius:8px; margin-bottom:15px;'>
                        <h4 style='color:#047857; margin:0 0 5px 0; font-size:15px;'>રચનાના પગલાં:</h4>
                        <ol style='margin:0; font-size:14px; color:#14532d; padding-left:20px; line-height:1.8;'>
                            <li>સંખ્યારેખા પર શૂન્ય (0) ને સંગત બિંદુ <b>O</b> લો.</li>
                            <li>O થી ધન દિશામાં 2 એકમ અંતરે બિંદુ <b>A</b> લો. (OA = 2 એકમ).</li>
                            <li>બિંદુ A આગળ સંખ્યારેખાને લંબ હોય તેવો રેખાખંડ <b>AB</b> દોરો, જેની લંબાઈ 1 એકમ હોય. (AB = 1 એકમ).</li>
                            <li>O અને B ને જોડો. કાટકોણ ત્રિકોણ OAB માં પાયથાગોરસના પ્રમેય મુજબ:<br>
                            OB&sup2; = OA&sup2; + AB&sup2; = (2)&sup2; + (1)&sup2; = 4 + 1 = 5. તેથી <b>OB = &radic;5</b> થાય.</li>
                            <li>O ને કેન્દ્ર લઈ, OB જેટલી ત્રિજ્યા લઈ પરિકરની મદદથી સંખ્યારેખા પર એક ચાપ મારો. આ ચાપ સંખ્યારેખાને જ્યાં છેદે તે બિંદુ <b>P એ &radic;5</b> દર્શાવે છે.</li>
                        </ol>
                    </div>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;'>
                        <svg width="340" height="180" xmlns="http://www.w3.org/2000/svg">
                            <line x1="20" y1="140" x2="320" y2="140" stroke="#1e3a8a" stroke-width="2.5"/>
                            
                            <circle cx="50" cy="140" r="5" fill="#1e3a8a"/>
                            <text x="45" y="165" fill="#1e3a8a" font-weight="bold">O (0)</text>
                            
                            <circle cx="110" cy="140" r="4" fill="#64748b"/>
                            <text x="105" y="165" fill="#64748b" font-weight="bold">1</text>
                            
                            <circle cx="170" cy="140" r="5" fill="#1e3a8a"/>
                            <text x="165" y="165" fill="#1e3a8a" font-weight="bold">A (2)</text>
                            
                            <circle cx="230" cy="140" r="4" fill="#64748b"/>
                            <text x="225" y="165" fill="#64748b" font-weight="bold">3</text>
                            
                            <line x1="170" y1="140" x2="170" y2="80" stroke="#be123c" stroke-width="2.5"/>
                            <circle cx="170" cy="80" r="5" fill="#be123c"/>
                            <text x="175" y="70" fill="#be123c" font-weight="bold">B</text>
                            
                            <rect x="160" y="130" width="10" height="10" fill="none" stroke="#be123c" stroke-width="1.5"/>
                            
                            <line x1="50" y1="140" x2="170" y2="80" stroke="#047857" stroke-width="3"/>
                            
                            <path d="M 170 80 A 134.16 134.16 0 0 1 184.16 140" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="6,4"/>
                            <circle cx="184.16" cy="140" r="5" fill="#ea580c"/>
                            <text x="180" y="165" fill="#ea580c" font-weight="bold">P(√5)</text>
                            
                            <text x="110" y="155" fill="#1e3a8a" font-size="12" font-weight="bold">2 એકમ</text>
                            <text x="180" y="115" fill="#be123c" font-size="12" font-weight="bold">1 એકમ</text>
                            <text x="90" y="100" fill="#047857" font-weight="bold" font-size="16">√5</text>
                        </svg>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:10px; border-left:4px solid #ca8a04; margin-top:15px;'>
                    <b>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    કોઈપણ વર્ગમૂળ દર્શાવવા માટે તે સંખ્યાની નજીકનો <b>પૂર્ણવર્ગ</b> શોધી કાઢો. જેમ કે 5 ની નજીક પૂર્ણવર્ગ 4 છે (જે 2 નો વર્ગ છે). એટલે પાયામાં સીધા 2 એકમ લઈ લેવા અને ઊભી લાઈન (લંબ) હંમેશા <b>1 એકમ</b> જ લેવી. દાખલો એકદમ આસાનીથી પૂરો!
                </div>`
            },            
            { 
                "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચેની સંખ્યાઓને દશાંશ સ્વરૂપમાં લખો અને તે કેવા પ્રકારની દશાંશ અભિવ્યક્તિ ધરાવે છે તે જણાવો:\n(i) 36/100  (ii) 1/11", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:20px;'>
                    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px; border-top:1px solid #bbf7d0; border-right:1px solid #bbf7d0; border-bottom:1px solid #bbf7d0;'>
                        <h4 style='color:#14532d; margin:0 0 10px 0; font-size:16px;'>(i) 36 / 100</h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0; display:inline-block;'>
                            <div style='display:inline-block; vertical-align:middle; text-align:center; font-size:18px; font-weight:bold;'>
                                <div style='border-bottom:2px solid #047857; padding:0 5px; color:#047857;'>36</div>
                                <div style='padding:0 5px; color:#1e3a8a;'>100</div>
                            </div>
                            <span style='font-size:20px; font-weight:bold; color:#1e3a8a;'> = 0.36</span>
                        </div>
                        <p style='margin:10px 0 0 0; font-size:15px; color:#166534;'>અહીં શેષ શૂન્ય થઈ જાય છે, તેથી આ <b>શાંત દશાંશ અભિવ્યક્તિ</b> છે.</p>
                    </div>

                    <div style='background-color:#f8fafc; padding:15px; border-left:5px solid #0284c7; border-radius:8px; border-top:1px solid #bae6fd; border-right:1px solid #bae6fd; border-bottom:1px solid #bae6fd;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0; font-size:16px;'>(ii) 1 / 11</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'>ચાલો 1 નો 11 વડે ભાગાકાર કરીએ (મોબાઈલમાં જોવા માટે ભાગાકારને ડાબી-જમણી બાજુ સ્ક્રોલ કરો):</p>
                        
                        <div style='overflow-x:auto; background-color:#ffffff; padding:15px; border-radius:8px; border:1px dashed #94a3b8;'>
                            <div style='min-width:250px; font-family:monospace; font-size:16px; line-height:1.5; color:#0f172a;'>
                                <div style='margin-left:45px; color:#be123c; font-weight:bold;'>&nbsp;&nbsp;0.0909...</div>
                                <div style='margin-left:45px; border-top:2px solid #0f172a; width:100px;'></div>
                                <div style='display:flex;'>
                                    <div style='width:40px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>11</div>
                                    <div style='border-left:2px solid #0f172a; padding-left:5px;'>
                                        <div>&nbsp;1.0000</div>
                                        <div style='color:#64748b;'>-0</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>
                                        <div>&nbsp;10</div>
                                        <div style='color:#64748b;'>-&nbsp;0</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>
                                        <div>&nbsp;100</div>
                                        <div style='color:#be123c;'>-&nbsp;99</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:50px;'></div>
                                        <div>&nbsp;&nbsp;&nbsp;100</div>
                                        <div style='color:#be123c;'>&nbsp;&nbsp;-&nbsp;99</div>
                                        <div style='border-bottom:1px solid #cbd5e1; width:60px;'></div>
                                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <p style='margin:10px 0 0 0; font-size:15px; color:#0369a1;'>અહીં શેષ વારંવાર 1 આવે છે. ભાગફળમાં 09 નું પુનરાવર્તન થાય છે.<br>
                        તેથી, <b>1/11 = 0.0909... = 0.<span style='text-decoration:overline;'>09</span></b></p>
                        <p style='margin:5px 0 0 0; font-size:15px; color:#0c4a6e; font-weight:bold;'>આ અભિવ્યક્તિ <b>અનંત આવૃત દશાંશ અભિવ્યક્તિ</b> છે.</p>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>ભાગાકાર કર્યા વગર પણ દશાંશનો પ્રકાર જાણી શકાય! જો છેદના અવયવો <b>ફક્ત 2 અથવા 5</b> જ હોય (અથવા બંને હોય), તો તે હંમેશા <b>શાંત દશાંશ</b> જ હોય. જો 2 કે 5 સિવાયનો કોઈ પણ અવયવ (જેમ કે 3, 7, 11) આવે, તો તે <b>અનંત આવૃત</b> જ હોય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 3",
                "marks": 3,
                "question": "p પૂર્ણાંક હોય અને q શૂન્યેતર પૂર્ણાંક હોય તેવા p, q માટે નીચેની સંખ્યાઓને p/q સ્વરૂપમાં દર્શાવો:\n(i) 0.6̅ \n(ii) 0.47̅", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(i) 0.<span style='text-decoration:overline;'>6</span> ને p/q સ્વરૂપમાં ફેરવવું:</h4>
                        
                        <div style='background-color:#f1f5f9; padding:12px; border-radius:5px; font-size:15px; color:#334155; line-height:1.8;'>
                            ધારો કે <b>x = 0.<span style='text-decoration:overline;'>6</span></b><br>
                            &there4; x = 0.6666... <b>--- (સમીકરણ 1)</b><br><br>
                            અહીં 1 અંક (6) નું પુનરાવર્તન થાય છે, તેથી બંને બાજુ 10 વડે ગુણતા:<br>
                            10x = 6.6666... <b>--- (સમીકરણ 2)</b><br><br>
                            સમીકરણ 2 માંથી 1 બાદ કરતા:<br>
                            <div style='font-family:monospace; margin-left:20px; font-size:16px;'>
                                &nbsp;10x = 6.6666...<br>
                                - &nbsp;x = 0.6666...<br>
                                <div style='border-top:1px solid #94a3b8; width:150px;'></div>
                                &nbsp;&nbsp;9x = 6.0000...
                            </div><br>
                            &there4; 9x = 6<br>
                            &there4; x = 6/9 <br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 2/3</b> (છેદ ઉડાડતા)
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#be123c; margin:0 0 10px 0;'>(ii) 0.4<span style='text-decoration:overline;'>7</span> ને p/q સ્વરૂપમાં ફેરવવું:</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#64748b;'>(નોંધ: અહીં માત્ર 7 પર જ બાર છે, 4 પર નથી)</p>
                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; font-size:15px; color:#881337; line-height:1.8;'>
                            ધારો કે <b>x = 0.4777...</b> <b>--- (સમીકરણ 1)</b><br><br>
                            અહીં માત્ર 1 અંક (7) નું પુનરાવર્તન થાય છે, તેથી 10 વડે ગુણતા:<br>
                            10x = 4.7777... <b>--- (સમીકરણ 2)</b><br><br>
                            સમીકરણ 2 માંથી 1 બાદ કરતા:<br>
                            <div style='font-family:monospace; margin-left:20px; font-size:16px;'>
                                &nbsp;10x = 4.777...<br>
                                - &nbsp;x = 0.477...<br>
                                <div style='border-top:1px solid #fecdd3; width:150px;'></div>
                                &nbsp;&nbsp;9x = 4.300...
                            </div><br>
                            &there4; 9x = 4.3<br>
                            &there4; 9x = 43/10<br>
                            &there4; x = 43 / (10 &times; 9)<br>
                            &there4; <b style='color:#e11d48; font-size:16px;'>x = 43/90</b>
                        </div>
                    </div>
                </div>

                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (Super Shortcut):</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>હેતુલક્ષી પ્રશ્નો માટે ગણતરી કર્યા વગર સીધો જ જવાબ લખો!</p>
                    <ul style='margin:5px 0 0 0; font-size:14px; color:#78350f; padding-left:20px; line-height:1.8;'>
                        <li><b>ટ્રીક 1:</b> પોઈન્ટ પછી જેટલા આંકડા પર બાર (રેખા) હોય, તેટલા <b>9</b> છેદમાં મૂકી દો.<br>
                        દા.ત. 0.<span style='text-decoration:overline;'>6</span> &rarr; 6/9 (છેદ ઉડાડતા 2/3)<br>
                        0.<span style='text-decoration:overline;'>001</span> &rarr; 1/999 (કારણ કે 3 અંક પર બાર છે)</li>
                        <li><b>ટ્રીક 2:</b> જો અમુક અંક પર બાર ન હોય (જેમ કે 0.4<span style='text-decoration:overline;'>7</span>):<br>
                        સ્ટેપ 1: આખી સંખ્યા (47) માંથી બાર વગરની સંખ્યા (4) <b>બાદ કરો</b> &rarr; 47 - 4 = <b>43</b> (આ તમારો અંશ).<br>
                        સ્ટેપ 2: જેટલા અંક પર બાર છે તેટલા <b>9</b> અને જેટલા પર નથી તેટલા <b>0</b> છેદમાં લખો &rarr; એક 9 અને એક 0 એટલે <b>90</b>.<br>
                        જવાબ: <b style='color:#be123c;'>43/90</b> સીધો તૈયાર!</li>
                    </ul>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.3 - પ્રશ્ન 5",
                "marks": 4,
                "question": "1/17 ની દશાંશ અભિવ્યક્તિમાં પુનરાવર્તિત અંકોની સંખ્યા વધુમાં વધુ કેટલી હશે? તમારો જવાબ ભાગાકાર કરીને ચકાસો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>નિયમ:</b> કોઈપણ અપૂર્ણાંક 1/n માટે, પુનરાવર્તિત અંકોની મહત્તમ સંખ્યા હંમેશા (n - 1) કરતાં ઓછી અથવા બરાબર હોય છે.</p>
                    
                    <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; margin-bottom:15px;'>
                        <p style='margin:0; font-size:15px; color:#14532d;'>અહીં n = 17 છે. તેથી પુનરાવર્તિત અંકોની મહત્તમ સંખ્યા <b>17 - 1 = 16</b> હોઈ શકે.</p>
                    </div>
                    
                    <p style='margin:0 0 10px 0; font-size:15px; color:#1e3a8a; font-weight:bold;'>ભાગાકારની ચકાસણી (મોબાઈલમાં જોવા માટે સ્ક્રોલ કરો):</p>
                    
                    <div style='overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;'>
                         <div style='min-width:350px; font-family:monospace; font-size:14px; line-height:1.4; color:#0f172a;'>
                            <div style='color:#be123c; font-weight:bold; letter-spacing:1px;'>&nbsp;&nbsp;&nbsp;0.0588235294117647...</div>
                            <div style='border-top:2px solid #0f172a; width:190px; margin-left:30px;'></div>
                            <div style='display:flex;'>
                                <div style='width:30px; text-align:right; padding-right:5px; color:#1e3a8a; font-weight:bold;'>17</div>
                                <div style='border-left:2px solid #0f172a; padding-left:5px;'>
                                    <div>&nbsp;1.0000000000000000</div>
                                    <div style='color:#64748b;'>-0</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;10</div>
                                    <div style='color:#64748b;'>-&nbsp;0</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;100</div>
                                    <div style='color:#ea580c;'>-&nbsp;85</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;150</div>
                                    <div style='color:#ea580c;'>-&nbsp;136</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;&nbsp;140</div>
                                    <div style='color:#ea580c;'>&nbsp;&nbsp;-136</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40</div>
                                    <div style='color:#ea580c;'>&nbsp;&nbsp;&nbsp;&nbsp;-34</div>
                                    <div style='border-bottom:1px dashed #cbd5e1; width:150px;'></div>
                                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;60</div>
                                    <div style='color:#64748b;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(આ રીતે આગળ વધતા અંતે ફરીથી 1 શેષ વધશે...)</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style='background-color:#eff6ff; padding:12px; border-radius:5px; border:1px solid #bfdbfe; margin-top:15px;'>
                        <p style='margin:0; font-size:15px; color:#1e40af;'>સંપૂર્ણ ભાગાકાર કરતા આપણને ભાગફળ <b>0.<span style='text-decoration:overline;'>0588235294117647</span></b> મળે છે. અહીં 16 અંકો પછી ફરીથી પુનરાવર્તન ચાલુ થાય છે. તેથી પુનરાવર્તિત અંકોની સંખ્યા <b>16</b> છે.</p>
                    </div>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 1",
                "marks": 2,
                "question": "આપેલી સંખ્યાઓ સંમેય છે કે અસંમેય તે જણાવો:\n(i) 2 - √5 \n(ii) (3 + √23) - √23 \n(iii) 2√7 / 7√7 \n(iv) 1/√2 \n(v) 2π", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <h4 style='color:#881337; margin:0 0 5px 0;'>(i) 2 - &radic;5</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'><b>અસંમેય સંખ્યા</b>. (કારણ: સંમેય સંખ્યા 2 અને અસંમેય સંખ્યા &radic;5 ની બાદબાકી હંમેશા અસંમેય જ મળે.)</p>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <h4 style='color:#14532d; margin:0 0 5px 0;'>(ii) (3 + &radic;23) - &radic;23</h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#166534;'>સાદું રૂપ: 3 + &radic;23 - &radic;23 = <b>3</b></p>
                        <p style='margin:0; font-size:14px; color:#16a34a;'><b>સંમેય સંખ્યા</b>. (કારણ: 3 ને 3/1 સ્વરૂપમાં લખી શકાય છે.)</p>
                    </div>

                    <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                        <h4 style='color:#14532d; margin:0 0 5px 0;'>(iii) (2&radic;7) / (7&radic;7)</h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#166534;'>સાદું રૂપ: અંશ અને છેદમાંથી &radic;7 ઉડી જશે, એટલે <b>2/7</b> વધશે.</p>
                        <p style='margin:0; font-size:14px; color:#16a34a;'><b>સંમેય સંખ્યા</b>. (કારણ: તે p/q સ્વરૂપમાં છે.)</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) 1 / &radic;2</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'><b>અસંમેય સંખ્યા</b>. (કારણ: શૂન્યેતર સંમેય અને અસંમેય સંખ્યાનો ભાગાકાર અસંમેય જ હોય.)</p>
                    </div>

                    <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                        <h4 style='color:#881337; margin:0 0 5px 0;'>(v) 2&pi;</h4>
                        <p style='margin:0; font-size:14px; color:#be123c;'><b>અસંમેય સંખ્યા</b>. (કારણ: &pi; અસંમેય છે, તેથી 2 નો તેની સાથેનો ગુણાકાર પણ અસંમેય થાય.)</p>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 2",
                "marks": 3,
                "question": "નીચેનાં સાદું રૂપ આપો:\n(i) (3 + √3)(2 + √2)\n(ii) (3 + √3)(3 - √3)\n(iii) (√5 + √2)²\n(iv) (√5 - √2)(√5 + √2)", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(i) (3 + &radic;3)(2 + &radic;2)</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            = 3(2 + &radic;2) + &radic;3(2 + &radic;2)<br>
                            = <b>6 + 3&radic;2 + 2&radic;3 + &radic;6</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(ii) (3 + &radic;3)(3 - &radic;3)</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            <span style='color:#64748b; font-size:13px;'>[નિત્યસમ: (a+b)(a-b) = a&sup2; - b&sup2; નો ઉપયોગ કરતા]</span><br>
                            = (3)&sup2; - (&radic;3)&sup2;<br>
                            = 9 - 3<br>
                            = <b>6</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(iii) (&radic;5 + &radic;2)&sup2;</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            <span style='color:#64748b; font-size:13px;'>[નિત્યસમ: (a+b)&sup2; = a&sup2; + 2ab + b&sup2; નો ઉપયોગ કરતા]</span><br>
                            = (&radic;5)&sup2; + 2(&radic;5)(&radic;2) + (&radic;2)&sup2;<br>
                            = 5 + 2&radic;10 + 2<br>
                            = <b>7 + 2&radic;10</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(iv) (&radic;5 - &radic;2)(&radic;5 + &radic;2)</h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px;'>
                            <span style='color:#64748b; font-size:13px;'>[નિત્યસમ: (a-b)(a+b) = a&sup2; - b&sup2; નો ઉપયોગ કરતા]</span><br>
                            = (&radic;5)&sup2; - (&radic;2)&sup2;<br>
                            = 5 - 2<br>
                            = <b>3</b>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 3",
                "marks": 2,
                "question": "યાદ કરો કે π એ વર્તુળના પરિઘ (c) અને તેના વ્યાસ (d) ના ગુણોત્તર તરીકે દર્શાવવામાં આવે છે. એટલે કે π = c/d. તે એ હકીકતનો વિરોધાભાસ કરતો જણાય છે કે π એ અસંમેય છે. આ વિરોધાભાસનો ઉકેલ તમે કેવી રીતે લાવશો?", 
                "answer": `
                <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px;'>
                    <h4 style='color:#0c4a6e; margin:0 0 10px 0; font-size:18px;'>આમાં કોઈ જ વિરોધાભાસ નથી.</h4>
                    <p style='margin:0 0 10px 0; font-size:15px; color:#334155;'><b>સમજૂતી:</b></p>
                    <ul style='margin:0; padding-left:20px; font-size:15px; color:#1e3a8a; line-height:1.6;'>
                        <li>જ્યારે આપણે માપપટ્ટી (Scale) કે અન્ય કોઈ સાધનથી લંબાઈ માપીએ છીએ, ત્યારે આપણને માત્ર એક <b>આશરે સંમેય કિંમત</b> (Approximate Rational Value) જ મળે છે.</li>
                        <li>આથી આપણે એ ચોક્કસ જાણી શકતા નથી કે પરિઘ (c) અથવા વ્યાસ (d) બંનેમાંથી કોઈ એક અસંમેય છે કે નહીં.</li>
                        <li>હકીકતમાં, વર્તુળના કિસ્સામાં c અથવા d બે માંથી એક ચોક્કસપણે <b>અસંમેય</b> હોય છે.</li>
                        <li>તેથી, તેમનો ગુણોત્તર (c/d) પણ અસંમેય જ બને છે, એટલે જ &pi; અસંમેય સંખ્યા છે.</li>
                    </ul>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 4",
                "marks": 4,
                "question": "સંખ્યારેખા પર √9.3 દર્શાવો.", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='border:1px solid #bbf7d0; background-color:#f0fdf4; padding:12px; border-radius:8px; margin-bottom:15px;'>
                        <h4 style='color:#047857; margin:0 0 5px 0; font-size:16px;'>રચનાના પગલાં:</h4>
                        <ol style='margin:0; font-size:14px; color:#14532d; padding-left:20px; line-height:1.8;'>
                            <li>એક કિરણ દોરી તેના પર બિંદુ <b>A</b> અને <b>B</b> એવા લો કે જેથી <b>AB = 9.3 એકમ</b> થાય.</li>
                            <li>બિંદુ B થી આગળ એ જ રેખા પર <b>1 એકમ</b> ના અંતરે બિંદુ <b>C</b> લો (એટલે BC = 1 એકમ). તેથી AC = 9.3 + 1 = 10.3 એકમ થશે.</li>
                            <li>રેખાખંડ AC નો લંબદ્વિભાજક દોરી તેનું મધ્યબિંદુ <b>O</b> મેળવો.</li>
                            <li>O ને કેન્દ્ર અને OA (અથવા OC) જેટલી ત્રિજ્યા લઈ <b>અર્ધવર્તુળ</b> દોરો.</li>
                            <li>બિંદુ <b>B</b> આગળથી રેખા AC ને લંબ હોય તેવી રેખા દોરો, જે અર્ધવર્તુળને <b>D</b> બિંદુમાં છેદે. અહીં <b>BD ની લંબાઈ &radic;9.3</b> થશે.</li>
                            <li>હવે B ને શૂન્ય (0) માની, B ને કેન્દ્ર લઈ BD જેટલી ત્રિજ્યા લઈ પરિકરથી ચાપ મારો, જે સંખ્યારેખાને જ્યાં છેદે તે બિંદુ <b>E એ &radic;9.3</b> દર્શાવે છે.</li>
                        </ol>
                    </div>
                    
                    <p style='text-align:center; margin:0 0 10px 0; color:#1e3a8a; font-weight:bold;'>રચનાની આકૃતિ (મોબાઈલમાં જોવા માટે સ્ક્રોલ કરો)</p>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px solid #e2e8f0;'>
                        <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 200">
                            <line x1="20" y1="160" x2="380" y2="160" stroke="#1e3a8a" stroke-width="2"/>
                            
                            <circle cx="50" cy="160" r="4" fill="#1e3a8a"/>
                            <text x="45" y="180" fill="#1e3a8a" font-weight="bold">A</text>
                            
                            <circle cx="236" cy="160" r="4" fill="#1e3a8a"/>
                            <text x="230" y="180" fill="#1e3a8a" font-weight="bold">B (0)</text>
                            
                            <circle cx="256" cy="160" r="4" fill="#1e3a8a"/>
                            <text x="252" y="180" fill="#1e3a8a" font-weight="bold">C (1)</text>
                            
                            <path d="M 50 190 L 50 185 L 236 185 L 236 190" fill="none" stroke="#64748b" stroke-width="1"/>
                            <text x="135" y="198" fill="#64748b" font-size="12">9.3 એકમ</text>
                            
                            <circle cx="153" cy="160" r="4" fill="#ea580c"/>
                            <text x="148" y="180" fill="#ea580c" font-weight="bold">O</text>
                            
                            <path d="M 50 160 A 103 103 0 0 1 256 160" fill="none" stroke="#047857" stroke-width="2"/>
                            
                            <line x1="236" y1="160" x2="236" y2="99" stroke="#be123c" stroke-width="2.5"/>
                            <circle cx="236" cy="99" r="4" fill="#be123c"/>
                            <text x="225" y="90" fill="#be123c" font-weight="bold">D</text>
                            <text x="242" y="130" fill="#be123c" font-weight="bold">√9.3</text>
                            
                            <path d="M 236 99 A 61 61 0 0 1 297 160" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,5"/>
                            <circle cx="297" cy="160" r="4" fill="#ea580c"/>
                            <text x="285" y="180" fill="#ea580c" font-weight="bold">E (√9.3)</text>
                        </svg>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.4 - પ્રશ્ન 5",
                "marks": 4,
                "question": "નીચે આપેલી સંખ્યાઓના છેદનું સંમેયીકરણ કરો:\n(i) 1/√7\n(ii) 1/(√7 - √6)\n(iii) 1/(√5 + √2)\n(iv) 1/(√7 - 2)", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(i) 1 / &radic;7</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>અંશ અને છેદ બંનેને <b>&radic;7</b> વડે ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>&radic;7</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>&radic;7</div>
                                <div style='padding:0 5px; color:#be123c;'>&radic;7</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; font-size:16px;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px;'>&radic;7</div>
                                <div style='padding:0 5px; color:#16a34a;'>7</div>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(ii) 1 / (&radic;7 - &radic;6)</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>અહીં છેદમાં માઇનસ (-) છે, તેથી વિરોધી ચિહ્ન <b>(&radic;7 + &radic;6)</b> વડે અંશ-છેદને ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>(&radic;7 - &radic;6)</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>(&radic;7 + &radic;6)</div>
                                <div style='padding:0 5px; color:#be123c;'>(&radic;7 + &radic;6)</div>
                            </div><br><br>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;7 + &radic;6</div>
                                <div style='padding:0 5px;'>(&radic;7)&sup2; - (&radic;6)&sup2;</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;7 + &radic;6</div>
                                <div style='padding:0 5px;'>7 - 6</div>
                            </div>
                            = <b style='color:#16a34a; font-size:16px;'>&radic;7 + &radic;6</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(iii) 1 / (&radic;5 + &radic;2)</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>અહીં છેદમાં પ્લસ (+) છે, તેથી <b>(&radic;5 - &radic;2)</b> વડે અંશ-છેદને ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>(&radic;5 + &radic;2)</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>(&radic;5 - &radic;2)</div>
                                <div style='padding:0 5px; color:#be123c;'>(&radic;5 - &radic;2)</div>
                            </div><br><br>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;5 - &radic;2</div>
                                <div style='padding:0 5px;'>(&radic;5)&sup2; - (&radic;2)&sup2;</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; font-size:16px;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px;'>&radic;5 - &radic;2</div>
                                <div style='padding:0 5px; color:#16a34a;'>3</div>
                            </div>
                        </div>
                    </div>

            <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(iv) 1 / (&radic;7 - 2)</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#475569;'>વિરોધી ચિહ્ન <b>(&radic;7 + 2)</b> વડે અંશ-છેદને ગુણતા:</p>
                        <div style='background-color:#f1f5f9; padding:10px; border-radius:5px;'>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>1</div>
                                <div style='padding:0 5px;'>(&radic;7 - 2)</div>
                            </div>
                            &times;
                            <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px; color:#be123c;'>(&radic;7 + 2)</div>
                                <div style='padding:0 5px; color:#be123c;'>(&radic;7 + 2)</div>
                            </div><br><br>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center;'>
                                <div style='border-bottom:1px solid #0f172a; padding:0 5px;'>&radic;7 + 2</div>
                                <div style='padding:0 5px;'>(&radic;7)&sup2; - (2)&sup2;</div>
                            </div>
                            = <div style='display:inline-block; vertical-align:middle; text-align:center; font-weight:bold; font-size:16px;'>
                                <div style='border-bottom:2px solid #16a34a; padding:0 5px;'>&radic;7 + 2</div>
                                <div style='padding:0 5px; color:#16a34a;'>3</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (Shortcut):</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>જ્યારે અંશમાં 1 હોય અને છેદમાં <b>&radic;a &plusmn; &radic;b</b> જેવું પદ હોય, ત્યારે હેતુલક્ષી પ્રશ્નમાં સીધો જવાબ લખવા માટે:</p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#78350f;'><b>સ્ટેપ 1:</b> છેદનું ચિહ્ન બદલીને પદને ઉપર (અંશમાં) મૂકી દો.<br><b>સ્ટેપ 2:</b> છેદમાં બંને સંખ્યાઓના વર્ગની બાદબાકી (મોટામાંથી નાનું) મૂકી દો.</p>
                    <p style='margin:5px 0 0 0; font-size:14px; color:#b45309; font-weight:bold;'>ઉદાહરણ તરીકે: 1 / (&radic;5 + &radic;2) &rarr; ચિહ્ન બદલો: &radic;5 - &radic;2 (આ અંશ છે). નીચે 5 - 2 = 3 મૂકો. જવાબ: (&radic;5 - &radic;2) / 3</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 1.5 - પ્રશ્ન 1",
                "marks": 2,
                "question": "કિંમત શોધો:\n(i) 64<sup>1/2</sup>\n(ii) 32<sup>1/5</sup>\n(iii) 125<sup>1/3</sup>", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:12px;'>
                    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                        <h4 style='color:#14532d; margin:0 0 8px 0; font-size:16px;'>(i) 64<sup>1/2</sup></h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0;'>
                            <p style='margin:0; font-size:15px; color:#166534; line-height:1.6;'>
                                આપણે જાણીએ છીએ કે 64 એ 8 નો વર્ગ છે. એટલે કે 64 = 8<sup>2</sup><br>
                                &there4; (8<sup>2</sup>)<sup>1/2</sup><br>
                                <span style='color:#64748b; font-size:13px;'>[નિયમ: (a<sup>m</sup>)<sup>n</sup> = a<sup>m &times; n</sup> મુજબ ઘાતોનો ગુણાકાર થશે]</span><br>
                                = 8<sup>2 &times; (1/2)</sup><br>
                                = 8<sup>1</sup><br>
                                = <b style='font-size:18px; color:#15803d;'>8</b>
                            </p>
                        </div>
                    </div>

                    <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 8px 0; font-size:16px;'>(ii) 32<sup>1/5</sup></h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd;'>
                            <p style='margin:0; font-size:15px; color:#0369a1; line-height:1.6;'>
                                32 ના અવયવો પાડીએ તો: 32 = 2 &times; 2 &times; 2 &times; 2 &times; 2 = 2<sup>5</sup><br>
                                &there4; (2<sup>5</sup>)<sup>1/5</sup><br>
                                = 2<sup>5 &times; (1/5)</sup><br>
                                = 2<sup>1</sup><br>
                                = <b style='font-size:18px; color:#1d4ed8;'>2</b>
                            </p>
                        </div>
                    </div>

                    <div style='background-color:#fff1f2; padding:15px; border-left:5px solid #be123c; border-radius:8px;'>
                        <h4 style='color:#881337; margin:0 0 8px 0; font-size:16px;'>(iii) 125<sup>1/3</sup></h4>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #fecdd3;'>
                            <p style='margin:0; font-size:15px; color:#be123c; line-height:1.6;'>
                                125 એ 5 નો ઘન છે. એટલે કે 125 = 5<sup>3</sup><br>
                                &there4; (5<sup>3</sup>)<sup>1/3</sup><br>
                                = 5<sup>3 &times; (1/3)</sup><br>
                                = 5<sup>1</sup><br>
                                = <b style='font-size:18px; color:#b91c1c;'>5</b>
                            </p>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.5 - પ્રશ્ન 2",
                "marks": 3,
                "question": "કિંમત શોધો:\n(i) 9<sup>3/2</sup>\n(ii) 32<sup>2/5</sup>\n(iii) 16<sup>3/4</sup>\n(iv) 125<sup>-1/3</sup>", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(i) 9<sup>3/2</sup></h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px; color:#334155;'>
                            અહીં 9 = 3<sup>2</sup><br>
                            &there4; (3<sup>2</sup>)<sup>3/2</sup><br>
                            = 3<sup>2 &times; (3/2)</sup> <span style='color:#64748b; font-size:13px;'>(2 અને 2 ઊડી જશે)</span><br>
                            = 3<sup>3</sup><br>
                            = 3 &times; 3 &times; 3 = <b style='color:#047857; font-size:18px;'>27</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(ii) 32<sup>2/5</sup></h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px; color:#334155;'>
                            અહીં 32 = 2<sup>5</sup><br>
                            &there4; (2<sup>5</sup>)<sup>2/5</sup><br>
                            = 2<sup>5 &times; (2/5)</sup> <span style='color:#64748b; font-size:13px;'>(5 અને 5 ઊડી જશે)</span><br>
                            = 2<sup>2</sup><br>
                            = 2 &times; 2 = <b style='color:#047857; font-size:18px;'>4</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 8px 0;'>(iii) 16<sup>3/4</sup></h4>
                        <div style='background-color:#f8fafc; padding:10px; border-radius:5px; color:#334155;'>
                            અહીં 16 = 2<sup>4</sup><br>
                            &there4; (2<sup>4</sup>)<sup>3/4</sup><br>
                            = 2<sup>4 &times; (3/4)</sup> <span style='color:#64748b; font-size:13px;'>(4 અને 4 ઊડી જશે)</span><br>
                            = 2<sup>3</sup><br>
                            = 2 &times; 2 &times; 2 = <b style='color:#047857; font-size:18px;'>8</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#be123c; margin:0 0 8px 0;'>(iv) 125<sup>-1/3</sup></h4>
                        <div style='background-color:#fff1f2; padding:10px; border-radius:5px; color:#881337;'>
                            અહીં 125 = 5<sup>3</sup><br>
                            &there4; (5<sup>3</sup>)<sup>-1/3</sup><br>
                            = 5<sup>3 &times; (-1/3)</sup> <span style='color:#64748b; font-size:13px;'>(3 અને 3 ઊડી જશે)</span><br>
                            = 5<sup>-1</sup><br>
                            <span style='color:#64748b; font-size:13px;'>[નિયમ: a<sup>-n</sup> = 1/a<sup>n</sup> મુજબ]</span><br>
                            = <b style='color:#be123c; font-size:18px;'>1 / 5</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં હંમેશા ઘાતાંકનો <b>છેદ</b> જુઓ. જેમ કે 32<sup>2/5</sup> માં છેદમાં <b>5</b> છે. તો સમજી લેવું કે કૌંસની અંદર આપેલી સંખ્યા કોઈકની <b>5 ઘાત</b> જ હશે! (અહીં 32 એ 2 ની 5 ઘાત છે). આ ટ્રીકથી દાખલો કઈ દિશામાં ગણવો તેનો સીધો આઇડિયા આવી જશે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 1.5 - પ્રશ્ન 3",
                "marks": 4,
                "question": "સાદું રૂપ આપો:\n(i) 2<sup>2/3</sup> &cdot; 2<sup>1/5</sup>\n(ii) (1 / 3<sup>3</sup>)<sup>7</sup>\n(iii) 11<sup>1/2</sup> / 11<sup>1/4</sup>\n(iv) 7<sup>1/2</sup> &cdot; 8<sup>1/2</sup>", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(i) 2<sup>2/3</sup> &cdot; 2<sup>1/5</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> આધાર સરખો હોય અને ગુણાકાર હોય, તો ઘાતાંકનો સરવાળો થાય. (a<sup>m</sup> &cdot; a<sup>n</sup> = a<sup>m+n</sup>)</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = 2<sup>(2/3 + 1/5)</sup><br>
                            <span style='color:#64748b; font-size:13px;'>(લ.સા.અ. 15 લેતા)</span><br>
                            = 2<sup>(10 + 3) / 15</sup><br>
                            = <b style='color:#1e3a8a; font-size:16px;'>2<sup>13/15</sup></b>
                        </div>
                    </div>

                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(ii) (1 / 3<sup>3</sup>)<sup>7</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> (a/b)<sup>m</sup> = a<sup>m</sup> / b<sup>m</sup></p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = 1<sup>7</sup> / (3<sup>3</sup>)<sup>7</sup><br>
                            = 1 / 3<sup>(3 &times; 7)</sup><br>
                            = 1 / 3<sup>21</sup> <br>
                            = <b style='color:#1e3a8a; font-size:16px;'>3<sup>-21</sup></b>
                        </div>
                    </div>

                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(iii) 11<sup>1/2</sup> / 11<sup>1/4</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> આધાર સરખો હોય અને ભાગાકાર હોય, તો ઘાતાંકની બાદબાકી થાય. (a<sup>m</sup> / a<sup>n</sup> = a<sup>m-n</sup>)</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = 11<sup>(1/2 - 1/4)</sup><br>
                            <span style='color:#64748b; font-size:13px;'>(અડધામાંથી પા બાદ જાય તો પા વધે, અથવા લ.સા.અ. 4 લેતા)</span><br>
                            = 11<sup>(2 - 1) / 4</sup><br>
                            = <b style='color:#1e3a8a; font-size:16px;'>11<sup>1/4</sup></b>
                        </div>
                    </div>

                    <div style='background-color:#f4f4f5; padding:15px; border-left:4px solid #52525b; border-radius:5px;'>
                        <h4 style='color:#27272a; margin:0 0 8px 0;'>(iv) 7<sup>1/2</sup> &cdot; 8<sup>1/2</sup></h4>
                        <p style='margin:0 0 5px 0; font-size:14px; color:#52525b;'><b>નિયમ:</b> આધાર અલગ હોય પરંતુ ઘાતાંક સરખો હોય, તો આધારનો ગુણાકાર થાય. (a<sup>m</sup> &cdot; b<sup>m</sup> = (ab)<sup>m</sup>)</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                            = (7 &times; 8)<sup>1/2</sup><br>
                            = <b style='color:#1e3a8a; font-size:16px;'>56<sup>1/2</sup></b>
                        </div>
                    </div>
                </div>`
            }
            ]
    },
                
    // ------------------------------------
    // ધોરણ 9 - પ્રકરણ 2: બહુપદીઓ (સ્વાધ્યાય)
    // ------------------------------------
    "2": {
        "chapterName": "પ્રકરણ 2",
        "chapterTitle": "બહુપદીઓ (સ્વાધ્યાય)",
        "qa_list": [
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નીચે આપેલી અભિવ્યક્તિઓ પૈકી કઈ બહુપદી એક ચલવાળી છે અને કઈ નથી? તમારા જવાબ માટે કારણ આપો.\n(i) 4x² - 3x + 7\n(ii) y² + √2\n(iii) 3√t + t√2\n(iv) y + 2/y\n(v) x¹⁰ + y³ + t⁵⁰", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>નિયમ: જો અભિવ્યક્તિમાં માત્ર એક જ પ્રકારનો અક્ષર (ચલ) હોય અને તેની ઘાત હંમેશા 'પૂર્ણ સંખ્યા' (0, 1, 2, 3...) હોય, તો જ તેને એક ચલવાળી બહુપદી કહેવાય.</p>
                    
                    <div style='overflow-x:auto;'>
                        <div style='display:flex; flex-direction:column; gap:10px; min-width:300px;'>
                            <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) 4x<sup>2</sup> - 3x + 7</h4>
                                <p style='margin:0; font-size:14px; color:#166534;'><b>હા</b>, આ એક ચલવાળી બહુપદી છે. કારણ કે તેમાં માત્ર એક જ ચલ '$x$' છે અને તેની તમામ ઘાત (2 અને 1) પૂર્ણ સંખ્યાઓ છે.</p>
                            </div>

                            <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <h4 style='color:#14532d; margin:0 0 5px 0;'>(ii) y<sup>2</sup> + &radic;2</h4>
                                <p style='margin:0; font-size:14px; color:#166534;'><b>હા</b>, આ એક ચલવાળી બહુપદી છે. ચલ '$y$' ની ઘાત 2 છે જે પૂર્ણ સંખ્યા છે. (અચળ પદ &radic;2 હોય તેનાથી કોઈ ફરક પડતો નથી).</p>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iii) 3&radic;t + t&radic;2</h4>
                                <p style='margin:0; font-size:14px; color:#be123c;'><b>ના</b>, આ બહુપદી નથી. કારણ કે &radic;t એટલે t ની 1/2 ઘાત. અહીં ઘાત 1/2 એ પૂર્ણ સંખ્યા નથી.</p>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) y + <div style='display:inline-block; vertical-align:middle; text-align:center;'><div style='border-bottom:1px solid #be123c; padding:0 2px;'>2</div><div>y</div></div></h4>
                                <p style='margin:0; font-size:14px; color:#be123c;'><b>ના</b>, આ બહુપદી નથી. કારણ કે છેદમાં રહેલા y ને અંશમાં લાવતા તેની ઘાત -1 (ઋણ) થઈ જાય છે, જે પૂર્ણ સંખ્યા નથી.</p>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(v) x<sup>10</sup> + y<sup>3</sup> + t<sup>50</sup></h4>
                                <p style='margin:0; font-size:14px; color:#be123c;'><b>ના</b>, આ 'એક ચલવાળી' બહુપદી નથી. આ બહુપદી છે, પરંતુ તેમાં ત્રણ અલગ અલગ ચલ (x, y, અને t) આવેલા છે.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:10px 0 0 0; font-size:15px; color:#854d0e;'>કોઈપણ પદાવલિને જોતાં જ ઓળખી જાવ કે તે બહુપદી છે કે નહિ! બસ આ 3 વસ્તુ ચકાસો:<br>
                    1️⃣ ચલ (x કે y) ક્યારેય <b>છેદમાં</b> ન હોવો જોઈએ.<br>
                    2️⃣ ચલ ક્યારેય <b>વર્ગમૂળ (કે ઘનમૂળ)</b> માં ન હોવો જોઈએ.<br>
                    3️⃣ ચલની ઘાત ક્યારેય <b>માઇનસ (-)</b> કે <b>અપૂર્ણાંક</b> ન હોવી જોઈએ.<br>
                    જો આ ત્રણેય વસ્તુ પાસ થાય, તો તે બહુપદી કહેવાય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 2",
                "marks": 2,
                "question": "નીચેનામાં x² નો સહગુણક લખો:\n(i) 2 + x² + x\n(ii) 2 - x² + x³\n(iii) (π/2)x² + x\n(iv) √2x - 1", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:14px;'>સમજૂતી આકૃતિ (બહુપદીના અંગો):</p>
                        <svg width="250" height="100" xmlns="http://www.w3.org/2000/svg">
                            <text x="60" y="60" fill="#be123c" font-size="24" font-weight="bold">- 5</text>
                            <text x="100" y="60" fill="#1e3a8a" font-size="24" font-weight="bold">x</text>
                            <text x="115" y="45" fill="#047857" font-size="16" font-weight="bold">2</text>
                            
                            <line x1="75" y1="65" x2="75" y2="85" stroke="#be123c" stroke-width="2"/>
                            <text x="50" y="98" fill="#be123c" font-size="12" font-weight="bold">સહગુણક</text>
                            
                            <line x1="105" y1="65" x2="105" y2="85" stroke="#1e3a8a" stroke-width="2"/>
                            <text x="95" y="98" fill="#1e3a8a" font-size="12" font-weight="bold">ચલ</text>
                            
                            <line x1="120" y1="30" x2="120" y2="15" stroke="#047857" stroke-width="2"/>
                            <text x="105" y="10" fill="#047857" font-size="12" font-weight="bold">ઘાતાંક</text>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:10px;'>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(i) 2 + <b>x<sup>2</sup></b> + x</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> ની આગળ કોઈ સંખ્યા નથી, એટલે 1 ગણાય. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#16a34a; font-size:18px;'>1</b></p>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(ii) 2 <b>- x<sup>2</sup></b> + x<sup>3</sup></h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> ની આગળ માઇનસ (-) ની નિશાની છે. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#be123c; font-size:18px;'>-1</b></p>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(iii) <b>(&pi;/2)x<sup>2</sup></b> + x</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> ની સાથે ગુણાકારમાં &pi;/2 છે. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#1e3a8a; font-size:18px;'>&pi;/2</b></p>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0; font-size:15px;'>(iv) &radic;2x - 1</h4>
                            <p style='margin:0; font-size:15px; color:#334155;'>અહીં x<sup>2</sup> વાળું પદ <b>આપેલું જ નથી</b>. તેથી x<sup>2</sup> નો સહગુણક = <b style='color:#ea580c; font-size:18px;'>0</b></p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>જેનો પણ સહગુણક પૂછ્યો હોય (દા.ત. x<sup>2</sup>), તેની પર આંગળી મૂકી દો! હવે તેની <b>બરાબર આગળ</b> (ડાબી બાજુ) નિશાની સહિત જે દેખાય તે તમારો જવાબ. અને જો તે પદ હોય જ નહિ, તો સીધો ઝીરો (0) મૂકી દેવો!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 3",
                "marks": 2,
                "question": "35 ઘાતવાળી દ્વિપદીનું કોઈ પણ એક ઉદાહરણ અને 100 ઘાતવાળી એકપદીનું કોઈ પણ એક ઉદાહરણ આપો.", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#f0f9ff; padding:15px; border-left:5px solid #0284c7; border-radius:8px;'>
                        <h4 style='color:#0c4a6e; margin:0 0 8px 0; font-size:16px;'>(1) 35 ઘાતવાળી દ્વિપદી:</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'><b>સમજૂતી:</b> દ્વિપદી એટલે જેમાં બે પદ હોય (વત્તા કે ઓછાથી જોડાયેલા). અને મોટી ઘાત 35 હોવી જોઈએ.</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-size:18px;'>
                            <b>ઉદાહરણ:</b> <span style='color:#1d4ed8;'>3x<sup>35</sup> - 4</span><br>
                            <span style='font-size:14px; color:#64748b;'>(અન્ય ઉદાહરણ: y<sup>35</sup> + 10, 5t<sup>35</sup> - t<sup>2</sup> વગેરે લખી શકાય.)</span>
                        </div>
                    </div>

                    <div style='background-color:#f0fdf4; padding:15px; border-left:5px solid #16a34a; border-radius:8px;'>
                        <h4 style='color:#14532d; margin:0 0 8px 0; font-size:16px;'>(2) 100 ઘાતવાળી એકપદી:</h4>
                        <p style='margin:0 0 10px 0; font-size:14px; color:#334155;'><b>સમજૂતી:</b> એકપદી એટલે જેમાં માત્ર એક જ પદ હોય. અને તેની ઘાત 100 હોવી જોઈએ.</p>
                        <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bbf7d0; font-size:18px;'>
                            <b>ઉદાહરણ:</b> <span style='color:#15803d;'>&radic;2y<sup>100</sup></span><br>
                            <span style='font-size:14px; color:#64748b;'>(અન્ય ઉદાહરણ: 5x<sup>100</sup>, -t<sup>100</sup> વગેરે લખી શકાય.)</span>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 4",
                "marks": 2,
                "question": "નીચે આપેલી બહુપદીઓની ઘાત જણાવો:\n(i) 5x³ + 4x² + 7x\n(ii) 4 - y²\n(iii) 5t - √7\n(iv) 3", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:10px;'>
                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(i) 5x<sup>3</sup> + 4x<sup>2</sup> + 7x</h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં ચલ x ની સૌથી મોટી ઘાત 3 છે. તેથી બહુપદીની ઘાત = <b style='color:#1e3a8a; font-size:18px;'>3</b></p>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(ii) 4 - y<sup>2</sup></h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં ચલ y ની સૌથી મોટી ઘાત 2 છે. તેથી બહુપદીની ઘાત = <b style='color:#1e3a8a; font-size:18px;'>2</b></p>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(iii) 5t - &radic;7</h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં ચલ t ની ઉપર કોઈ ઘાત નથી દેખાતી, એટલે 1 હોય. તેથી બહુપદીની ઘાત = <b style='color:#1e3a8a; font-size:18px;'>1</b></p>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0; font-size:15px;'>(iv) 3</h4>
                            <p style='margin:0; font-size:15px; color:#3f3f46;'>અહીં કોઈ ચલ જ નથી (આ અચળ પદ છે). તેથી અચળ બહુપદીની ઘાત = <b style='color:#be123c; font-size:18px;'>0</b></p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>બહુપદીની ઘાત એટલે <b>"ક્લાસનો ડોન (Don)"</b>! આખી રકમમાં ચલના માથા પર જે આંકડો <b>સૌથી મોટો</b> દેખાય, એ જ આખી બહુપદીની ઘાત. અને જો ચલ હોય જ નહિ માત્ર આંકડો હોય, તો તેની ઘાત હંમેશા <b>ઝીરો (0)</b> લખી દેવી.</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.1 - પ્રશ્ન 5",
                "marks": 3,
                "question": "નીચે આપેલી બહુપદીઓને સુરેખ, દ્વિઘાત કે ત્રિઘાત બહુપદીમાં વર્ગીકૃત કરો:\n(i) x² + x  (ii) x - x³  (iii) y + y² + 4  (iv) 1 + x  (v) 3t  (vi) r²  (vii) 7x³", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='overflow-x:auto;'>
                        <table style='width:100%; min-width:400px; border-collapse:collapse; text-align:left; font-size:15px;'>
                            <thead>
                                <tr style='background-color:#1e3a8a; color:#ffffff;'>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>ક્રમ</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>બહુપદી</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>મહત્તમ ઘાત</th>
                                    <th style='padding:10px; border:1px solid #cbd5e1;'>બહુપદીનો પ્રકાર</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(i)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>x<sup>2</sup> + x</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold;'>દ્વિઘાત બહુપદી</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(ii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>x - x<sup>3</sup></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>ત્રિઘાત બહુપદી</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(iii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>y + y<sup>2</sup> + 4</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold;'>દ્વિઘાત બહુપદી</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(iv)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>1 + x</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#0284c7; font-weight:bold;'>સુરેખ બહુપદી</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(v)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>3t</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>1</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#0284c7; font-weight:bold;'>સુરેખ બહુપદી</td>
                                </tr>
                                <tr>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(vi)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>r<sup>2</sup></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>2</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#16a34a; font-weight:bold;'>દ્વિઘાત બહુપદી</td>
                                </tr>
                                <tr style='background-color:#f8fafc;'>
                                    <td style='padding:10px; border:1px solid #cbd5e1;'>(vii)</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; font-weight:bold;'>7x<sup>3</sup></td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; text-align:center;'>3</td>
                                    <td style='padding:10px; border:1px solid #cbd5e1; color:#be123c; font-weight:bold;'>ત્રિઘાત બહુપદી</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>બહુપદીના પ્રકાર ઓળખવા માટે માત્ર તેની <b>સૌથી મોટી ઘાત</b> જ જોવાની, પદોની સંખ્યા નહિ!<br>
                    &bull; જો <b>1 ઘાત</b> હોય (કે કોઈ ઘાત ન દેખાય) &rarr; સુરેખ<br>
                    &bull; જો <b>2 ઘાત</b> હોય &rarr; દ્વિઘાત<br>
                    &bull; જો <b>3 ઘાત</b> હોય &rarr; ત્રિઘાત</p>
                </div>`
            },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 1",
                "marks": 3,
                "question": "x ની નીચેની કિંમતો માટે 5x - 4x² + 3 બહુપદીનું મૂલ્ય શોધો:\n(i) x = 0\n(ii) x = -1\n(iii) x = 2", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>સમજૂતી: બહુપદી p(x) = 5x - 4x<sup>2</sup> + 3 માં જ્યાં પણ 'x' દેખાય, ત્યાં આપેલી કિંમત મૂકવાની છે.</p>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:15px;'>
                        <svg width="280" height="120" xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="40" width="40" height="40" rx="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
                            <text x="30" y="65" fill="#0284c7" font-size="16" font-weight="bold" text-anchor="middle">x</text>
                            
                            <line x1="50" y1="60" x2="80" y2="60" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
                            
                            <rect x="80" y="20" width="120" height="80" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
                            <text x="140" y="55" fill="#14532d" font-size="14" font-weight="bold" text-anchor="middle">p(x) મશીન</text>
                            <text x="140" y="80" fill="#166534" font-size="12" font-weight="bold" text-anchor="middle">5x - 4x&sup2; + 3</text>
                            
                            <line x1="200" y1="60" x2="230" y2="60" stroke="#64748b" stroke-width="3" marker-end="url(#arrow)"/>
                            
                            <rect x="230" y="40" width="40" height="40" rx="5" fill="#ffedd5" stroke="#ea580c" stroke-width="2"/>
                            <text x="250" y="65" fill="#ea580c" font-size="16" font-weight="bold" text-anchor="middle">જવાબ</text>
                            
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#64748b" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:12px;'>
                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0; font-size:15px;'>(i) x = 0 મૂકતાં:</h4>
                            <div style='background-color:#ffffff; padding:8px; border-radius:5px; border:1px solid #bae6fd; font-size:15px; line-height:1.6;'>
                                p(0) = 5(0) - 4(0)<sup>2</sup> + 3<br>
                                p(0) = 0 - 4(0) + 3<br>
                                <b>p(0) = <span style='color:#0284c7; font-size:18px;'>3</span></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0; font-size:15px;'>(ii) x = -1 મૂકતાં:</h4>
                            <div style='background-color:#ffffff; padding:8px; border-radius:5px; border:1px solid #fecdd3; font-size:15px; line-height:1.6;'>
                                p(-1) = 5(-1) - 4(-1)<sup>2</sup> + 3<br>
                                <span style='color:#64748b; font-size:13px;'>(નોંધ: માઇનસ સંખ્યાનો વર્ગ હંમેશા પ્લસ થાય, એટલે (-1)<sup>2</sup> = 1)</span><br>
                                p(-1) = -5 - 4(1) + 3<br>
                                p(-1) = -5 - 4 + 3<br>
                                p(-1) = -9 + 3<br>
                                <b>p(-1) = <span style='color:#be123c; font-size:18px;'>-6</span></b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                            <h4 style='color:#14532d; margin:0 0 8px 0; font-size:15px;'>(iii) x = 2 મૂકતાં:</h4>
                            <div style='background-color:#ffffff; padding:8px; border-radius:5px; border:1px solid #bbf7d0; font-size:15px; line-height:1.6;'>
                                p(2) = 5(2) - 4(2)<sup>2</sup> + 3<br>
                                p(2) = 10 - 4(4) + 3<br>
                                p(2) = 10 - 16 + 3<br>
                                p(2) = 13 - 16<br>
                                <b>p(2) = <span style='color:#16a34a; font-size:18px;'>-3</span></b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 2",
                "marks": 4,
                "question": "નીચે આપેલ દરેક બહુપદી માટે p(0), p(1) અને p(2) શોધો:\n(i) p(y) = y² - y + 1\n(ii) p(t) = 2 + t + 2t² - t³\n(iii) p(x) = x³\n(iv) p(x) = (x - 1)(x + 1)", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(i) p(y) = y<sup>2</sup> - y + 1</h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                <b>y = 0 મૂકતાં:</b><br>
                                p(0) = (0)<sup>2</sup> - 0 + 1<br>
                                <b>p(0) = 1</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                <b>y = 1 મૂકતાં:</b><br>
                                p(1) = (1)<sup>2</sup> - 1 + 1<br>
                                p(1) = 1 - 1 + 1<br>
                                <b>p(1) = 1</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                <b>y = 2 મૂકતાં:</b><br>
                                p(2) = (2)<sup>2</sup> - 2 + 1<br>
                                p(2) = 4 - 2 + 1<br>
                                <b>p(2) = 3</b>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(ii) p(t) = 2 + t + 2t<sup>2</sup> - t<sup>3</sup></h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                <b>t = 0 મૂકતાં:</b><br>
                                p(0) = 2 + 0 + 0 - 0<br>
                                <b>p(0) = 2</b>
                            </div>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                <b>t = 1 મૂકતાં:</b><br>
                                p(1) = 2 + 1 + 2(1)<sup>2</sup> - (1)<sup>3</sup><br>
                                p(1) = 3 + 2 - 1<br>
                                <b>p(1) = 4</b>
                            </div>
                            <div style='flex:1; min-width:150px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                <b>t = 2 મૂકતાં:</b><br>
                                p(2) = 2 + 2 + 2(2)<sup>2</sup> - (2)<sup>3</sup><br>
                                p(2) = 4 + 2(4) - 8<br>
                                p(2) = 4 + 8 - 8<br>
                                <b>p(2) = 4</b>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(iii) p(x) = x<sup>3</sup></h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                p(0) = (0)<sup>3</sup> = <b>0</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                p(1) = (1)<sup>3</sup> = <b>1</b>
                            </div>
                            <div style='flex:1; min-width:100px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                p(2) = (2)<sup>3</sup> = <b>8</b>
                            </div>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:12px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(iv) p(x) = (x - 1)(x + 1)</h4>
                        <div style='display:flex; flex-wrap:wrap; gap:10px; font-size:14px;'>
                            <div style='flex:1; min-width:120px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #0284c7;'>
                                <b>x = 0 મૂકતાં:</b><br>
                                p(0) = (0 - 1)(0 + 1)<br>
                                p(0) = (-1)(1) = <b>-1</b>
                            </div>
                            <div style='flex:1; min-width:120px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #16a34a;'>
                                <b>x = 1 મૂકતાં:</b><br>
                                p(1) = (1 - 1)(1 + 1)<br>
                                p(1) = (0)(2) = <b>0</b>
                            </div>
                            <div style='flex:1; min-width:120px; background-color:#f8fafc; padding:8px; border-radius:5px; border-top:3px solid #ea580c;'>
                                <b>x = 2 મૂકતાં:</b><br>
                                p(2) = (2 - 1)(2 + 1)<br>
                                p(2) = (1)(3) = <b>3</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 3",
                "marks": 4,
                "question": "નીચેની બહુપદીની સામે દર્શાવેલ x ની કિંમતો એ આપેલ બહુપદીનાં શૂન્યો છે કે નહિ તે ચકાસો:", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>નિયમ:</b> x ની કિંમત બહુપદીમાં મૂકતાં જો છેલ્લો જવાબ <b>શૂન્ય (0)</b> આવે, તો તે બહુપદીનું શૂન્ય <b>છે</b>. જો શૂન્ય સિવાય કોઈ પણ સંખ્યા આવે, તો તે શૂન્ય <b>નથી</b>.</p>
                    
                    <div style='overflow-x:auto;'>
                        <div style='display:flex; flex-direction:column; gap:10px; min-width:350px;'>
                            
                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(i) p(x) = 3x + 1; x = -1/3</b><br>
                                p(-1/3) = 3(-1/3) + 1 = -1 + 1 = 0<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#fff1f2; padding:10px; border-left:4px solid #be123c; border-radius:5px;'>
                                <b>(ii) p(x) = 5x - &pi;; x = 4/5</b><br>
                                p(4/5) = 5(4/5) - &pi; = 4 - &pi; (&ne; 0)<br>
                                <span style='color:#be123c; font-weight:bold;'>જવાબ: ના, શૂન્ય નથી.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(iii) p(x) = x<sup>2</sup> - 1; x = 1, -1</b><br>
                                x = 1 લેતાં: p(1) = (1)<sup>2</sup> - 1 = 1 - 1 = 0 (હા)<br>
                                x = -1 લેતાં: p(-1) = (-1)<sup>2</sup> - 1 = 1 - 1 = 0 (હા)<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, 1 અને -1 બંને શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(iv) p(x) = (x + 1)(x - 2); x = -1, 2</b><br>
                                x = -1 લેતાં: p(-1) = (-1 + 1)(-1 - 2) = (0)(-3) = 0 (હા)<br>
                                x = 2 લેતાં: p(2) = (2 + 1)(2 - 2) = (3)(0) = 0 (હા)<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, બંને શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(v) p(x) = x<sup>2</sup>; x = 0</b><br>
                                p(0) = (0)<sup>2</sup> = 0<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f0fdf4; padding:10px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <b>(vi) p(x) = lx + m; x = -m/l</b><br>
                                p(-m/l) = l(-m/l) + m = -m + m = 0<br>
                                <span style='color:#16a34a; font-weight:bold;'>જવાબ: હા, શૂન્ય છે.</span>
                            </div>

                            <div style='background-color:#f8fafc; padding:10px; border-left:4px solid #0284c7; border-radius:5px;'>
                                <b>(vii) p(x) = 3x<sup>2</sup> - 1; x = -1/&radic;3, 2/&radic;3</b><br>
                                x = -1/&radic;3 લેતાં: p(-1/&radic;3) = 3(-1/&radic;3)<sup>2</sup> - 1 = 3(1/3) - 1 = 1 - 1 = 0 <span style='color:#16a34a; font-weight:bold;'>(હા)</span><br>
                                x = 2/&radic;3 લેતાં: p(2/&radic;3) = 3(2/&radic;3)<sup>2</sup> - 1 = 3(4/3) - 1 = 4 - 1 = 3 <span style='color:#be123c; font-weight:bold;'>(ના)</span><br>
                                <span style='color:#0284c7; font-weight:bold;'>જવાબ: -1/&radic;3 શૂન્ય છે, પરંતુ 2/&radic;3 શૂન્ય નથી.</span>
                            </div>

                            <div style='background-color:#fff1f2; padding:10px; border-left:4px solid #be123c; border-radius:5px;'>
                                <b>(viii) p(x) = 2x + 1; x = 1/2</b><br>
                                p(1/2) = 2(1/2) + 1 = 1 + 1 = 2 (&ne; 0)<br>
                                <span style='color:#be123c; font-weight:bold;'>જવાબ: ના, શૂન્ય નથી.</span>
                            </div>
                            
                        </div>
                    </div>
                </div>`
            },
                  { 
                "questionNumber": "સ્વાધ્યાય 2.2 - પ્રશ્ન 4",
                "marks": 3,
                "question": "નીચે આપેલી દરેક બહુપદીનાં શૂન્યો શોધો:", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>બહુપદીનું શૂન્ય શોધવા માટે આપણે હંમેશા p(x) = 0 લઈશું.</p>
                    
                    <div style='display:flex; flex-wrap:wrap; gap:12px;'>
                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(i) p(x) = x + 5</h4>
                            <p style='margin:0; font-size:14px;'>x + 5 = 0<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = -5</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(ii) p(x) = x - 5</h4>
                            <p style='margin:0; font-size:14px;'>x - 5 = 0<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 5</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iii) p(x) = 2x + 5</h4>
                            <p style='margin:0; font-size:14px;'>2x + 5 = 0<br>
                            &there4; 2x = -5<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = -5/2</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iv) p(x) = 3x - 2</h4>
                            <p style='margin:0; font-size:14px;'>3x - 2 = 0<br>
                            &there4; 3x = 2<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 2/3</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(v) p(x) = 3x</h4>
                            <p style='margin:0; font-size:14px;'>3x = 0<br>
                            &there4; x = 0/3<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 0</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(vi) p(x) = ax (a &ne; 0)</h4>
                            <p style='margin:0; font-size:14px;'>ax = 0<br>
                            &there4; x = 0/a<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = 0</b></p>
                        </div>

                        <div style='flex:1; min-width:200px; background-color:#f8fafc; padding:10px; border-radius:5px; border:1px solid #e2e8f0;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(vii) p(x) = cx + d (c &ne; 0)</h4>
                            <p style='margin:0; font-size:14px;'>cx + d = 0<br>
                            &there4; cx = -d<br>
                            &there4; <b style='color:#16a34a; font-size:16px;'>x = -d/c</b></p>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>કોઈપણ <b>સુરેખ બહુપદી (ax + b)</b> નું શૂન્ય ગણતરી કર્યા વગર સીધું જ શોધવું હોય, તો બસ આ 2 સ્ટેપ ફોલો કરો:<br>
                    <b>સ્ટેપ 1:</b> અચળ પદ (b) ની નિશાની બદલી નાખો (પ્લસ હોય તો માઇનસ, માઇનસ હોય તો પ્લસ). આ તમારો <b>અંશ</b> બનશે.<br>
                    <b>સ્ટેપ 2:</b> x ની સાથે જે સંખ્યા ગુણાયેલી હોય (a), તેને છેદમાં મૂકી દો.<br>
                    <b>ઉદાહરણ:</b> 3x - 2 નું શૂન્ય &rarr; -2 નું નિશાન બદલતા +2 થાય, અને 3 છેદમાં જાય. સીધો જવાબ: <b>2/3</b> !</p>
                </div>`
                  },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 1",
                "marks": 3,
                "question": "નક્કી કરો કે નીચે આપેલી બહુપદીઓમાંથી કઈ બહુપદીનો અવયવ (x + 1) છે:\n(i) x³ + x² + x + 1\n(ii) x⁴ + x³ + x² + x + 1\n(iii) x⁴ + 3x³ + 3x² + x + 1\n(iv) x³ - x² - (2 + √2)x + √2", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>અવયવ પ્રમેય મુજબ:</b> જો (x + 1) એ આપેલ બહુપદી p(x) નો અવયવ હોય, તો <b>x = -1</b> મૂકવાથી p(-1) નો જવાબ <b>શૂન્ય (0)</b> આવવો જોઈએ.</p>
                    
                    <div style='overflow-x:auto;'>
                        <div style='display:flex; flex-direction:column; gap:12px; min-width:350px;'>
                            <div style='background-color:#f0fdf4; padding:12px; border-left:4px solid #16a34a; border-radius:5px;'>
                                <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) p(x) = x<sup>3</sup> + x<sup>2</sup> + x + 1</h4>
                                <div style='font-size:14px; color:#166534;'>
                                    p(-1) = (-1)<sup>3</sup> + (-1)<sup>2</sup> + (-1) + 1<br>
                                    p(-1) = -1 + 1 - 1 + 1<br>
                                    p(-1) = 0<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ છે.</b>
                                </div>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) p(x) = x<sup>4</sup> + x<sup>3</sup> + x<sup>2</sup> + x + 1</h4>
                                <div style='font-size:14px; color:#9f1239;'>
                                    p(-1) = (-1)<sup>4</sup> + (-1)<sup>3</sup> + (-1)<sup>2</sup> + (-1) + 1<br>
                                    p(-1) = 1 - 1 + 1 - 1 + 1<br>
                                    p(-1) = 1 (&ne; 0)<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ નથી.</b>
                                </div>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iii) p(x) = x<sup>4</sup> + 3x<sup>3</sup> + 3x<sup>2</sup> + x + 1</h4>
                                <div style='font-size:14px; color:#9f1239;'>
                                    p(-1) = (-1)<sup>4</sup> + 3(-1)<sup>3</sup> + 3(-1)<sup>2</sup> + (-1) + 1<br>
                                    p(-1) = 1 + 3(-1) + 3(1) - 1 + 1<br>
                                    p(-1) = 1 - 3 + 3 - 1 + 1<br>
                                    p(-1) = 1 (&ne; 0)<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ નથી.</b>
                                </div>
                            </div>

                            <div style='background-color:#fff1f2; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                                <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) p(x) = x<sup>3</sup> - x<sup>2</sup> - (2 + &radic;2)x + &radic;2</h4>
                                <div style='font-size:14px; color:#9f1239;'>
                                    p(-1) = (-1)<sup>3</sup> - (-1)<sup>2</sup> - (2 + &radic;2)(-1) + &radic;2<br>
                                    p(-1) = -1 - (1) + (2 + &radic;2) + &radic;2<br>
                                    p(-1) = -2 + 2 + &radic;2 + &radic;2<br>
                                    p(-1) = 2&radic;2 (&ne; 0)<br>
                                    <b style='font-size:15px;'>&there4; (x + 1) એ આ બહુપદીનો અવયવ નથી.</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>હેતુલક્ષી પ્રશ્નો માટે ગણતરી વગર સીધું ચેક કરો! <br>જો બહુપદીના <b>એકી ઘાતવાળા પદોના સહગુણકોનો સરવાળો</b> અને <b>બેકી ઘાતવાળા પદોના સહગુણકોનો સરવાળો</b> સરખો થાય, તો જ <b>(x + 1)</b> તેનો અવયવ હોય!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 2",
                "marks": 3,
                "question": "બહુપદી g(x) એ આપેલ બહુપદી p(x) નો એક અવયવ છે કે નહિ તે અવયવ પ્રમેય પરથી નક્કી કરો:\n(i) p(x) = 2x³ + x² - 2x - 1, g(x) = x + 1\n(ii) p(x) = x³ + 3x² + 3x + 1, g(x) = x + 2\n(iii) p(x) = x³ - 4x² + x + 6, g(x) = x - 3", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #1e3a8a;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(i) g(x) = x + 1 હોવાથી, x = -1 લઈશું.</h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                p(-1) = 2(-1)<sup>3</sup> + (-1)<sup>2</sup> - 2(-1) - 1<br>
                                = 2(-1) + 1 + 2 - 1<br>
                                = -2 + 1 + 2 - 1<br>
                                = 0<br>
                                <b style='color:#16a34a;'>અહીં શેષ 0 છે, તેથી g(x) એ p(x) નો અવયવ છે.</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #1e3a8a;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(ii) g(x) = x + 2 હોવાથી, x = -2 લઈશું.</h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                p(-2) = (-2)<sup>3</sup> + 3(-2)<sup>2</sup> + 3(-2) + 1<br>
                                = -8 + 3(4) - 6 + 1<br>
                                = -8 + 12 - 6 + 1<br>
                                = 13 - 14 = -1 (&ne; 0)<br>
                                <b style='color:#be123c;'>અહીં શેષ 0 નથી, તેથી g(x) એ p(x) નો અવયવ નથી.</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #1e3a8a;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(iii) g(x) = x - 3 હોવાથી, x = 3 લઈશું.</h4>
                            <div style='font-size:14px; color:#334155; line-height:1.6;'>
                                p(3) = (3)<sup>3</sup> - 4(3)<sup>2</sup> + (3) + 6<br>
                                = 27 - 4(9) + 3 + 6<br>
                                = 27 - 36 + 9<br>
                                = 36 - 36 = 0<br>
                                <b style='color:#16a34a;'>અહીં શેષ 0 છે, તેથી g(x) એ p(x) નો અવયવ છે.</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 3",
                "marks": 3,
                "question": "નીચેના દરેકમાં જો (x - 1) એ p(x) નો એક અવયવ હોય, તો k ની કિંમત શોધો:\n(i) p(x) = x² + x + k\n(ii) p(x) = 2x² + kx + √2\n(iii) p(x) = kx² - √2x + 1\n(iv) p(x) = kx² - 3x + k", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='background-color:#ffedd5; padding:10px; border-radius:5px; margin-bottom:15px; border-left:4px solid #ea580c;'>
                        <p style='margin:0; font-size:14px; color:#9a3412;'><b>નિયમ:</b> જો (x - 1) એ અવયવ હોય, તો અવયવ પ્રમેય મુજબ <b>p(1) = 0</b> થાય જ. આ સમીકરણનો ઉપયોગ કરી આપણે <b>k</b> શોધીશું.</p>
                    </div>

                    <div style='display:flex; flex-wrap:wrap; gap:15px;'>
                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(i) p(x) = x<sup>2</sup> + x + k</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; (1)<sup>2</sup> + (1) + k = 0<br>
                                &there4; 1 + 1 + k = 0<br>
                                &there4; 2 + k = 0<br>
                                &there4; <b style='color:#be123c; font-size:16px;'>k = -2</b>
                            </div>
                        </div>

                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(ii) p(x) = 2x<sup>2</sup> + kx + &radic;2</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; 2(1)<sup>2</sup> + k(1) + &radic;2 = 0<br>
                                &there4; 2 + k + &radic;2 = 0<br>
                                &there4; <b style='color:#be123c; font-size:16px;'>k = -(2 + &radic;2)</b>
                            </div>
                        </div>

                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(iii) p(x) = kx<sup>2</sup> - &radic;2x + 1</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; k(1)<sup>2</sup> - &radic;2(1) + 1 = 0<br>
                                &there4; k - &radic;2 + 1 = 0<br>
                                &there4; <b style='color:#be123c; font-size:16px;'>k = &radic;2 - 1</b>
                            </div>
                        </div>

                        <div style='flex:1; min-width:250px; background-color:#f0f9ff; padding:12px; border-radius:5px; border:1px solid #bae6fd;'>
                            <h4 style='color:#0369a1; margin:0 0 8px 0;'>(iv) p(x) = kx<sup>2</sup> - 3x + k</h4>
                            <div style='font-size:14px; color:#0c4a6e;'>
                                p(1) = 0<br>
                                &there4; k(1)<sup>2</sup> - 3(1) + k = 0<br>
                                &there4; k - 3 + k = 0<br>
                                &there4; 2k - 3 = 0<br>
                                &there4; 2k = 3 &nbsp; &there4; <b style='color:#be123c; font-size:16px;'>k = 3/2</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 4",
                "marks": 4,
                "question": "અવયવ પાડો:\n(i) 12x² - 7x + 1\n(ii) 2x² + 7x + 3\n(iii) 6x² + 5x - 6\n(iv) 3x² - x - 4", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f8fafc; padding:15px; border-radius:8px; border:1px dashed #cbd5e1; margin-bottom:20px;'>
                        <p style='margin:0 0 10px 0; color:#1e3a8a; font-weight:bold; font-size:15px;'>મધ્યમ પદનું વિભાજન (Splitting the Middle Term)</p>
                        <svg width="300" height="100" xmlns="http://www.w3.org/2000/svg">
                            <text x="20" y="40" fill="#16a34a" font-size="20" font-weight="bold">12x²</text>
                            <text x="80" y="40" fill="#0f172a" font-size="20">-</text>
                            <text x="110" y="40" fill="#be123c" font-size="20" font-weight="bold">7x</text>
                            <text x="160" y="40" fill="#0f172a" font-size="20">+</text>
                            <text x="190" y="40" fill="#16a34a" font-size="20" font-weight="bold">1</text>
                            
                            <path d="M 40 20 Q 115 -20 195 20" fill="none" stroke="#16a34a" stroke-width="2" marker-end="url(#arrowGreen)"/>
                            <text x="70" y="10" fill="#16a34a" font-size="12" font-weight="bold">ગુણાકાર (12 × 1 = 12)</text>
                            
                            <line x1="120" y1="50" x2="90" y2="80" stroke="#be123c" stroke-width="2"/>
                            <line x1="120" y1="50" x2="150" y2="80" stroke="#be123c" stroke-width="2"/>
                            <text x="65" y="95" fill="#be123c" font-size="14" font-weight="bold">- 4x</text>
                            <text x="145" y="95" fill="#be123c" font-size="14" font-weight="bold">- 3x</text>
                            
                            <defs>
                                <marker id="arrowGreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#16a34a" />
                                </marker>
                            </defs>
                        </svg>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(i) 12x<sup>2</sup> - 7x + 1</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર 12 અને સરવાળો -7 લાવવાનો છે. (અવયવો: -4 અને -3)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 12x<sup>2</sup> - 4x - 3x + 1<br>
                                = 4x(3x - 1) - 1(3x - 1)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(3x - 1)(4x - 1)</b>
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(ii) 2x<sup>2</sup> + 7x + 3</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર 6 (2&times;3) અને સરવાળો 7 લાવવાનો છે. (અવયવો: 6 અને 1)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 2x<sup>2</sup> + 6x + 1x + 3<br>
                                = 2x(x + 3) + 1(x + 3)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(x + 3)(2x + 1)</b>
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(iii) 6x<sup>2</sup> + 5x - 6</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર -36 (6&times;-6) અને બાદબાકી 5 લાવવાની છે. (અવયવો: 9 અને -4)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 6x<sup>2</sup> + 9x - 4x - 6<br>
                                = 3x(2x + 3) - 2(2x + 3)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(2x + 3)(3x - 2)</b>
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 5px 0;'>(iv) 3x<sup>2</sup> - x - 4</h4>
                            <p style='margin:0 0 5px 0; font-size:13px; color:#52525b;'>ગુણાકાર -12 (3&times;-4) અને બાદબાકી -1 લાવવાની છે. (અવયવો: -4 અને 3)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #e4e4e7;'>
                                = 3x<sup>2</sup> - 4x + 3x - 4<br>
                                = x(3x - 4) + 1(3x - 4)<br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(3x - 4)(x + 1)</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
               { 
                "questionNumber": "સ્વાધ્યાય 2.3 - પ્રશ્ન 5",
                "marks": 4,
                "question": "અવયવ પાડો (ત્રિઘાત બહુપદી):\n(i) x³ - 2x² - x + 2\n(ii) x³ - 3x² - 9x - 5\n(iii) x³ + 13x² + 32x + 20\n(iv) 2y³ + y² - 2y - 1", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:20px;'>
                        
                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(i) x<sup>3</sup> - 2x<sup>2</sup> - x + 2</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>અહીં પહેલા બે અને છેલ્લા બે પદોની સીધી જોડ બનાવી સામાન્ય કાઢીશું:</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = x<sup>2</sup>(x - 2) - 1(x - 2)<br>
                                = (x - 2)(x<sup>2</sup> - 1)<br>
                                <span style='color:#64748b; font-size:12px;'>[(a<sup>2</sup>-b<sup>2</sup>) નું નિત્યસમ વાપરતા]</span><br>
                                = <b style='color:#0369a1; font-size:16px;'>(x - 2)(x - 1)(x + 1)</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(ii) x<sup>3</sup> - 3x<sup>2</sup> - 9x - 5</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>અહીં p(-1) = 0 થાય છે, તેથી (x + 1) એક અવયવ છે. બહુપદીને (x + 1) વડે ભાગતા અથવા પદોની ગોઠવણી કરતા:</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = x<sup>3</sup> + x<sup>2</sup> - 4x<sup>2</sup> - 4x - 5x - 5<br>
                                = x<sup>2</sup>(x + 1) - 4x(x + 1) - 5(x + 1)<br>
                                = (x + 1)(x<sup>2</sup> - 4x - 5)<br>
                                <span style='color:#64748b; font-size:12px;'>[હવે કૌંસના મધ્યમ પદનું વિભાજન કરતા]</span><br>
                                = (x + 1)(x<sup>2</sup> - 5x + 1x - 5)<br>
                                = (x + 1)[x(x - 5) + 1(x - 5)]<br>
                                = <b style='color:#0369a1; font-size:16px;'>(x + 1)(x + 1)(x - 5)</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(iii) x<sup>3</sup> + 13x<sup>2</sup> + 32x + 20</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>અહીં બધા પદો ધન છે, p(-1) = 0 થાય છે. તેથી (x + 1) એક અવયવ છે.</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = x<sup>3</sup> + x<sup>2</sup> + 12x<sup>2</sup> + 12x + 20x + 20<br>
                                = x<sup>2</sup>(x + 1) + 12x(x + 1) + 20(x + 1)<br>
                                = (x + 1)(x<sup>2</sup> + 12x + 20)<br>
                                <span style='color:#64748b; font-size:12px;'>[20 ના અવયવો 10 અને 2]</span><br>
                                = (x + 1)(x<sup>2</sup> + 10x + 2x + 20)<br>
                                = (x + 1)[x(x + 10) + 2(x + 10)]<br>
                                = <b style='color:#0369a1; font-size:16px;'>(x + 1)(x + 2)(x + 10)</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(iv) 2y<sup>3</sup> + y<sup>2</sup> - 2y - 1</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#334155;'>આ દાખલામાં દાખલા (i) ની જેમ પદોની જોડ બનાવી સીધું જ સામાન્ય કાઢી શકાશે:</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:15px;'>
                                = y<sup>2</sup>(2y + 1) - 1(2y + 1)<br>
                                = (2y + 1)(y<sup>2</sup> - 1)<br>
                                <span style='color:#64748b; font-size:12px;'>[(y<sup>2</sup> - 1) = (y-1)(y+1)]</span><br>
                                = <b style='color:#0369a1; font-size:16px;'>(2y + 1)(y - 1)(y + 1)</b>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક (ત્રિઘાત માટે):</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ત્રિઘાત બહુપદીમાં પહેલો અવયવ શોધવો એ જ સૌથી મોટું કામ છે! એના માટે 2 નિયમો મગજમાં ફિટ કરી દો:<br>
                    <b>નિયમ 1:</b> જો બહુપદીના બધા જ સહગુણકોનો સરવાળો <b>0 (શૂન્ય)</b> થાય, તો તેનો પહેલો અવયવ હંમેશા <b>(x - 1)</b> હોય.<br>
                    <b>નિયમ 2:</b> જો એકી પદોના સહગુણકોનો સરવાળો અને બેકી પદોના સહગુણકોનો સરવાળો સરખો થાય, તો પહેલો અવયવ હંમેશા <b>(x + 1)</b> હોય.<br>
                    પછી તો બસ તેને 3 વાર લખીને પદો સેટ જ કરવાના રહે છે!</p>
                </div>`
               },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 1",
                "marks": 3,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને નીચેના ગુણાકાર મેળવો:\n(i) (x + 4)(x + 10)\n(ii) (x + 8)(x - 10)\n(iii) (3x + 4)(3x - 5)\n(iv) (y² + 3/2)(y² - 3/2)\n(v) (3 - 2x)(3 + 2x)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='text-align:center; overflow-x:auto; background-color:#f0fdf4; padding:10px; border-radius:8px; border:2px dashed #16a34a; margin-bottom:15px;'>
                        <p style='margin:0 0 5px 0; color:#14532d; font-weight:bold; font-size:15px;'>ઉપયોગમાં લેવાતા નિત્યસમો (સૂત્રો):</p>
                        <div style='font-size:16px; color:#166534; font-weight:bold; font-family:monospace;'>
                            1) (x + a)(x + b) = x<sup>2</sup> + (a + b)x + ab<br>
                            2) (x + y)(x - y) = x<sup>2</sup> - y<sup>2</sup>
                        </div>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(i) (x + 4)(x + 10)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                અહી a = 4 અને b = 10 છે.<br>
                                = (x)<sup>2</sup> + (4 + 10)x + (4)(10)<br>
                                = <b style='color:#0284c7; font-size:16px;'>x<sup>2</sup> + 14x + 40</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(ii) (x + 8)(x - 10)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                અહી a = 8 અને b = -10 છે.<br>
                                = (x)<sup>2</sup> + (8 - 10)x + (8)(-10)<br>
                                = x<sup>2</sup> + (-2)x - 80<br>
                                = <b style='color:#0284c7; font-size:16px;'>x<sup>2</sup> - 2x - 80</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #0284c7; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iii) (3x + 4)(3x - 5)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                અહી પ્રથમ પદ 3x છે, a = 4 અને b = -5 છે.<br>
                                = (3x)<sup>2</sup> + (4 - 5)(3x) + (4)(-5)<br>
                                = 9x<sup>2</sup> + (-1)(3x) - 20<br>
                                = <b style='color:#0284c7; font-size:16px;'>9x<sup>2</sup> - 3x - 20</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iv) (y<sup>2</sup> + 3/2)(y<sup>2</sup> - 3/2)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                <span style='color:#be123c; font-size:13px;'>[નિત્યસમ 2: (a+b)(a-b) = a<sup>2</sup> - b<sup>2</sup> મુજબ]</span><br>
                                = (y<sup>2</sup>)<sup>2</sup> - (3/2)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:16px;'>y<sup>4</sup> - 9/4</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(v) (3 - 2x)(3 + 2x)</h4>
                            <div style='font-size:15px; color:#334155; line-height:1.6;'>
                                <span style='color:#be123c; font-size:13px;'>[નિત્યસમ 2 મુજબ]</span><br>
                                = (3)<sup>2</sup> - (2x)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:16px;'>9 - 4x<sup>2</sup></b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 2",
                "marks": 3,
                "question": "સીધો ગુણાકાર કર્યા સિવાય નિત્યસમોનો ઉપયોગ કરીને નીચેના ગુણાકારની કિંમતો મેળવો:\n(i) 103 × 107\n(ii) 95 × 96\n(iii) 104 × 96", 
                "answer": `
                <div style='display:flex; flex-direction:column; gap:15px;'>
                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(i) 103 &times; 107</h4>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px;'>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#475569;'>બંને સંખ્યાઓ 100 ની નજીક છે.</p>
                            = (100 + 3)(100 + 7)<br>
                            <span style='color:#64748b; font-size:13px;'>[(x+a)(x+b) = x<sup>2</sup> + (a+b)x + ab મુજબ]</span><br>
                            = (100)<sup>2</sup> + (3 + 7)(100) + (3)(7)<br>
                            = 10000 + (10)(100) + 21<br>
                            = 10000 + 1000 + 21<br>
                            = <b style='color:#047857; font-size:18px;'>11021</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(ii) 95 &times; 96</h4>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px;'>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#475569;'>બંને સંખ્યાઓ 100 માંથી અમુક બાદ કરવાથી મળે છે.</p>
                            = (100 - 5)(100 - 4)<br>
                            = (100)<sup>2</sup> + (-5 - 4)(100) + (-5)(-4)<br>
                            = 10000 + (-9)(100) + 20<br>
                            = 10000 - 900 + 20<br>
                            = 9100 + 20<br>
                            = <b style='color:#047857; font-size:18px;'>9120</b>
                        </div>
                    </div>

                    <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                        <h4 style='color:#1e3a8a; margin:0 0 10px 0;'>(iii) 104 &times; 96</h4>
                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px;'>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#881337;'>એક 100 કરતા વધુ છે અને એક 100 કરતા ઓછી છે.</p>
                            = (100 + 4)(100 - 4)<br>
                            <span style='color:#be123c; font-size:13px;'>[(a+b)(a-b) = a<sup>2</sup> - b<sup>2</sup> મુજબ]</span><br>
                            = (100)<sup>2</sup> - (4)<sup>2</sup><br>
                            = 10000 - 16<br>
                            = <b style='color:#be123c; font-size:18px;'>9984</b>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં હંમેશા <b>100</b> નો જ આધાર લેવો (જેમ કે 100+3 અથવા 100-5). કારણ કે 100 નો વર્ગ 10000 સીધો જ લખી શકાય છે અને ગણતરીમાં ભૂલ પડવાની શક્યતા સાવ નહિવત્ થઈ જાય છે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 3",
                "marks": 3,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને અવયવ પાડો:\n(i) 9x² + 6xy + y²\n(ii) 4y² - 4y + 1\n(iii) x² - y²/100", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px;'>
                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 8px 0;'>(i) 9x<sup>2</sup> + 6xy + y<sup>2</sup></h4>
                            <div style='font-size:15px; color:#3f3f46;'>
                                <p style='margin:0 0 5px 0; font-size:13px; color:#71717a;'>આ પૂર્ણવર્ગ ત્રિપદી છે. [a<sup>2</sup> + 2ab + b<sup>2</sup> = (a+b)<sup>2</sup>]</p>
                                = (3x)<sup>2</sup> + 2(3x)(y) + (y)<sup>2</sup><br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(3x + y)<sup>2</sup></b><br>
                                = (3x + y)(3x + y)
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #52525b; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 8px 0;'>(ii) 4y<sup>2</sup> - 4y + 1</h4>
                            <div style='font-size:15px; color:#3f3f46;'>
                                <p style='margin:0 0 5px 0; font-size:13px; color:#71717a;'>વચ્ચે માઇનસ છે. [a<sup>2</sup> - 2ab + b<sup>2</sup> = (a-b)<sup>2</sup>]</p>
                                = (2y)<sup>2</sup> - 2(2y)(1) + (1)<sup>2</sup><br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(2y - 1)<sup>2</sup></b><br>
                                = (2y - 1)(2y - 1)
                            </div>
                        </div>

                        <div style='background-color:#f4f4f5; padding:12px; border-left:4px solid #be123c; border-radius:5px;'>
                            <h4 style='color:#27272a; margin:0 0 8px 0;'>(iii) x<sup>2</sup> - y<sup>2</sup> / 100</h4>
                            <div style='font-size:15px; color:#3f3f46;'>
                                <p style='margin:0 0 5px 0; font-size:13px; color:#be123c;'>બે પૂર્ણવર્ગનો તફાવત. [a<sup>2</sup> - b<sup>2</sup> = (a-b)(a+b)]</p>
                                = (x)<sup>2</sup> - (y/10)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:16px;'>(x - y/10)(x + y/10)</b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>ત્રિપદીના અવયવમાં ફક્ત <b>પહેલા અને છેલ્લા પદનું વર્ગમૂળ</b> કાઢો, અને <b>વચ્ચેના પદની નિશાની</b> મૂકીને આખા કૌંસ પર વર્ગ લગાવી દો!<br>
                    જેમ કે: 9x<sup>2</sup> નું વર્ગમૂળ 3x, 1 નું વર્ગમૂળ 1, અને વચ્ચે - ની નિશાની. સીધો જવાબ (3x - 1)<sup>2</sup>!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 4",
                "marks": 4,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને વિસ્તરણ કરો:\n(i) (x + 2y + 4z)²\n(ii) (2x - y + z)²\n(iii) (-2x + 3y + 2z)²\n(iv) (3a - 7b - c)²\n(v) (-2x + 5y - 3z)²\n(vi) [(1/4)a - (1/2)b + 1]²", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='background-color:#f0fdf4; padding:10px; border-radius:5px; border:1px solid #bbf7d0; margin-bottom:15px; text-align:center;'>
                        <p style='margin:0; font-size:16px; color:#14532d; font-weight:bold;'>મૂળભૂત સૂત્ર: (a + b + c)<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + 2ab + 2bc + 2ca</p>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:12px; font-size:14px; overflow-x:auto;'>
                        
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(i) (x + 2y + 4z)<sup>2</sup></h4>
                            = (x)<sup>2</sup> + (2y)<sup>2</sup> + (4z)<sup>2</sup> + 2(x)(2y) + 2(2y)(4z) + 2(4z)(x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>x<sup>2</sup> + 4y<sup>2</sup> + 16z<sup>2</sup> + 4xy + 16yz + 8zx</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(ii) (2x - y + z)<sup>2</sup></h4>
                            = (2x)<sup>2</sup> + (-y)<sup>2</sup> + (z)<sup>2</sup> + 2(2x)(-y) + 2(-y)(z) + 2(z)(2x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>4x<sup>2</sup> + y<sup>2</sup> + z<sup>2</sup> - 4xy - 2yz + 4zx</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iii) (-2x + 3y + 2z)<sup>2</sup></h4>
                            = (-2x)<sup>2</sup> + (3y)<sup>2</sup> + (2z)<sup>2</sup> + 2(-2x)(3y) + 2(3y)(2z) + 2(2z)(-2x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>4x<sup>2</sup> + 9y<sup>2</sup> + 4z<sup>2</sup> - 12xy + 12yz - 8zx</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(iv) (3a - 7b - c)<sup>2</sup></h4>
                            = (3a)<sup>2</sup> + (-7b)<sup>2</sup> + (-c)<sup>2</sup> + 2(3a)(-7b) + 2(-7b)(-c) + 2(-c)(3a)<br>
                            = <b style='color:#0284c7; font-size:15px;'>9a<sup>2</sup> + 49b<sup>2</sup> + c<sup>2</sup> - 42ab + 14bc - 6ca</b>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border:1px solid #e2e8f0; min-width:350px;'>
                            <h4 style='color:#0f172a; margin:0 0 5px 0;'>(v) (-2x + 5y - 3z)<sup>2</sup></h4>
                            = (-2x)<sup>2</sup> + (5y)<sup>2</sup> + (-3z)<sup>2</sup> + 2(-2x)(5y) + 2(5y)(-3z) + 2(-3z)(-2x)<br>
                            = <b style='color:#0284c7; font-size:15px;'>4x<sup>2</sup> + 25y<sup>2</sup> + 9z<sup>2</sup> - 20xy - 30yz + 12zx</b>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(vi) [(1/4)a - (1/2)b + 1]<sup>2</sup></h4>
                            = (a/4)<sup>2</sup> + (-b/2)<sup>2</sup> + (1)<sup>2</sup> + 2(a/4)(-b/2) + 2(-b/2)(1) + 2(1)(a/4)<br>
                            = a<sup>2</sup>/16 + b<sup>2</sup>/4 + 1 - 2ab/8 - 2b/2 + 2a/4<br>
                            <span style='color:#be123c; font-size:13px;'>[છેદ ઉડાડતાં]</span><br>
                            = <b style='color:#be123c; font-size:15px;'>a<sup>2</sup>/16 + b<sup>2</sup>/4 + 1 - ab/4 - b + a/2</b>
                        </div>
                    </div>
                </div>`
            },
           { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 5",
                "marks": 4,
                "question": "અવયવ પાડો:\n(i) 4x² + 9y² + 16z² + 12xy - 24yz - 16xz\n(ii) 2x² + y² + 8z² - 2√2xy + 4√2yz - 8xz", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>સમજૂતી: આ દાખલાઓ ઉપરના પ્રશ્ન 4 થી બિલકુલ ઊંધા છે. વિસ્તરણ આપેલું છે, આપણે કૌંસનો વર્ગ શોધવાનો છે.</p>

                    <div style='display:flex; flex-direction:column; gap:20px; overflow-x:auto;'>
                        <div style='background-color:#f0f9ff; padding:15px; border-left:4px solid #0284c7; border-radius:5px; min-width:350px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 10px 0;'>(i) 4x<sup>2</sup> + 9y<sup>2</sup> + 16z<sup>2</sup> + 12xy - 24yz - 16xz</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#0369a1;'>અહીં yz અને xz વાળા પદો માઇનસ (-) છે. બંનેમાં <b>z</b> સામાન્ય છે, તેથી <b>z વાળું પદ માઇનસ</b> હશે.</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #bae6fd; font-family:monospace; font-size:14px;'>
                                = (2x)<sup>2</sup> + (3y)<sup>2</sup> + (-4z)<sup>2</sup> + 2(2x)(3y) + 2(3y)(-4z) + 2(-4z)(2x)<br>
                                <span style='color:#64748b; font-size:12px;'>[નિત્યસમ a<sup>2</sup> + b<sup>2</sup> + c<sup>2</sup> + 2ab + 2bc + 2ca = (a+b+c)<sup>2</sup>]</span><br>
                                = <b style='color:#1e3a8a; font-size:16px;'>(2x + 3y - 4z)<sup>2</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:15px; border-left:4px solid #be123c; border-radius:5px; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 10px 0;'>(ii) 2x<sup>2</sup> + y<sup>2</sup> + 8z<sup>2</sup> - 2&radic;2xy + 4&radic;2yz - 8xz</h4>
                            <p style='margin:0 0 5px 0; font-size:14px; color:#be123c;'>અહીં xy અને xz વાળા પદો માઇનસ (-) છે. બંનેમાં <b>x</b> સામાન્ય છે, તેથી <b>x વાળું પદ માઇનસ</b> હશે.<br>
                            (નોંધ: 2 નું વર્ગમૂળ &radic;2 અને 8 નું વર્ગમૂળ 2&radic;2 થાય.)</p>
                            <div style='background-color:#ffffff; padding:10px; border-radius:5px; border:1px solid #fecdd3; font-family:monospace; font-size:14px;'>
                                = (-&radic;2x)<sup>2</sup> + (y)<sup>2</sup> + (2&radic;2z)<sup>2</sup> + 2(-&radic;2x)(y) + 2(y)(2&radic;2z) + 2(2&radic;2z)(-&radic;2x)<br>
                                = <b style='color:#9f1239; font-size:16px;'>(-&radic;2x + y + 2&radic;2z)<sup>2</sup></b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>માઇનસ (-) ની નિશાની કોને આપવી તેમાં કન્ફ્યુઝન થાય છે ને? <br>
                    બસ રકમમાં જે <b>બે પદ માઇનસ વાળા</b> દેખાય તેમાં <b>કયો અક્ષર (ચલ) સમાન (Common)</b> છે તે પકડી લો. એ સમાન અક્ષર વાળા પદને જ માઇનસની નિશાની આપી દેવાની, બાકી બધા પ્લસ!</p>
                </div>`
               },
                        
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 6",
                "marks": 3,
                "question": "નીચેના ઘનનું વિસ્તરણ કરો:\n(i) (2x + 1)³\n(ii) (2a - 3b)³\n(iii) [(3/2)x + 1]³\n(iv) [x - (2/3)y]³", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    
                    <div style='background-color:#f8fafc; padding:10px; border-radius:5px; border:2px dashed #0284c7; margin-bottom:15px; text-align:center;'>
                        <p style='margin:0 0 5px 0; color:#0c4a6e; font-weight:bold; font-size:15px;'>ઘનના વિસ્તરણના સૂત્રો:</p>
                        <div style='font-size:15px; color:#0369a1; font-weight:bold;'>
                            (x + y)<sup>3</sup> = x<sup>3</sup> + y<sup>3</sup> + 3xy(x + y)<br>
                            (x - y)<sup>3</sup> = x<sup>3</sup> - y<sup>3</sup> - 3xy(x - y)
                        </div>
                    </div>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a; min-width:350px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) (2x + 1)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534;'>
                                = (2x)<sup>3</sup> + (1)<sup>3</sup> + 3(2x)(1)(2x + 1)<br>
                                = 8x<sup>3</sup> + 1 + 6x(2x + 1)<br>
                                = 8x<sup>3</sup> + 1 + 12x<sup>2</sup> + 6x<br>
                                <span style='color:#64748b; font-size:12px;'>[ઘાતના ઉતરતા ક્રમમાં ગોઠવતા]</span><br>
                                = <b style='color:#15803d; font-size:15px;'>8x<sup>3</sup> + 12x<sup>2</sup> + 6x + 1</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) (2a - 3b)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (2a)<sup>3</sup> - (3b)<sup>3</sup> - 3(2a)(3b)(2a - 3b)<br>
                                = 8a<sup>3</sup> - 27b<sup>3</sup> - 18ab(2a - 3b)<br>
                                = 8a<sup>3</sup> - 27b<sup>3</sup> - 36a<sup>2</sup>b + 54ab<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>8a<sup>3</sup> - 36a<sup>2</sup>b + 54ab<sup>2</sup> - 27b<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a; min-width:350px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(iii) [(3/2)x + 1]<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534;'>
                                = (3x/2)<sup>3</sup> + (1)<sup>3</sup> + 3(3x/2)(1)[(3x/2) + 1]<br>
                                = 27x<sup>3</sup>/8 + 1 + (9x/2)[(3x/2) + 1]<br>
                                = 27x<sup>3</sup>/8 + 1 + 27x<sup>2</sup>/4 + 9x/2<br>
                                = <b style='color:#15803d; font-size:15px;'>27x<sup>3</sup>/8 + 27x<sup>2</sup>/4 + 9x/2 + 1</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) [x - (2/3)y]<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (x)<sup>3</sup> - (2y/3)<sup>3</sup> - 3(x)(2y/3)[x - 2y/3]<br>
                                <span style='color:#64748b; font-size:12px;'>[અહીં 3 અને છેદનો 3 ઉડી જશે]</span><br>
                                = x<sup>3</sup> - 8y<sup>3</sup>/27 - 2xy[x - 2y/3]<br>
                                = x<sup>3</sup> - 8y<sup>3</sup>/27 - 2x<sup>2</sup>y + 4xy<sup>2</sup>/3<br>
                                = <b style='color:#be123c; font-size:15px;'>x<sup>3</sup> - 2x<sup>2</sup>y + 4xy<sup>2</sup>/3 - 8y<sup>3</sup>/27</b>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 7",
                "marks": 3,
                "question": "યોગ્ય નિત્યસમનો ઉપયોગ કરીને કિંમત મેળવો:\n(i) (99)³\n(ii) (102)³\n(iii) (998)³", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #334155; min-width:300px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(i) (99)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#334155;'>
                                = (100 - 1)<sup>3</sup><br>
                                = (100)<sup>3</sup> - (1)<sup>3</sup> - 3(100)(1)(100 - 1)<br>
                                = 1000000 - 1 - 300(99)<br>
                                = 1000000 - 1 - 29700<br>
                                = 1000000 - 29701<br>
                                = <b style='color:#0f172a; font-size:16px;'>970299</b>
                            </div>
                        </div>

                        <div style='background-color:#f0f9ff; padding:12px; border-radius:5px; border-left:4px solid #0284c7; min-width:300px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(ii) (102)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#0369a1;'>
                                = (100 + 2)<sup>3</sup><br>
                                = (100)<sup>3</sup> + (2)<sup>3</sup> + 3(100)(2)(100 + 2)<br>
                                = 1000000 + 8 + 600(102)<br>
                                = 1000000 + 8 + 61200<br>
                                = <b style='color:#0284c7; font-size:16px;'>1061208</b>
                            </div>
                        </div>

                        <div style='background-color:#f8fafc; padding:12px; border-radius:5px; border-left:4px solid #334155; min-width:300px;'>
                            <h4 style='color:#0f172a; margin:0 0 8px 0;'>(iii) (998)<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#334155;'>
                                = (1000 - 2)<sup>3</sup><br>
                                = (1000)<sup>3</sup> - (2)<sup>3</sup> - 3(1000)(2)(1000 - 2)<br>
                                = 1000000000 - 8 - 6000(998)<br>
                                = 1000000000 - 8 - 5988000<br>
                                = 1000000000 - 5988008<br>
                                = <b style='color:#0f172a; font-size:16px;'>994011992</b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>મીંડા (0) નો ઘન કરવામાં ક્યારેય ભૂલ ન કરો! <b>જેટલા મીંડા હોય, તેના 3 ગણા મીંડા કરી નાખવા.</b> <br>
                    દા.ત. 100 નો ઘન &rarr; બે મીંડાના 6 મીંડા (1000000). <br>
                    1000 નો ઘન &rarr; ત્રણ મીંડાના 9 મીંડા (1000000000). આ ટ્રીકથી શૂન્ય ગણવામાં ભૂલ નહિ પડે!</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 8",
                "marks": 4,
                "question": "નીચેના પૈકી દરેકના અવયવ પાડો:\n(i) 8a³ + b³ + 12a²b + 6ab²\n(ii) 8a³ - b³ - 12a²b + 6ab²\n(iii) 27 - 125a³ - 135a + 225a²\n(iv) 64a³ - 27b³ - 144a²b + 108ab²\n(v) 27p³ - 1/216 - 9/2p² + 1/4p", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155;'><b>સમજૂતી:</b> આ દાખલા પ્રશ્ન 6 ની બિલકુલ ઊલટી પ્રક્રિયા છે. અહીં આપણે (a + b)<sup>3</sup> અથવા (a - b)<sup>3</sup> નિત્યસમ મુજબ પદોને ગોઠવવાના છે.</p>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border:1px solid #bbf7d0; min-width:380px;'>
                            <h4 style='color:#14532d; margin:0 0 5px 0;'>(i) 8a<sup>3</sup> + b<sup>3</sup> + 12a<sup>2</sup>b + 6ab<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534;'>
                                = (2a)<sup>3</sup> + (b)<sup>3</sup> + 3(2a)<sup>2</sup>(b) + 3(2a)(b)<sup>2</sup><br>
                                = <b style='color:#15803d; font-size:15px;'>(2a + b)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(ii) 8a<sup>3</sup> - b<sup>3</sup> - 12a<sup>2</sup>b + 6ab<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (2a)<sup>3</sup> - (b)<sup>3</sup> - 3(2a)<sup>2</sup>(b) + 3(2a)(b)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(2a - b)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(iii) 27 - 125a<sup>3</sup> - 135a + 225a<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (3)<sup>3</sup> - (5a)<sup>3</sup> - 3(3)<sup>2</sup>(5a) + 3(3)(5a)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(3 - 5a)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(iv) 64a<sup>3</sup> - 27b<sup>3</sup> - 144a<sup>2</sup>b + 108ab<sup>2</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (4a)<sup>3</sup> - (3b)<sup>3</sup> - 3(4a)<sup>2</sup>(3b) + 3(4a)(3b)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(4a - 3b)<sup>3</sup></b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border:1px solid #fecdd3; min-width:380px;'>
                            <h4 style='color:#881337; margin:0 0 5px 0;'>(v) 27p<sup>3</sup> - 1/216 - 9/2p<sup>2</sup> + 1/4p</h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239;'>
                                = (3p)<sup>3</sup> - (1/6)<sup>3</sup> - 3(3p)<sup>2</sup>(1/6) + 3(3p)(1/6)<sup>2</sup><br>
                                = <b style='color:#be123c; font-size:15px;'>(3p - 1/6)<sup>3</sup></b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા મોટા દાખલા જોઈને ડરવાનું બિલકુલ નહિ! <b>ફક્ત પહેલા બે પદ પકડી લો.</b> <br>
                    પહેલા પદનું ઘનમૂળ કાઢો અને બીજા પદનું ઘનમૂળ કાઢો. જો રકમમાં માઇનસ હોય તો વચ્ચે માઇનસ મૂકી આખા કૌંસનો ઘન (Cube) કરી દો! જવાબ તમારા હાથમાં!<br>
                    દા.ત. (v) માં: 27p<sup>3</sup> નું ઘનમૂળ <b>3p</b> અને 1/216 નું ઘનમૂળ <b>1/6</b>. વચ્ચે માઇનસ. સીધો જવાબ (3p - 1/6)<sup>3</sup> !</p>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 9",
                "marks": 3,
                "question": "ચકાસો:\n(i) x³ + y³ = (x + y)(x² - xy + y²)\n(ii) x³ - y³ = (x - y)(x² + xy + y²)", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>ચકાસણી માટે આપણે જમણી બાજુ (RHS) નો ગુણાકાર કરી ડાબી બાજુ (LHS) લાવીશું.</p>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0f9ff; padding:12px; border-radius:5px; border-left:4px solid #0284c7; min-width:350px;'>
                            <h4 style='color:#0c4a6e; margin:0 0 8px 0;'>(i) x<sup>3</sup> + y<sup>3</sup> = (x + y)(x<sup>2</sup> - xy + y<sup>2</sup>)</h4>
                            <div style='font-family:monospace; font-size:14px; color:#0369a1; line-height:1.6;'>
                                જ.બા. = (x + y)(x<sup>2</sup> - xy + y<sup>2</sup>)<br>
                                <span style='color:#64748b; font-size:12px;'>[કૌંસ છૂટા પાડતા]</span><br>
                                = x(x<sup>2</sup> - xy + y<sup>2</sup>) + y(x<sup>2</sup> - xy + y<sup>2</sup>)<br>
                                = x<sup>3</sup> - x<sup>2</sup>y + xy<sup>2</sup> + x<sup>2</sup>y - xy<sup>2</sup> + y<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[-x<sup>2</sup>y અને +x<sup>2</sup>y તેમજ +xy<sup>2</sup> અને -xy<sup>2</sup> ઉડી જશે]</span><br>
                                = <b style='color:#0284c7;'>x<sup>3</sup> + y<sup>3</sup></b> = ડા.બા.
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) x<sup>3</sup> - y<sup>3</sup> = (x - y)(x<sup>2</sup> + xy + y<sup>2</sup>)</h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239; line-height:1.6;'>
                                જ.બા. = (x - y)(x<sup>2</sup> + xy + y<sup>2</sup>)<br>
                                <span style='color:#64748b; font-size:12px;'>[કૌંસ છૂટા પાડતા]</span><br>
                                = x(x<sup>2</sup> + xy + y<sup>2</sup>) - y(x<sup>2</sup> + xy + y<sup>2</sup>)<br>
                                = x<sup>3</sup> + x<sup>2</sup>y + xy<sup>2</sup> - x<sup>2</sup>y - xy<sup>2</sup> - y<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[સરખા અને વિરુદ્ધ નિશાન વાળા પદો ઉડી જશે]</span><br>
                                = <b style='color:#be123c;'>x<sup>3</sup> - y<sup>3</sup></b> = ડા.બા.
                            </div>
                        </div>
                    </div>
                </div>`
            },
            { 
                "questionNumber": "સ્વાધ્યાય 2.4 - પ્રશ્ન 10",
                "marks": 3,
                "question": "નીચેના પૈકી દરેકના અવયવ પાડો:\n(i) 27y³ + 125z³\n(ii) 64m³ - 343n³\n[સૂચન: પ્રશ્ન 9 જુઓ]", 
                "answer": `
                <div style='background-color:#ffffff; padding:15px; border:1px solid #cbd5e1; border-radius:8px;'>
                    <p style='margin-top:0; font-size:15px; color:#334155; font-weight:bold;'>ઉપરના પ્રશ્ન 9 માં સાબિત કરેલા સૂત્રોનો સીધો ઉપયોગ કરવાનો છે.</p>

                    <div style='display:flex; flex-direction:column; gap:15px; overflow-x:auto;'>
                        <div style='background-color:#f0fdf4; padding:12px; border-radius:5px; border-left:4px solid #16a34a; min-width:350px;'>
                            <h4 style='color:#14532d; margin:0 0 8px 0;'>(i) 27y<sup>3</sup> + 125z<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#166534; line-height:1.6;'>
                                = (3y)<sup>3</sup> + (5z)<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[સૂત્ર: a<sup>3</sup> + b<sup>3</sup> = (a+b)(a<sup>2</sup> - ab + b<sup>2</sup>)]</span><br>
                                = (3y + 5z) [ (3y)<sup>2</sup> - (3y)(5z) + (5z)<sup>2</sup> ]<br>
                                = <b style='color:#15803d; font-size:15px;'>(3y + 5z)(9y<sup>2</sup> - 15yz + 25z<sup>2</sup>)</b>
                            </div>
                        </div>

                        <div style='background-color:#fff1f2; padding:12px; border-radius:5px; border-left:4px solid #be123c; min-width:350px;'>
                            <h4 style='color:#881337; margin:0 0 8px 0;'>(ii) 64m<sup>3</sup> - 343n<sup>3</sup></h4>
                            <div style='font-family:monospace; font-size:14px; color:#9f1239; line-height:1.6;'>
                                = (4m)<sup>3</sup> - (7n)<sup>3</sup><br>
                                <span style='color:#64748b; font-size:12px;'>[સૂત્ર: a<sup>3</sup> - b<sup>3</sup> = (a-b)(a<sup>2</sup> + ab + b<sup>2</sup>)]</span><br>
                                = (4m - 7n) [ (4m)<sup>2</sup> + (4m)(7n) + (7n)<sup>2</sup> ]<br>
                                = <b style='color:#be123c; font-size:15px;'>(4m - 7n)(16m<sup>2</sup> + 28mn + 49n<sup>2</sup>)</b>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style='background-color:#fffbeb; padding:15px; border-radius:8px; border:2px dashed #ca8a04; margin-top:15px;'>
                    <b style='color:#b45309; font-size:16px;'>🎯 Nitesh Sir ની સ્માર્ટ ટ્રીક:</b> 
                    <p style='margin:5px 0 0 0; font-size:15px; color:#854d0e;'>આવા દાખલામાં બીજા કૌંસમાં નિશાનીની બહુ ભૂલ પડે છે! તેને યાદ રાખવાનો સિમ્પલ રસ્તો:<br>
                    <b>SOAP નો નિયમ!</b><br>
                    <b>S</b> = Same (પહેલા કૌંસમાં રકમ જેવી જ નિશાની)<br>
                    <b>O</b> = Opposite (બીજા કૌંસના પહેલા પદમાં વિરુદ્ધ નિશાની)<br>
                    <b>AP</b> = Always Positive (બીજા કૌંસનું છેલ્લું પદ હંમેશા પ્લસ જ હોય!)</p>
                </div>`
            }
            
            
        
        ]
    }
};

