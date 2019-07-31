package com.saagie.backend.models

data class AchievementDto(var id: Long? = null,
                   var goal: String? = null,
                   var unlocked: Boolean = false){
    object ModelMapper {
        infix fun from(achievement: Achievement) =
                AchievementDto(achievement.id, achievement.goal, achievement.unlocked)
    }
}
