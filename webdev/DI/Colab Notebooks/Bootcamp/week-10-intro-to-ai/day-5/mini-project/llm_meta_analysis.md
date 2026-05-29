# Meta-Analysis of Research Papers on Large Language Models (LLMs)

*Week 10 — Day 5 Mini Project | Intro to AI Bootcamp*
*Name: [Your Name] | Date: May 2026*

---

## 1. Introduction

Large Language Models (LLMs) are a type of deep learning model trained on massive amounts of text to predict and generate language. They've become one of the most active areas in AI research, and the progress over the last few years has been fast — from GPT-3 handling decent zero-shot tasks in 2020 to models like GPT-4 and Claude managing complex conversations, reasoning, and code generation by 2023.

The thing is, a model that can technically predict text well isn't the same as a model that's actually useful or safe to deploy. That gap between raw capability and real-world use is what connects the five papers I chose for this analysis. The shared theme is: how do you make LLMs more aligned with what users want, safer to use, and cheaper to fine-tune and run? These questions come up across instruction tuning, alignment research, and efficiency work — and each paper approaches it from a different angle.

Papers included in this analysis:

1. Ouyang et al. (2022). *Training language models to follow instructions with human feedback.* NeurIPS 2022.
2. Touvron et al. (2023). *Llama 2: Open Foundation and Fine-Tuned Chat Models.* Meta AI / arXiv:2307.09288.
3. Hu et al. (2022). *LoRA: Low-Rank Adaptation of Large Language Models.* ICLR 2022.
4. Bai et al. (2022). *Constitutional AI: Harmlessness from AI Feedback.* Anthropic / arXiv:2212.08073.
5. Jiang et al. (2023). *Mistral 7B.* Mistral AI / arXiv:2310.06825.

---

## 2. Paper Summaries

### Paper 1 — InstructGPT: Training LMs to Follow Instructions with Human Feedback

**Full Citation:** Ouyang, L., Wu, J., Jiang, X., Almeida, D., Wainwright, C. L., Mishkin, P., Zhang, C., Agarwal, S., Slama, K., Ray, A., Schulman, J., Hilton, J., Kelton, F., Miller, L., Simens, M., Askell, A., Welinder, P., Christiano, P., Leike, J., & Lowe, R. (2022). Training language models to follow instructions with human feedback. *NeurIPS 2022.*

**Research Problem:** GPT-3 was trained to predict the next token in a sequence — not to respond helpfully to instructions. This mismatch meant the model would often produce outputs that were off-topic, verbose, or harmful even when given a clear prompt. It's capable of generating fluent text, but that doesn't mean it actually does what you ask.

**Proposed Solution:** The paper introduces RLHF (Reinforcement Learning from Human Feedback) as a three-step pipeline: (1) supervised fine-tuning on human-written demonstrations, (2) training a reward model from human preference rankings between outputs, and (3) using PPO to fine-tune the LM to maximise the reward model's score. The resulting model is called InstructGPT.

**Main Results:** InstructGPT at 1.3B parameters was preferred over GPT-3 at 175B in human evaluations — a model 100x smaller outperforming the base model purely through alignment training. It also produced significantly fewer toxic and hallucinated outputs on TruthfulQA and RealToxicityPrompts.

**Datasets, Architecture, Metrics:** Built on GPT-3. Training data was sampled from real OpenAI API prompts plus human-written examples. Evaluated through human preference ratings, TruthfulQA, and RealToxicityPrompts.

---

### Paper 2 — Llama 2: Open Foundation and Fine-Tuned Chat Models

**Full Citation:** Touvron, H., Martin, L., Stone, K., Albert, P., Almahairi, A., Babaei, Y., Bashlykov, N., Batra, S., Bhargava, P., Bhosale, S., & Scialom, T. (2023). Llama 2: Open foundation and fine-tuned chat models. *Meta AI, arXiv:2307.09288.*

**Research Problem:** Most of the best-performing LLMs at the time — GPT-4, Claude — were closed source. Researchers couldn't inspect the weights, study the architecture, or build on them directly. There was a clear need for a high-quality, open chat model that also took safety seriously.

**Proposed Solution:** Meta released Llama 2, a family of pre-trained and fine-tuned models at 7B, 13B, and 70B scales. The Llama 2-Chat variants use a similar RLHF pipeline to InstructGPT plus a technique called Ghost Attention (GAtt), which helps the model maintain consistent system-level instructions across long multi-turn conversations without drifting.

**Main Results:** Llama 2-Chat (70B) is competitive with GPT-3.5 on helpfulness benchmarks. The 13B version outperforms most other open-source models at the 30B+ scale. Safety evaluations also put it above many open and closed models at the time.

**Datasets, Architecture, Metrics:** Pre-trained on 2 trillion tokens. Decoder-only Transformer with grouped-query attention (GQA). Evaluated on MMLU, HumanEval, GSM8K, MT-Bench, and human preference studies.

---

### Paper 3 — LoRA: Low-Rank Adaptation of Large Language Models

**Full Citation:** Hu, E. J., Shen, Y., Wallis, P., Allen-Zhu, Z., Li, Y., Wang, S., Wang, L., & Chen, W. (2022). LoRA: Low-rank adaptation of large language models. *ICLR 2022.*

**Research Problem:** Full fine-tuning of large models means updating every single parameter — for GPT-3 that's 175 billion of them. That's computationally expensive, memory-intensive, and you need a separate full model copy for every task you fine-tune on. This makes adapting LLMs to specific use cases inaccessible for most researchers and smaller teams.

**Proposed Solution:** LoRA freezes all the pre-trained model weights and injects trainable low-rank decomposition matrices into each Transformer layer. For a weight matrix W of shape d × d, rather than updating W directly, LoRA learns two smaller matrices A (d × r) and B (r × d) where r is much smaller than d. Only A and B get trained during fine-tuning. At inference, the product BA gets merged back into W — so there's no added latency.

**Main Results:** LoRA matches or beats full fine-tuning on standard NLG benchmarks (E2E, WebNLG, DART for GPT-3; GLUE for RoBERTa/DeBERTa) while reducing trainable parameters by up to 10,000x and GPU memory usage by around 3x.

**Datasets, Architecture, Metrics:** Tested on GPT-2, GPT-3, RoBERTa, and DeBERTa. Benchmarks include GLUE, E2E NLG, WebNLG, DART, and commonsense reasoning tasks.

---

### Paper 4 — Constitutional AI: Harmlessness from AI Feedback

**Full Citation:** Bai, Y., Jones, A., Ndousse, K., Askell, A., Chen, A., DasSarma, N., Drain, D., Fort, S., Ganguli, D., Henighan, T., Joseph, N., Kadavath, S., Kernion, J., Conerly, T., El-Showk, S., Elhage, N., Hatfield-Dodds, Z., Hernandez, D., Hume, T., Johnston, S., Kravec, S., Lovitt, L., Nanda, N., Olsson, C., Amodei, D., Brown, T., Clark, J., McCandlish, S., Olah, C., Mann, B., & Kaplan, J. (2022). Constitutional AI: Harmlessness from AI feedback. *Anthropic, arXiv:2212.08073.*

**Research Problem:** RLHF requires a lot of human-labeled preference data, which is slow and expensive to collect at scale. There's also no explicit, auditable definition of what "harmless" or "helpful" means — human raters use implicit judgments that are hard to inspect or scale up as models get more capable.

**Proposed Solution:** Constitutional AI uses a written set of explicit principles (a "constitution") to guide model behavior. The process runs in two stages: (1) SL-CAI, where the model critiques and revises its own potentially harmful responses using the constitution, and (2) RLAIF, where AI-generated preference labels replace expensive human labels to train a reward model, which is then used in standard RLHF.

**Main Results:** CAI-trained models (early Claude versions) score higher on both helpfulness and harmlessness than RLHF-only models in Anthropic's internal evaluations. The model can also explain why it's declining a request, which is useful for user trust and transparency.

**Datasets, Architecture, Metrics:** Uses Anthropic's internal helpfulness and harmlessness dataset. Decoder-only LM (architecture not disclosed at the time). Evaluated with human preference ratings and automated red-team metrics.

---

### Paper 5 — Mistral 7B

**Full Citation:** Jiang, A. Q., Sablayrolles, A., Mensch, A., Bamford, C., Chaplot, D. S., de las Casas, D., Bressand, F., Lengyel, G., Lample, G., Saulnier, L., Lavaud, L. R., Lachaux, M. A., Stock, P., Le Scao, T., Lavril, T., Wang, T., Lacroix, T., & El Sayed, W. (2023). Mistral 7B. *Mistral AI, arXiv:2310.06825.*

**Research Problem:** A common assumption across LLM research is that more parameters equals better performance. But large models are expensive to train and serve. Mistral 7B asks whether a smaller model can compete with much larger ones if the architecture and training choices are done carefully enough.

**Proposed Solution:** Mistral 7B introduces two architectural changes: Grouped-Query Attention (GQA), which reduces inference memory bandwidth and speeds up decoding, and Sliding Window Attention (SWA), which allows the model to handle longer contexts without quadratic memory scaling. It was trained on a large, carefully filtered web corpus and released under Apache 2.0.

**Main Results:** Mistral 7B outperforms Llama 2 13B on every benchmark tested and matches Llama 2 34B on most tasks. On reasoning, math, and coding it beats Llama 1 34B — a model roughly five times its size.

**Datasets, Architecture, Metrics:** Trained on a filtered web crawl. Evaluated on HellaSwag, PIQA, WinoGrande, ARC-Easy, ARC-Challenge, BoolQ, MBPP, HumanEval, and GSM8K.

---

## 3. Comparative Analysis

### 3.1 Objectives and Problem Domains

| Paper | Main Focus | Core Problem |
|---|---|---|
| InstructGPT | Alignment / RLHF | Making models follow instructions |
| Llama 2 | Open-source + Safety | Democratizing safe, capable LLMs |
| LoRA | Parameter Efficiency | Reducing fine-tuning cost and memory |
| Constitutional AI | Scalable Alignment | Safety without expensive human labeling |
| Mistral 7B | Architecture Efficiency | High performance at small model scale |

### 3.2 Model Architectures and Key Innovations

| Paper | Architecture | Key Innovation |
|---|---|---|
| InstructGPT | GPT-3 (175B) | RLHF pipeline (SFT + reward model + PPO) |
| Llama 2 | Decoder-only, GQA | Ghost Attention for multi-turn consistency |
| LoRA | Any Transformer | Low-rank adapters injected into frozen weights |
| Constitutional AI | Decoder-only LM | AI self-critique + RLAIF pipeline |
| Mistral 7B | Decoder-only, GQA + SWA | Sliding window attention for long-context efficiency |

### 3.3 Training Strategies

| Paper | Strategy | Scale |
|---|---|---|
| InstructGPT | SFT → Reward Model → PPO | 1.3B–175B |
| Llama 2 | Pre-training + SFT + RLHF | 7B–70B |
| LoRA | Frozen base + low-rank adapters | Any |
| Constitutional AI | SL-CAI → RLAIF → RLHF | Not disclosed |
| Mistral 7B | Standard pre-training | 7B |

### 3.4 Benchmarks and Evaluation

One thing that made comparing these papers tricky is that the evaluation setups are all over the place. InstructGPT and Constitutional AI rely mostly on human preference ratings, which are more meaningful for measuring real-world helpfulness but are expensive to replicate. Llama 2, LoRA, and Mistral 7B use standard benchmarks like MMLU, HumanEval, and GLUE — reproducible, but they don't always capture how a model behaves in open-ended real-world use. There's no universal standard for evaluating LLMs yet, and that's a genuine problem for making cross-paper comparisons.

### 3.5 Strengths, Limitations, and Reproducibility

| Paper | Strength | Limitation | Reproducibility |
|---|---|---|---|
| InstructGPT | Very influential, strong alignment results | No model release, closed-source base | Low |
| Llama 2 | Open weights, strong safety evaluation | Needs significant compute at 70B | Good |
| LoRA | Massive cut in fine-tuning cost | Minor gaps vs full fine-tune on some tasks | Excellent |
| Constitutional AI | Principled, more scalable alignment approach | Base model closed, internal data only | Low |
| Mistral 7B | Strong performance far above its parameter count | Pre-training data not fully documented | Good |

---

## 4. Insights and Reflection

The most consistent pattern across all five papers is the shift away from "train a bigger model." InstructGPT showed that a 1.3B aligned model outperforms a 175B base model in practice. LoRA showed you don't need to update every parameter to get strong fine-tuning results. Mistral 7B showed a 7B model with better architecture choices can match a 34B one. The field seems to have moved toward the view that training strategy, data quality, and architecture matter more than just adding parameters.

Safety and alignment comes up across all five papers, just in different forms. InstructGPT and Llama 2 both use human-feedback RLHF. Constitutional AI tries to reduce dependence on expensive human labels by using AI-generated feedback instead. The CAI approach seems especially worth watching — if RLAIF scales well, it could make alignment much more accessible to teams that can't afford large human labeling pipelines.

The open-source shift also stood out. Llama 2, Mistral 7B, and LoRA all have public weights or code, and that's clearly sped up downstream research. The gap between open and closed models closed faster than a lot of people expected, and it seems directly tied to the fact that researchers can actually inspect, fine-tune, and build on these models rather than just calling an API.

Shared limitations across papers: evaluation is inconsistent and not standardized across the field; pre-training data is often undisclosed or poorly documented; and alignment techniques (RLHF, CAI) don't come with guarantees that they generalize as models scale further. Hallucination and bias are acknowledged in all five papers but none offer a full solution.

Future directions that seem most relevant based on this analysis: better standardized evaluation (something that covers real-world use, not just benchmark scores); combining LoRA-style efficiency with alignment fine-tuning to lower the cost of safety training; scaling RLAIF; and extending these techniques to multi-modal inputs — all five papers are text-only, which is already a limitation given where the field is heading.

---

## 5. Conclusion

These five papers together show that the "just make it bigger" phase of LLM research is over — or at least being seriously challenged. The current focus is on making models genuinely useful through alignment, efficient to adapt through parameter-efficient fine-tuning, and practical for smaller teams through open weights and smaller architectures. RLHF has become the standard alignment tool, but Constitutional AI points toward something more scalable. LoRA has fundamentally changed what individual researchers can do with large models. Mistral 7B proved architecture improvements alone can close a huge performance gap.

What I found most interesting doing this analysis is how interconnected these problems are. Making fine-tuning cheaper (LoRA) also makes safety fine-tuning cheaper. Open weights (Llama 2, Mistral) accelerate alignment research. The next challenges — standardizing evaluation, scaling alignment, handling multi-modal inputs — all seem tractable given the pace of the last few years.

---

## References

1. Ouyang, L., et al. (2022). Training language models to follow instructions with human feedback. *NeurIPS 2022.* https://arxiv.org/abs/2203.02155
2. Touvron, H., et al. (2023). Llama 2: Open foundation and fine-tuned chat models. *arXiv:2307.09288.* https://arxiv.org/abs/2307.09288
3. Hu, E. J., et al. (2022). LoRA: Low-rank adaptation of large language models. *ICLR 2022.* https://arxiv.org/abs/2106.09685
4. Bai, Y., et al. (2022). Constitutional AI: Harmlessness from AI feedback. *arXiv:2212.08073.* https://arxiv.org/abs/2212.08073
5. Jiang, A. Q., et al. (2023). Mistral 7B. *arXiv:2310.06825.* https://arxiv.org/abs/2310.06825
