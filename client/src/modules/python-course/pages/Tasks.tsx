import { useState } from 'react'
import PythonNavbar from '../components/PythonNavbar'
import PythonFooter from '../components/PythonFooter'
import { executePython, validateTask } from '../services/groq'
import './Tasks.css'

const API_BASE = 'https://techinmystyle.onrender.com'

interface Task { id: string; title: string; instructions: string; hint: string; difficulty: 'Beginner' | 'Easy' | 'Medium' | 'Hard' }

const TASKS: Task[] = [
  { id:'t01', title:'Print a Message', instructions:"Write Python code to print exactly 'Hello, Python!' to the console.", hint:'Use the print() function with the exact string.', difficulty:'Beginner' },
  { id:'t02', title:'Variables & Addition', instructions:'Declare `a = 5` and `b = 10`, then print their sum using `print(a + b)`.', hint:'Assign values then use print() with the + operator.', difficulty:'Beginner' },
  { id:'t03', title:'User Input', instructions:'Store user input in `user_input` using `input()`, then print it.', hint:'Use input("Enter something: ") and store in user_input.', difficulty:'Beginner' },
  { id:'t04', title:'If-Else Statement', instructions:'Set `a = 10`. Print "Greater" if a > 5, else print "Not greater".', hint:'Use if/else with a comparison operator.', difficulty:'Beginner' },
  { id:'t05', title:'Define a Function', instructions:"Define `greet()` that prints 'Welcome!' then call it.", hint:'Use def to define, then call by name.', difficulty:'Beginner' },
  { id:'t06', title:'For Loop 1–5', instructions:'Write a for loop that prints numbers 1 through 5, each on a new line.', hint:'Use range(1, 6) in your for loop.', difficulty:'Easy' },
  { id:'t07', title:'While Loop', instructions:'Use a while loop to print numbers 1 to 5 using a counter variable.', hint:'Initialize counter = 1, loop while counter <= 5, increment.', difficulty:'Easy' },
  { id:'t08', title:'List Creation', instructions:'Create a list `fruits` with 3 fruit names. Print the list and its length.', hint:'Use a list literal and the len() function.', difficulty:'Easy' },
  { id:'t09', title:'String Methods', instructions:'Create a string with your name. Print it in uppercase and print its length.', hint:'Use .upper() and len() on the string.', difficulty:'Easy' },
  { id:'t10', title:'Dictionary Basics', instructions:'Create a dict with keys "name" and "age". Print each value using its key.', hint:'Use dict["key"] to access values.', difficulty:'Easy' },
  { id:'t11', title:'List Indexing', instructions:'Create a list of 5 numbers. Print the first and last element.', hint:'Use index [0] for first and [-1] for last.', difficulty:'Easy' },
  { id:'t12', title:'String Concatenation', instructions:'Create two string variables `first` and `last`. Print them joined with a space.', hint:'Use the + operator or f-string to join strings.', difficulty:'Easy' },
  { id:'t13', title:'Even or Odd', instructions:'Set `n = 7`. Print "Even" if n is even, else print "Odd".', hint:'Use the modulo operator % to check divisibility by 2.', difficulty:'Easy' },
  { id:'t14', title:'Sum of List', instructions:'Create a list of 5 numbers and print their sum using the sum() function.', hint:'Use sum() with your list as the argument.', difficulty:'Easy' },
  { id:'t15', title:'Function with Return', instructions:'Define `square(n)` that returns n squared. Print square(4).', hint:'Use return n * n inside the function.', difficulty:'Easy' },
  { id:'t16', title:'List Comprehension', instructions:'Use a list comprehension to create a list of squares from 1 to 5. Print it.', hint:'[x**2 for x in range(1, 6)]', difficulty:'Medium' },
  { id:'t17', title:'Dictionary Loop', instructions:'Create a dict with 3 key-value pairs. Loop through it and print each key and value.', hint:'Use dict.items() in a for loop.', difficulty:'Medium' },
  { id:'t18', title:'String Slicing', instructions:'Create a string "Hello, World!". Print only "World" using slicing.', hint:'Use string[7:12] to slice.', difficulty:'Medium' },
  { id:'t19', title:'Nested Function', instructions:'Define `outer()` that defines and calls `inner()` which prints "Inner called!". Call outer().', hint:'Define inner() inside outer() and call it.', difficulty:'Medium' },
  { id:'t20', title:'Try-Except', instructions:'Write code that tries to divide 10 by 0 and catches the ZeroDivisionError, printing "Cannot divide by zero".', hint:'Use try/except ZeroDivisionError.', difficulty:'Medium' },
  { id:'t21', title:'Lambda Function', instructions:'Create a lambda that multiplies two numbers. Store it in `multiply` and print multiply(3, 4).', hint:'lambda x, y: x * y', difficulty:'Medium' },
  { id:'t22', title:'Class Basics', instructions:'Define a class `Dog` with a method `bark()` that prints "Woof!". Create an instance and call bark().', hint:'Use class Dog: and def bark(self):.', difficulty:'Medium' },
  { id:'t23', title:'Inheritance', instructions:'Create class `Animal` with method `speak()` printing "...". Create class `Cat(Animal)` overriding speak() to print "Meow!". Call Cat().speak().', hint:'Use class Cat(Animal): and override speak().', difficulty:'Medium' },
  { id:'t24', title:'List Sorting', instructions:'Create a list [3,1,4,1,5,9,2,6]. Print it sorted in ascending order without modifying the original.', hint:'Use sorted() which returns a new sorted list.', difficulty:'Medium' },
  { id:'t25', title:'String Split & Join', instructions:'Split "python is awesome" into a list of words. Then join them back with hyphens and print.', hint:'Use .split() then "-".join(words).', difficulty:'Medium' },
  { id:'t26', title:'Default Arguments', instructions:'Define `greet(name, greeting="Hello")` that prints the greeting and name. Call it with just a name.', hint:'Set a default value in the function signature.', difficulty:'Medium' },
  { id:'t27', title:'*args Function', instructions:'Define `total(*nums)` that returns the sum of all passed numbers. Print total(1,2,3,4,5).', hint:'Use *args and return sum(nums).', difficulty:'Hard' },
  { id:'t28', title:'Dictionary Comprehension', instructions:'Create a dict comprehension mapping numbers 1–5 to their cubes. Print the result.', hint:'{n: n**3 for n in range(1, 6)}', difficulty:'Hard' },
  { id:'t29', title:'Generator Function', instructions:'Define a generator `countdown(n)` that yields numbers from n down to 1. Print each value from countdown(5).', hint:'Use yield inside a while or for loop.', difficulty:'Hard' },
  { id:'t30', title:'Decorator', instructions:'Write a decorator `shout` that wraps a function\'s return value in uppercase. Apply it to `greet()` that returns "hello". Print greet().', hint:'Define shout(func) returning a wrapper that calls func() and applies .upper().', difficulty:'Hard' },
]

const DC: Record<string, string> = { Beginner:'#22c55e', Easy:'#3b82f6', Medium:'#f59e0b', Hard:'#ef4444' }

type RS = 'idle'|'running'|'done'|'err'
interface Out { output:string; error:string|null; passed:boolean; feedback:string; rs:RS }

export default function Tasks() {
  const [sel, setSel] = useState<number|null>(null)
  const [code, setCode] = useState('')
  const [out, setOut] = useState<Out|null>(null)
  const [hint, setHint] = useState(false)
  const [saving, setSaving] = useState(false)
  const [done, setDone] = useState<Set<string>>(new Set())

  const open = (i: number) => { setSel(i); setCode(''); setOut(null); setHint(false) }

  const run = async () => {
    if (sel === null || !code.trim()) return
    const task = TASKS[sel]
    setOut({ output:'', error:null, passed:false, feedback:'', rs:'running' })
    try {
      const { output, error } = await executePython(code)
      const result = await validateTask(task.title, task.instructions, code, output, error)
      setOut({ output:result.output, error:result.error, passed:result.passed, feedback:result.feedback, rs:'done' })
    } catch (e) {
      setOut({ output:'', error: e instanceof Error ? e.message : 'Unknown error', passed:false, feedback:'Could not connect. Check your internet connection.', rs:'err' })
    }
  }

  const markDone = async () => {
    if (!out?.passed || sel === null) return
    const task = TASKS[sel]
    setSaving(true)
    try {
      await fetch(`${API_BASE}/task/complete`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ username: localStorage.getItem('username')||'guest', course:'python', task_id: task.id }),
      })
    } catch { /* ignore */ }
    setDone(p => new Set([...p, task.id]))
    setSaving(false)
  }

  const cur = sel !== null ? TASKS[sel] : null
  const isDone = cur ? done.has(cur.id) : false

  return (
    <div className="py-tasks-page">
      <PythonNavbar showTasks />
      <div className="py-tasks-hero">
        <span className="py-chip">✅ Practice</span>
        <h1>Python <span>Tasks</span></h1>
        <p>Write real Python code, run it instantly, and get smart feedback on every task.</p>
        <div className="py-tasks-chips">
          <span className="py-tasks-chip">⚡ Instant Execution</span>
          <span className="py-tasks-chip">🎯 Smart Validation</span>
          <span className="py-tasks-chip">30 Challenges</span>
        </div>
      </div>

      <div className="py-tasks-body">
        <aside className="py-tasks-sidebar">
          <div className="py-sb-hd">
            <h2>All Tasks</h2>
            <span className="py-sb-count">{done.size}/{TASKS.length}</span>
          </div>
          <ul className="py-task-ul">
            {TASKS.map((t, i) => (
              <li key={t.id} className={`py-task-li${sel===i?' py-sel':''}${done.has(t.id)?' py-done':''}`} onClick={() => open(i)}>
                <span className="py-tnum">{done.has(t.id) ? '✓' : i+1}</span>
                <div className="py-tinfo">
                  <span className="py-ttitle">{t.title}</span>
                  <span className="py-tdiff" style={{ color: DC[t.difficulty] }}>{t.difficulty}</span>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <div className="py-task-editor">
          {sel === null ? (
            <div className="py-t-empty">
              <div className="py-eico">🐍</div>
              <h3>Select a task to begin</h3>
              <p>Choose from {TASKS.length} Python challenges on the left</p>
            </div>
          ) : (
            <>
              <div className="py-t-hd">
                <div className="py-t-hd-top">
                  <span className="py-t-idx">Task {sel+1}</span>
                  <span className="py-t-diff" style={{ background: DC[cur!.difficulty]+'22', color: DC[cur!.difficulty] }}>{cur!.difficulty}</span>
                  {isDone && <span className="py-t-done-badge">✓ Completed</span>}
                </div>
                <h2>{cur!.title}</h2>
                <p className="py-t-instr">{cur!.instructions}</p>
                <button className="py-hint-btn" onClick={() => setHint(p => !p)}>{hint ? '🙈 Hide Hint' : '💡 Show Hint'}</button>
                {hint && <div className="py-hint-box"><span>💡</span>{cur!.hint}</div>}
              </div>

              <div className="py-t-body">
                <div className="py-editor-wrap">
                  <div className="py-editor-bar">
                    <div className="py-edots"><span/><span/><span/></div>
                    <span className="py-efile">solution.py</span>
                    <span className="py-elang">Python 3</span>
                  </div>
                  <textarea className="py-code-ta" placeholder="# Write your Python code here..." value={code} onChange={e => setCode(e.target.value)} spellCheck={false} autoCapitalize="none" autoCorrect="off" />
                </div>

                <div className="py-t-actions">
                  <button className="py-btn py-btn-y py-run-btn" style={{border:'none'}} onClick={run} disabled={out?.rs==='running' || !code.trim()}>
                    {out?.rs==='running' ? <><span className="py-spin"/> Running...</> : <>▶ Run & Validate</>}
                  </button>
                  {out?.passed && !isDone && (
                    <button className="py-btn py-btn-y" style={{border:'none'}} onClick={markDone} disabled={saving}>{saving ? 'Saving...' : '🎉 Mark Complete'}</button>
                  )}
                  {isDone && <span className="py-done-pill">✓ Task Completed</span>}
                </div>

                {out && out.rs !== 'idle' && (
                  <div className="py-out-panel">
                    {out.rs === 'running' ? (
                      <div className="py-out-loading">
                        <div className="py-ai-dots"><span className="py-ai-dot"/><span className="py-ai-dot"/><span className="py-ai-dot"/></div>
                        <span>Executing your code...</span>
                      </div>
                    ) : (
                      <>
                        <div className="py-term-blk">
                          <div className="py-term-bar"><span>⬛ Terminal Output</span></div>
                          <div className="py-term-body">
                            {out.error ? <span className="py-terr">{out.error}</span>
                              : out.output ? <span className="py-tout">{out.output}</span>
                              : <span className="py-tempty">(no output)</span>}
                          </div>
                        </div>
                        <div className={`py-val-res ${out.passed ? 'py-pass' : 'py-fail'}`}>
                          <div className="py-val-ico">{out.passed ? '✅' : '❌'}</div>
                          <div className="py-val-txt">
                            <strong>{out.passed ? 'Task Passed!' : 'Not quite right'}</strong>
                            <span>{out.feedback}</span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <PythonFooter />
    </div>
  )
}
