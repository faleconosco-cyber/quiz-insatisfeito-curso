import { blocoFinal } from '../data/results'

// Bloco que fecha todos os perfis, igual. A tese do quiz mora aqui: entre as
// duas portas existe caminho. Por isso as portas são desenhadas de novo, agora
// com o que cabe entre elas.
export default function FinalCTA({ onWhatsApp }) {
  return (
    <section className="cartao" style={{ padding: '30px 24px' }}>
      <h2 style={{ fontSize: 'clamp(1.3rem, 5.2vw, 1.6rem)', marginBottom: 16 }}>
        {blocoFinal.titulo}
      </h2>

      <p className="leitura" style={{
        fontSize: 15.5, color: 'var(--tinta-media)', lineHeight: 1.72, marginBottom: 16,
      }}>
        {blocoFinal.abertura}
      </p>

      <div className="bifurcacao" aria-hidden="true" style={{ marginBottom: 18 }}>
        <span className="porta">{blocoFinal.portas[0]}</span>
        <span className="ou">ou</span>
        <span className="porta">{blocoFinal.portas[1]}</span>
      </div>

      <p className="leitura" style={{
        fontSize: 15.5, color: 'var(--tinta-media)', lineHeight: 1.72, marginBottom: 14,
      }}>
        {blocoFinal.meio}
      </p>

      <ul style={{ listStyle: 'none', margin: '0 0 20px', maxWidth: 'var(--leitura)' }}>
        {blocoFinal.lista.map((it, i) => (
          <li key={i} style={{
            position: 'relative', paddingLeft: 20, marginBottom: 8,
            fontSize: 15, color: 'var(--tinta-media)', lineHeight: 1.6,
          }}>
            <span aria-hidden="true" style={{
              position: 'absolute', left: 2, top: 10,
              width: 6, height: 6, borderRadius: '50%', background: 'var(--verde-claro)',
            }} />
            {it}
          </li>
        ))}
      </ul>

      <div style={{
        background: 'var(--verde)', borderRadius: 12,
        padding: '22px 20px', marginBottom: 18,
      }}>
        <p className="serif" style={{
          fontSize: 'clamp(1.05rem, 4.3vw, 1.2rem)',
          fontWeight: 600, lineHeight: 1.5, color: '#fff',
        }}>
          {blocoFinal.destaque}
        </p>
      </div>

      {blocoFinal.fechamento.map((p, i) => (
        <p key={i} className="leitura" style={{
          fontSize: 15.5, color: 'var(--tinta-media)', lineHeight: 1.72, marginBottom: 14,
        }}>
          {p}
        </p>
      ))}

      <button type="button" className="botao botao-whats" onClick={onWhatsApp} style={{ marginTop: 12 }}>
        {blocoFinal.cta}
        <span aria-hidden="true">→</span>
      </button>
    </section>
  )
}
