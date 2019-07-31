package com.saagie.backend.models

import javax.persistence.*

@Entity
@Table(name = "achievement")
data class Achievement(@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
                var id: Long? = null,
                var goal: String? = null,
                var unlocked: Boolean = false)